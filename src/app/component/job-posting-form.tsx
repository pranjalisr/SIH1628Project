'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { postJob } from '../actions/post-job'

export function JobPostingForm() {
  const router = useRouter()
  const [type, setType] = useState('full-time')

  async function handleSubmit(formData: FormData) {
    await postJob(formData)
    router.refresh()
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Job Title</Label>
        <Input id="title" name="title" required />
      </div>
      <div>
        <Label htmlFor="skills">Required Skills (comma-separated)</Label>
        
      </div>
      <div>
        <Label htmlFor="salary">Expected CTC</Label>
        <Input id="salary" name="salary" required />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input id="location" name="location" required />
      </div>
      <div>
        <Label htmlFor="type">Job Type</Label>
        <Select name="type" value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Select job type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
            <SelectItem value="remote">Remote</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Post Job</Button>
    </form>
  )
}

