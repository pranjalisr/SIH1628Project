import React from 'react'
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

const NavBar = (props) => {
    const { data: session } = useSession();
    const [isMenuVisible, setMenuVisible] = useState(false);
  return (
    <div > <nav className="border-black border-b-2 bg-gray-50 fixed top-0 z-50 w-full dark:bg-gray-800 dark:border-gray-700">
    <div className=" flex flex-wrap  justify-between mx-auto p-4">
        <a href="/Dashboard/Profile" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
                src={props.userImg}
                className="h-8 rounded-full"
                
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {props.user}
            </span>
        </a>
        <div className='flex text-center align-bottom '>
        <button className='hover:text-blue-500 hover:bg-white rounded-md px-3 py-2  bg-blue-500 text-white mr-2'  >Inbox</button>  
        <button className='text-red-500 bg-white rounded-md px-3 py-2 hover:bg-red-500 hover:text-white' onClick={() => signOut()}>Log-Out</button>  
        

            
        </div>
        {isMenuVisible && (<div className="transition-all w-full" id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <li>
                    <a
                        href="#"
                        className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                        aria-current="page"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Couses
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        Inbox
                    </a>
                </li>
                <li>
                    <button className='text-red-500 bg-white rounded-sm px-3 py-2 hover:bg-red-500 hover:text-white' onClick={() => signOut()}>signOut</button>                </li>
            </ul>
        </div>)}

    </div>
</nav></div>
  )
}

export default NavBar