import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Plus, Users, Play } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

const videoData = [
  // Tech videos      
  { id: "dQw4w9WgXcQ", title: "Introduction to React", description: "Learn the basics of React.js" },
  { id: "8aGhZQkoFbQ", title: "JavaScript Event Loop", description: "Understanding the JS Event Loop" },
  { id: "DHvZLI7Db8E", title: "GraphQL Tutorial", description: "Building APIs with GraphQL" },
  { id: "rWc0xqroY4U", title: "Machine Learning Basics", description: "Introduction to ML concepts" },
  // Non-tech videos 
  { id: "bixR-KIJKYM", title: "Digital Marketing Strategies", description: "Effective digital marketing techniques" },
  { id: "xHBhFKBLhWs", title: "Management Skills", description: "Essential skills for effective management" },
  { id: "WEDIj9JBTC8", title: "Personal Finance Basics", description: "Managing your money effectively" },
  { id: "YlN28RNChl0", title: "UI/UX Design Principles", description: "Creating user-friendly interfaces" },
  // Hard Skills videos
  { id: "m3CqH4DjVlI", title: "Basic Carpentry Skills", description: "Essential skills for woodworking" },
  { id: "gp3Kie8fdf0", title: "Plumbing 101", description: "Introduction to basic plumbing" },
  { id: "syaGf_XUMxA", title: "Electrical Wiring Basics", description: "Understanding home electrical systems" },
  { id: "mYdt6CAwKAY", title: "Farming Trending Technology ", description: "Modern agricultural technologies" },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Video className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">MeetPortal</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About Us
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Connect Instantly with MeetPortal
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join or create meetings with just a click. No downloads, no hassle.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-black text-white" size="lg">
                  <Users className="mr-2 h-5 w-5" /> Join Meet
                </Button>
                <Button variant="outline" size="lg">
                  <Plus className="mr-2 h-5 w-5" /> Create Meet
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Featured Videos</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Tech Videos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {videoData.slice(0, 4).map((video, index) => (
                    <Card key={index} className="overflow-hidden">
                      <Link href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                        <div className="relative aspect-video">
                          <Image
                            src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                            alt={video.title}
                            layout="fill"
                            objectFit="cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                            <Play className="w-12 h-12 text-white" />
                          </div>
                        </div>
                      </Link>
                      <CardHeader>
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">{video.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Non Tech Videos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {videoData.slice(4, 8).map((video, index) => (
                    <Card key={index} className="overflow-hidden">
                      <Link href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                        <div className="relative aspect-video">
                          <Image
                            src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                            alt={video.title}
                            layout="fill"
                            objectFit="cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                            <Play className="w-12 h-12 text-white" />
                          </div>
                        </div>
                      </Link>
                      <CardHeader>
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">{video.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Hard Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {videoData.slice(8, 12).map((video, index) => (
                    <Card key={index} className="overflow-hidden">
                      <Link href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                        <div className="relative aspect-video">
                          <Image
                            src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                            alt={video.title}
                            layout="fill"
                            objectFit="cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                            <Play className="w-12 h-12 text-white" />
                          </div>
                        </div>
                      </Link>
                      <CardHeader>
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">{video.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">How It Works</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Join a Meet", description: "Enter the meeting code and connect instantly with your team or friends." },
                { title: "Create a Meet", description: "Start your own meeting and invite others with a simple link or code." },
                { title: "Collaborate", description: "Share screens, chat, and work together in real-time." },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 MeetPortal Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

