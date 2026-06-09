import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[75vh] bg-red-500 text-center px-6">
            <h1 className="text-7xl font-bold">
                404 NOT FOUND
            </h1>
            <Link href={"/"} className='py-5'>
                <Button className={"py-8 px-10 text-xl font-bold"}>
                  <FaLongArrowAltLeft />Back to Home
                </Button>
            </Link>
        </div>
    )
}

export default NotFound