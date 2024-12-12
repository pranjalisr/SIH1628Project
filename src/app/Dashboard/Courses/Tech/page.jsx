"use client"
import MediaCard from '../../../component/MediaCard'
import { useRouter } from 'next/navigation'
import { useState,useEffect } from 'react'
const page = () => {
  const router= useRouter()
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://script.google.com/macros/s/AKfycbxSPOJ6MH6g6YypFj84NrmZH9vnK0faBvmhOfQbs6V9ViiCMNU69KD3PWJu9p9onPW16g/exec?catagory=tg&level=all"
        );
        console.log(response.data.data)
        setItems(response.data.data); // Access the "data" key
      } catch (err) {
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className='flex  w-full justify-center' >
    <button className='px-4 py-2 mx-3 rounded-md bg-green-200 hover:bg-white hover:border-green-500 hover:border-1' onClick={()=>{router.push('/Dashboard/Courses')}}> HOME</button>
         <button className='px-4 py-2 mx-3 rounded-md bg-green-200 hover:bg-white hover:border-green-500 hover:border-1' onClick={()=>{router.push('/Dashboard/Courses/Tech')}}> Technical</button>
         <button className='px-4 py-2 mx-3 rounded-md bg-green-200 hover:bg-white hover:border-green-500 hover:border-1'onClick={()=>{router.push('/Dashboard/Courses/NonTech')}}> Non-Technical</button>
         <button className='px-4 py-2 mx-3 rounded-md bg-green-200 hover:bg-white hover:border-green-500 hover:border-1'onClick={()=>{router.push('/Dashboard/Courses/Private')}}> Private</button>
         <button className='px-4 py-2 mx-3 rounded-md bg-green-200 hover:bg-white hover:border-green-500 hover:border-1'onClick={()=>{router.push('/Dashboard/Courses/Government')}}> Government</button>
  </div>
  <div className='mt-5'>
        <div className='bg-slate-200 rounded-lg p-3' >
      <h2 className='mt-3 mb-3 mx-2 text-lg font-bold'>
        Courses for Tech Jobs
      </h2>
      
      <div className='grid  grid-cols-2 justify-center'>
{items.map((item) => (
  <div key={item.id} >
          <Card title={item.title} dis={item.tag+" "+item.level+" "+item.duration+"hours"} url={item.url}/>

          
          
        </div>
      ))}

          
</div>

        </div>

    </div>
    </>
  )
}

export default page