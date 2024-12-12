"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";
import MediaCard from '../../component/MediaCard'
import { useRouter } from 'next/navigation'
const page = () => {
 
  
  const router= useRouter()
  return (
   <>
   
   <div className='flex  w-full justify-center' >
        <button className='px-4 py-2 mx-3 rounded-md bg-green-200 hover:bg-white hover:border-green-500 hover:border-1' onClick={()=>{router.push('/Dashboard/Courses/Tech')}}> Technical</button>
        <button className='px-4 py-2 mx-3 rounded-md bg-green-200 hover:bg-white hover:border-green-500 hover:border-1'onClick={()=>{router.push('/Dashboard/Courses/NonTech')}}> Non-Technical</button>
        <button className='px-4 py-2 mx-3 rounded-md bg-green-200 hover:bg-white hover:border-green-500 hover:border-1'onClick={()=>{router.push('/Dashboard/Courses/Private')}}> Private</button>
        <button className='px-4 py-2 mx-3 rounded-md bg-green-200 hover:bg-white hover:border-green-500 hover:border-1'onClick={()=>{router.push('/Dashboard/Courses/Government')}}> Government</button>
 </div>
    
    <div className='mt-5'>
        <div className='bg-slate-200 rounded-lg p-3' >
      <h2 className='mt-3 mb-3 mx-2 text-lg font-bold'>
        Enrolled Courses
      </h2>
      
      
<div className='grid  grid-cols-2 justify-center'>

          <MediaCard  title="Mern Stack Development" val='0.25' dis="The MERN stack is a full stack framework, meaning that the technology layers are pre-defined.  back end, and server infrastructure for web applications using JavaScript. " />
          <MediaCard title="Mern Stack Development" val='0.25' dis="The MERN stack is a full stack framework, meaning that the technology layers are pre-defined.  back end, and server infrastructure for web applications using JavaScript. " />
          
</div>

        </div>

    </div>
    </>
  )
}

export default page