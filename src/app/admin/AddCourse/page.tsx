import { JobPostingForm } from '../../component/job-posting-form'
import { JobList } from '../../component/job-list'

export default function CompanyPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Company Job Board</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <JobPostingForm />
        <JobList />
      </div>
    </div>
  )
}

