"use client"


import { motion } from 'framer-motion'
import { useAnimationVariants } from '../app/hooks/useAnimationVariants'
import { Search, Briefcase, GraduationCap, FileText, Users } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import  Home  from './component/Home'
import Topbar from './component/topbar'
import Test from './component/Test'
import { useSession, signIn, signOut } from "next-auth/react"
import axios from 'axios'
import ChatBot from './component/Chatbot'

export default function Component() {
  const { containerVariants, itemVariants } = useAnimationVariants()
  const { data: session } = useSession()
  const addUser = async () => {
    const userData = {
      userId: "1",
      subject: "Math",
      marks: 95,
    };
  
    try {
      const response = await axios.post("http://localhost:5000/marks", userData);
      console.log("User added successfully:", response.data.data);
    } catch (err) {
      console.error("Error:", err.response?.data?.message || err.message);
    }
  };
  addUser();
  
 
    return <>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white ">
      <header className="bg-white  shadow-md">
          <ChatBot></ChatBot>
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold text-blue-600 "
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Punjab Govt Jobs
          </motion.h1>
          <nav>
            <motion.ul 
              className="flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {['Dashboard','login'].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <Link href={`/${item}`} className="text-gray-600  hover:text-blue-500  transition-colors duration-200">
                    {item}
                  </Link>
                  
                </motion.li>
              )
              )}
              <a href='/admin/CandidateSearch'>Admin</a>
              <a href='/admin/Comunity'>Comunity</a>
            </motion.ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800  mb-4">Find Your Dream Government Job</h2>
          <p className="text-xl text-gray-600 mb-8">Explore opportunities in the Punjab Government sector</p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <input 
                type="text" 
                placeholder="Search for jobs..." 
                className="w-full px-4 py-2 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-200"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Search size={20} />
              </button>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { title: 'Latest Jobs', icon: Briefcase, color: 'bg-red-100 ' },
            { title: 'Career Resources', icon: GraduationCap, color: 'bg-green-100 ' },
            { title: 'Application Guide', icon: FileText, color: 'bg-yellow-100 ' },
            { title: 'Jobs Near ME', icon: Users, color: 'bg-purple-100 ' },
          ].map((item, index) => (
            <a href="https://9p3adkw7e4dpb02z.vercel.app/">

            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`${item.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200`}
              >
              <item.icon className="w-12 h-12 mb-4 text-gray-800 " />
              <h3 className="text-xl font-semibold text-gray-800  mb-2">{item.title}</h3>
              <p className="text-gray-600 ">Explore our {item.title.toLowerCase()} section for more information.</p>
            </motion.div>
              </a>
          ))}
        </motion.section>

        <motion.section 
          className="bg-white  rounded-lg shadow-md p-8 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800  mb-4">Featured Job Openings</h2>
          <div className="space-y-4">
            {[
              { title: 'Senior Clerk', department: 'Finance Department', location: 'Chandigarh' },
              { title: 'Junior Engineer', department: 'Public Works Department', location: 'Amritsar' },
              { title: 'Police Constable', department: 'Punjab Police', location: 'Various Districts' },
            ].map((job, index) => (
              <motion.div 
                key={index}
                className="border-b border-gray-200  pb-4 last:border-b-0"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-blue-600 ">{job.title}</h3>
                <p className="text-gray-600">{job.department}</p>
                <p className="text-gray-500 ">{job.location}</p>
              </motion.div>
            ))}
          </div>
          <motion.button 
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Jobs
          </motion.button>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600  mb-8">Subscribe to our newsletter for the latest job openings and career advice</p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-200"
              />
              <motion.button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-100  mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600 ">© 2023 Punjab Government Employment Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
    <Test userId="1"/>
    

    Not signed in <br/>
    <button onClick={()=>{redirect('/login')}}>LOGIN</button>
    </>

  
  
}