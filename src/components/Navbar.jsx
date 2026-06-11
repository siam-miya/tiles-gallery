"use client"
import { Avatar, Button } from '@heroui/react'
import NavLinks from './NavLinks'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import { toast } from 'react-toastify'

const Navbar = () => {
    const userData = authClient.useSession()
    console.log(userData)
    const user = userData.data?.user
    console.log(user)
    const handleLogout = async () => {
        await authClient.signOut();
        toast.success("LogOut Successfull!!")

    }

    return (
        <nav className='bg-amber-400'>
            <div className="container">
                <div className='flex items-center justify-between py-10 '>
                    <div>
                        <Link href={"/"}><h1 className='font-light text-3xl cursor-pointer'>Tiles Gallery</h1></Link>
                    </div>
                    <ul className='flex items-center gap-6'>
                        <NavLinks href={"/"}>Home</NavLinks>
                        <NavLinks href={"/all-tiles"}>All Tiles</NavLinks>
                        <NavLinks href={"/profile"}>My Profile</NavLinks>
                    </ul>

                    {!user && <div>
                        <ul className='flex items-center gap-4'>
                            <NavLinks href={"/login"}>Login</NavLinks>
                            <NavLinks href={"/register"}>Register</NavLinks>
                        </ul>
                    </div>}
                    { user && <div className='flex items-center gap-5'>
                        <div>
                        <h2>{`welcome: ${user.name}`}</h2>
                        </div>
                        <div>
                            <Avatar>
                                <Avatar.Image alt={user?.name} src={user?.image} />
                                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                            </Avatar>
                        </div>
                        <div>
                            <Button onClick={handleLogout}>LogOut</Button>
                        </div>
                    </div>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
