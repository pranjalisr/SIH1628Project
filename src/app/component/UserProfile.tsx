import Image from 'next/image'
import { TopicForm } from './TopicForm'
interface Badge {
  id: number
  name: string
  image: string
}

interface UserProfileProps {
  name: string
  email: string
  bio: string
  url: string
  badges: Badge[]
}

export function UserProfile({ name, email, bio, url, badges }: UserProfileProps) {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <img src={url} width={100} height={100} className="rounded-full mr-6"></img>
        
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700">{bio}</p>
      </div>
      <div>
        <TopicForm/>
        <h2 className="text-xl font-semibold mb-4">Completed Courses</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
              <Image src={badge.image} alt={badge.name} width={64} height={64} className="mb-2" />
              <span className="text-sm text-center">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

