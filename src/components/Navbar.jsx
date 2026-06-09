
import NavLinks from './NavLinks'
import Link from 'next/link'

const Navbar = () => {
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
                    <div>
                        <ul className='flex items-center gap-4'>
                            <NavLinks href={"/login"}>Login</NavLinks>
                            <NavLinks href={"/register"}>Register</NavLinks>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
