'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { uploadJobs } from '../actions/upload-jobs'

interface Job {
  title: string
  skills: string[]
  salary: string
  location: string
  type: string
}

export function JobBoard() {
  const [jobs, setJobs] = useState<Job[]>([])

  async function handleUpload(formData: FormData) {
    const result = await uploadJobs(formData)
    if (result.jobs) {
      setJobs(result.jobs)
    } else if (result.error) {
      alert(result.error)
    }
  }

  return (
    <div>
      <form action={handleUpload} className="mb-8">
        <div className="flex items-center gap-4">
          <Input type="file" name="csvFile" accept=".csv" required />
          <Button type="submit">Upload Jobs</Button>
        </div>
      </form>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <strong>Skills:</strong>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {job.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
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
    </div>
  )
}

