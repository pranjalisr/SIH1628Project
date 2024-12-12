import React from 'react'

const MediaCard = (props) => {
  return (
    <>
    <a
  href="#"
  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
  <img
    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
    src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1"
    alt=""
  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.title}
    </h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {props.dis}
    </p>
    <div className='felx flex-row w-full'>
        <div>

    <progress className='rounded-full' value={props.val} /> 
        </div>
        <div className='justify-self-start'>
        <p className='text-yellow-400'>{props.val*100+"%"+"  Completed"}</p>
        </div>

    </div>
  </div>
</a>

    </>
  )
}

export default MediaCard