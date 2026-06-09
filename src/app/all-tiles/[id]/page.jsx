import { Card, Chip } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

const Tiles_Details = async ({ params }) => {
    const { id } = await params
    
    const res = await fetch("https://tiles-server-data.onrender.com/products")
    const tilesData = await res.json()
    const tilesDetails = tilesData.find(t => t.id == id)

    if (!tilesDetails) {
        return <div className="text-center py-10 font-medium">Loading or Tile Not Found...</div>
    }

    return (
        <div className='container mx-auto px-4 py-10 max-w-5xl'>
            <Card className='border border-amber-400 shadow-md rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-6 md:p-8 items-center bg-white'>
                <div className='md:col-span-5 relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gray-50 shadow-inner'>
                    <Image
                        src={tilesDetails.image}
                        fill 
                        className='object-cover'
                        alt={tilesDetails.title}
                        priority
                        sizes="(max-width: 768px) 100vw, 400px"
                    />
                    {tilesDetails.category && (
                        <Chip className='absolute top-4 left-4 z-10 shadow-sm' size="md" variant="flat" color="warning">
                            {tilesDetails.category}
                        </Chip>
                    )}
                </div>
                <div className='md:col-span-7 flex flex-col justify-between h-full py-2'>
                    <div>
                        <h2 className='font-bold text-2xl md:text-3xl text-gray-800 mb-3'>{tilesDetails.title}</h2>
                        <p className='text-gray-600 text-base leading-relaxed mb-6'>{tilesDetails.description}</p>
                        <div className='grid grid-cols-2 gap-y-3 gap-x-4 border-t border-b border-gray-300 py-4 mb-6 text-sm md:text-base'>
                            <p className='text-gray-500'>Currency:</p>
                            <p className='font-semibold text-gray-800'>{tilesDetails.currency || 'USD'}</p>
                            
                            <p className='text-gray-500'>Dimensions:</p>
                            <p className='font-semibold text-gray-800'>{tilesDetails.dimensions}</p>
                            
                            <p className='text-gray-500'>Material:</p>
                            <p className='font-semibold text-gray-800'>{tilesDetails.material}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-auto'>
                        <div className='space-y-0.5'>
                            <p className='text-xs text-gray-400 uppercase tracking-wider font-semibold'>Total Price</p>
                            <p className='font-bold text-2xl md:text-4xl text-amber-400'>
                                ${tilesDetails.price}
                            </p>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default Tiles_Details