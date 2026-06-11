"use client"
import { useState } from 'react'
import { Avatar, Button } from '@heroui/react'
import NavLinks from './NavLinks'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import { toast } from 'react-toastify'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false) // মোবাইল ও ট্যাবলেটের টগল স্টেট
    const userData = authClient.useSession()
    const user = userData.data?.user

    const handleLogout = async () => {
        await authClient.signOut();
        toast.success("LogOut Successful!!")
    }

    return (
        <nav className='bg-amber-400 relative z-50'>
            <div className="container mx-auto px-4">
                {/* মেইন কন্টেইনার */}
                <div className='flex items-center justify-between py-6 md:py-10'>
                    
                    {/* ১. বামের অংশ: লোগো */}
                    <div>
                        <Link href={"/"}>
                            <h1 className='font-light text-3xl cursor-pointer'>Tiles Gallery</h1>
                        </Link>
                    </div>

                    {/* ২. মাঝের অংশ: সাধারণ লিংক (ডেস্কটপ লেআউট) */}
                    <ul className='hidden md:flex items-center gap-6'>
                        <NavLinks href={"/"}>Home</NavLinks>
                        <NavLinks href={"/all-tiles"}>All Tiles</NavLinks>
                        <NavLinks href={"/profile"}>My Profile</NavLinks>
                    </ul>

                    {/* ৩. ডানের অংশ: সাইন-ইন / সাইন-আপ / প্রোফাইল (ডেস্কটপ লেআউট) */}
                    <div className='hidden md:block'>
                        {!user && (
                            <ul className='flex items-center gap-4'>
                                <NavLinks href={"/login"}>Login</NavLinks>
                                <NavLinks href={"/register"}>Register</NavLinks>
                            </ul>
                        )}
                        {user && (
                            <div className='flex items-center gap-5'>
                                <div>
                                    <h2>{`welcome: ${user.name}`}</h2>
                                </div>
                                <div>
                                    <Link href={"/profile"}>
                                        <Avatar className='cursor-pointer'>
                                            <Avatar.Image alt={user?.name} src={user?.image} />
                                            <Avatar.Fallback>{user?.name?.[0] || 'U'}</Avatar.Fallback>
                                        </Avatar>
                                    </Link>
                                </div>
                                <div>
                                    <Button onClick={handleLogout}>LogOut</Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* মোবাইল ও ট্যাবলেটের জন্য রাইট সাইড কন্ট্রোল গ্রুপ */}
                    <div className='flex items-center gap-4 md:hidden'>
                        
                        {/* ৪. নতুন সংযোজন: মোবাইল স্ক্রিনে হ্যামবার্গারের বামে ইউজারের নাম ও ছবি */}
                        {user && (
                            <div className='flex items-center gap-2 pr-1'>
                                <span className='text-sm font-medium max-w-[80px] truncate'>
                                    {user.name.split(' ')[0]} {/* নাম বড় হলে শুধু প্রথম অংশ দেখাবে */}
                                </span>
                                <Link href={"/profile"}>
                                    <Avatar size="sm" className='cursor-pointer w-8 h-8'>
                                        <Avatar.Image alt={user?.name} src={user?.image} />
                                        <Avatar.Fallback>{user?.name?.[0] || 'U'}</Avatar.Fallback>
                                    </Avatar>
                                </Link>
                            </div>
                        )}

                        {/* ৫. মোবাইল ও ট্যাবলেট হ্যামবার্গার বাটন */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-gray-800 focus:outline-none"
                        >
                            {isOpen ? (
                                <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>

                {/* ৬. মোবাইল এবং ট্যাবলেট ড্রপডাউন মেনু */}
                <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden flex-col pb-6 gap-4 border-t border-amber-500`}>
                    <ul className='flex flex-col gap-3 pt-4'>
                        <NavLinks href={"/"}>Home</NavLinks>
                        <NavLinks href={"/all-tiles"}>All Tiles</NavLinks>
                        <NavLinks href={"/profile"}>My Profile</NavLinks>
                    </ul>

                    {!user && (
                        <ul className='flex flex-col gap-3 border-t border-amber-500/30 pt-3'>
                            <NavLinks href={"/login"}>Login</NavLinks>
                            <NavLinks href={"/register"}>Register</NavLinks>
                        </ul>
                    )}

                    {/* ইউজার লগইন থাকলে মোবাইলের ড্রপডাউনে শুধু লগআউট বাটনটি সুন্দর লাগবে */}
                    {user && (
                        <div className='border-t border-amber-500/30 pt-3'>
                            <Button onClick={handleLogout} size="sm" color="danger" variant="flat" className="w-full">
                                LogOut
                            </Button>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    )
}

export default Navbar