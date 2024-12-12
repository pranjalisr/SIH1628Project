"use client"
import React from 'react'
import { redirect } from 'next/navigation'

const page = () => {
  return (
    <div>admin
        <button className='bg-red-500' onClick={()=>{redirect('/admin/AddCourse')}} >add Courses</button>
    </div>
  )
}

export default page