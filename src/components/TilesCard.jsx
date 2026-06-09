import { Button, Card, Chip } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TilesCard = ({ tiles }) => {
    return (
        <Card className='border border-amber-400 rounded-2xl h-full flex flex-col overflow-hidden'>
            <div className='relative w-full h-48 bg-gray-100 shrink-0'>
                <Image
                    src={tiles.image}
                    fill
                    className='object-cover'
                    alt={tiles.title}
                    sizes="(max-width: 768px) 100vw, 300px"
                />
                {tiles.category && (
                    <Chip className='absolute top-3 right-3 z-10' size="sm" variant="flat" color="secondary">
                        {tiles.category}
                    </Chip>
                )}
            </div>
            <div className='p-4 flex flex-col flex-1 justify-between gap-3'>
                <div className='space-y-1'>
                    <h2 className='font-medium text-lg line-clamp-1'>{tiles.title}</h2>
                    <p className='text-sm text-gray-500 line-clamp-2 min-h-[40px]'>{tiles.description}</p>
                    <p className='font-bold text-xl text-amber-600'>${tiles.price}</p>
                </div>

                <div className='mt-auto'>
                    <Link href={`/all-tiles/${tiles.id}`} className='w-full block'>
                        <Button className='w-full' color='primary'>View Details</Button>
                    </Link>
                </div>
            </div>
        </Card>
    )
}

export default TilesCard