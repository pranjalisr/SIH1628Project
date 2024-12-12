"use client"
import { TopicForm } from '../../component/TopicForm';
import { UserProfile } from '../../component/UserProfile'
import { useSession, signIn, signOut } from "next-auth/react";
function score(course,quiz,skills){
  var marks = (course*5)+quiz+(10*skills)
  return marks;
}
async function updateScore(userId, credibilityScore) {
  const apiUrl = 'http://localhost:5000/update-user';
  const payload = {
      userId: userId,
      credibilityScore: credibilityScore
  };

  try {
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
      });

      if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Update successful:', result);
      return result;
  } catch (error) {
      console.error('Error updating credibility score:', error);
      throw error;
  }
}

export default function Home() {
    const { data: session } = useSession();
    const mockUser = {

        name: session.user.name,
        email: session.user.email,
        bio: 'Passionate software developer with 5 years of experience in web technologies. Always eager to learn and take on new challenges.',
        url : session.user.image,
        badges: [
            { id: 1, name: 'JavaScript Fundamentals', image: '/placeholder.svg?height=64&width=64' },
            { id: 2, name: 'React Mastery', image: '/placeholder.svg?height=64&width=64' },
            { id: 3, name: 'Node.js Essentials', image: '/placeholder.svg?height=64&width=64' },
            { id: 4, name: 'Database Design', image: '/placeholder.svg?height=64&width=64' },
            { id: 5, name: 'API Development', image: '/placeholder.svg?height=64&width=64' },
        ],
    }
  return (
    <div className="min-h-screen bg-gray-100">
     
      <main className="container mx-auto px-4 py-8">
        <UserProfile {...mockUser} />
        <TopicForm/>


      </main>
    </div>
  )
}

