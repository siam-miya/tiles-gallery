"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = ({ href, children }) => {
    const pathName = usePathname()
    // console.log(pathName)
    const isActive = pathName === href ? "bg-blue-400 text-white" : ""
    return (
        <li>
            <Link href={href} className={`${isActive} font-medium px-4 py-2 rounded-2xl`}>{children}</Link>
        </li>
    )
}

export default NavLinks
