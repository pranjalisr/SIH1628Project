'use server'

import { parse } from 'csv-parse/sync'

export async function uploadJobs(formData: FormData) {
  const file = formData.get('csvFile') as File
  if (!file) {
    return { error: 'No file uploaded' }
  }

  const content = await file.text()
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true
  })

  // Process and validate the records
  const jobs = records.map((record: any) => ({
    title: record.title,
    skills: record.skills.split(',').map((skill: string) => skill.trim()),
    salary: record.salary,
    location: record.location,
    type: record.type
  }))

  return { jobs }
}

