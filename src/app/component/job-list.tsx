import  JobCard  from '../component/Jobcard'
import { Badge } from '../component/badge'
import { getJobs } from '../actions/post-job'

export async function JobList() {
  const jobs = await getJobs()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Posted Jobs</h2>
      {jobs.map((job) => (
        <div className="space-y-2">
              <JobCard key={job.id} title={job.title} /> 
              <div>
                <strong>Skills:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {job.skills.map((skill: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <strong>Salary:</strong> {job.salary}
              </div>
              <div>
                <strong>Location:</strong> {job.location}
              </div>
              <div>
                <strong>Type:</strong> {job.type}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

