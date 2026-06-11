"use client"
import { UpdateProfileModal } from '@/components/UpdateProfileModal'
import { authClient } from '@/lib/auth-client'
import { Avatar } from '@heroui/react'

const Profile = () => {
  const userData = authClient.useSession()
  // console.log(userData)
  const user = userData.data?.user
  // console.log(user)


  return (
    <div className='mx-auto mt-20 border border-amber-400 py-10 px-15 text-center rounded-2xl space-y-3'>
      <div>
        <Avatar className="w-20 h-20 mx-auto">
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
      </div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
      <UpdateProfileModal/>
    </div>
  )
}

export default Profile
