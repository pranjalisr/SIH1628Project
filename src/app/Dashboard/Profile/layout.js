"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useState, useEffect } from "react";


import NavBar from "../../component/NavBar";
import Sidebar, { SidebarItem } from "../../component/Sidebar";
import { Book, Briefcase, House } from "lucide-react";

function SOUT() {
  redirect("/login");
}
const CourseLayout = ({children}) => {
 
  const { data: session } = useSession();
  const [isMenuVisible, setMenuVisible] = useState(false);
  if (session) {
    return (
      <>
        <NavBar user={session.user.name} userImg={session.user.image} />
        <div className=" flex flex-nowrap mt-14">
          <Sidebar>
            <a href="/Dashboard">
            <SidebarItem icon={<House/>} text={"Home"} onClick={()=>{redirect('../Dashboard')}}/>
            </a>
            <a href="/Dashboard/Courses"><SidebarItem icon={<Book />} text={"Courses"} active onClick={()=>{redirect('/Courses')}}/></a>
            <a href="http://localhost:8124/"><SidebarItem icon={<Briefcase />} text={"Jobs"} /></a>
          
            
            
          </Sidebar>

          <div className="bg-white w-full mt-14 mx-20">
            {children}
            
            
          </div>
        </div>
      </>
      // <div>
      //     welcome {session.user.name}
      //   <button onClick={()=>signOut()}>signOut</button>
      // </div>
    );
  } else {
    return (
      <>
        <h2>LOGOUT Succesfull</h2>
      </>
    );
  }
};

export default CourseLayout;
