import SerachTiles from '@/components/SerachTiles'
import TilesCard from '@/components/TilesCard'
import React from 'react'

const All_Tiles = async ({ searchParams }) => {
  const params = await searchParams
  // console.log(params)

  const seacrhData = params?.search || ""
  // console.log(seacrhData)

  const res = await fetch("https://tiles-server-data.onrender.com/products")
  const tilesData = await res.json()
  // console.log(tilesData)

  const filterTiles = tilesData.filter((tiles) => 
    tiles.title.toLowerCase().includes(seacrhData.toLowerCase())
  )

  return (
    <div className='container mx-auto px-4'>
      <SerachTiles />   
      <h2 className='font-bold text-2xl pt-10'>All Tiles Gallery</h2>
      <div className='pt-6 pb-10'>
        {filterTiles.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {filterTiles.map((tiles) => (
              <TilesCard key={tiles.id} tiles={tiles} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl text-black bg-amber-400 p-20 font-bold">
              No tiles found  {seacrhData}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default All_Tiles