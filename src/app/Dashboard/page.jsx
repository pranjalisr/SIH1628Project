"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useState, useEffect } from "react";
import Navbar from "../component/NavBar";
import ScrolCards from "../component/ScrolCards";
import NavBar from "../component/NavBar";
import Sidebar, { SidebarItem } from "../component/Sidebar";
import { Book, Briefcase, House } from "lucide-react";
import { useRouter } from 'next/navigation';
import Card from "../component/Card";
function SOUT() {
  redirect("/login");
}
const page = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const { data: session } = useSession();
  const [isMenuVisible, setMenuVisible] = useState(false);
  if (session) {
    return (
      <>
        <NavBar user={session.user.name} userImg={session.user.image} />
        <Sidebar>
          <a href="/Dashboard">
            <SidebarItem icon={<House />} text={"Home"} active />
          </a>
          <a href="/Dashboard/Courses">
            <SidebarItem
              icon={<Book />}
              text={"Courses"}
              onClick={() => {
                redirect("/Courses");
              }}
            />
          </a>
          <a href="http://localhost:5173/">
            <SidebarItem icon={<Briefcase />} text={"Jobs"} />
          </a>
        </Sidebar>
        <div className=" mt-14 flex flex-nowrap">
          <div className="text-center w-full text-3xl ">
            <h3 className="mt-5">Trending jobs</h3>
            <div className="mt-4 pb-2 flex p-2 rounded-lg bg-white mx-3 ml-10 ">
              <Swiper
                className="max-h-fit max-w-screen-xl"
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
              >
                {items.map((item) => (
                    <SwiperSlide>
                  <div key={item.id}>

                    <Card
                      title={item.title}
                      dis={
                        item.tag +
                        " " +
                        item.level +
                        " " +
                        item.duration +
                        "hours"
                      }
                      url={item.url}
                      />
                  </div>
                      </SwiperSlide>
                ))}
                <SwiperSlide>
                  <Card
                    title="software dev"
                    dis="kasg uasgdu aguguakd ua yua u ua"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <h3 className="mt-8">Skills in demand</h3>
            <div className="mt-4 pb-2 flex p-2 rounded-lg bg-white mx-3">
              <Swiper
                className="max-h-fit max-w-screen-xl"
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
              >
                <SwiperSlide className="h-16">
                  <Card
                    title="software dev"
                    dis="kasg uasgdu aguguakd ua yua u ua"
                  />
                </SwiperSlide>
                <SwiperSlide className="p-0">
                  <Card
                    title="software dev"
                    dis="kasg uasgdu aguguakd ua yua u ua"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    title="software dev"
                    dis="kasg uasgdu aguguakd ua yua u ua"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    title="software dev"
                    dis="kasg uasgdu aguguakd ua yua u ua"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <h4 className="mt-8">salary benchmark</h4>
            <div className="mt-4 pb-2 flex p-2 rounded-lg bg-white mx-3">
              <Swiper
                className="max-h-fit max-w-screen-xl"
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
              >
                <SwiperSlide className="h-16">
                  <Card
                    title="software dev"
                    dis="kasg uasgdu aguguakd ua yua u ua"
                  />
                </SwiperSlide>
                <SwiperSlide className="p-0">
                  <Card
                    title="software dev"
                    dis="kasg uasgdu aguguakd ua yua u ua"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    title="software dev"
                    dis="kasg uasgdu aguguakd ua yua u ua"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    title="software dev"
                    dis="kasg uasgdu aguguakd ua yua u ua"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
      // <div>
      //     welcome {session.user.name}
      //   <button onClick={()=>signOut()}>signOut</button>
      // </div>
    );
  } else {
    router.back();
  }
};

export default page;
