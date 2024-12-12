'use server'

import { revalidatePath } from 'next/cache'

// This would typically be in a database
let jobs: any[] = []

export async function postJob(formData: FormData) {
  const job = {
    id: Date.now(),
    title: formData.get('title'),
    skills: formData.get('skills')?.toString().split(',').map(skill => skill.trim()),
    salary: formData.get('salary'),
    location: formData.get('location'),
    type: formData.get('type'),
  }

  jobs.push(job)
  revalidatePath('/')
  return { success: true }
}

export async function getJobs() {
  return jobs
}

