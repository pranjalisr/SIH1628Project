import { promises as fs } from 'fs'
import path from 'path'
import { parseISO, format, eachDayOfInterval, isSameDay } from 'date-fns'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface JobPosting {
  id: number
  title: string
  department: string
  datePosted: string
}

async function getData(): Promise<JobPosting[]> {
  const jsonDirectory = path.join(process.cwd(), 'data')
  const fileContents = await fs.readFile(jsonDirectory + '/job-postings.json', 'utf8')
  const data = JSON.parse(fileContents)
  return data.jobPostings
}

export default async function Page() {
  const jobPostings = await getData()

  const startDate = parseISO('2024-01-01')
  const endDate = parseISO('2024-02-29')

  const allDays = eachDayOfInterval({ start: startDate, end: endDate })

  const getJobsForDay = (date: Date) => {
    return jobPostings.filter(job => isSameDay(parseISO(job.datePosted), date))
  }

  const getIntensityColor = (jobCount: number) => {
    if (jobCount === 0) return 'bg-gray-100'
    if (jobCount <= 1) return 'bg-green-200'
    if (jobCount <= 2) return 'bg-green-400'
    return 'bg-green-600'
  }

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Peak Hiring Seasons (Jan-Feb 2024)</h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Job Postings Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center font-semibold">{day}</div>
            ))}
            {allDays.map(day => {
              const jobs = getJobsForDay(day)
              return (
                <div
                  key={day.toISOString()}
                  className={`h-20 p-1 rounded ${getIntensityColor(jobs.length)} flex flex-col items-center justify-start`}
                >
                  <span className="text-sm font-medium">{format(day, 'd')}</span>
                  {jobs.length > 0 && (
                    <Badge variant="secondary" className="mt-1">
                      {jobs.length} job{jobs.length > 1 ? 's' : ''}
                    </Badge>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Job Postings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobPostings.slice(-6).reverse().map(job => (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle className="text-lg">{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{job.department}</p>
                <p className="text-sm text-gray-600">Posted: {format(parseISO(job.datePosted), 'MMM d, yyyy')}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

