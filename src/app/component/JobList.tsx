import { Job } from '../types/job'

interface JobListProps {
  jobs: Job[]
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Nearby Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="mb-4 p-4 border border-gray-300 rounded">
            <h3 className="font-bold">{job.title}</h3>
            <p>{job.company}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

