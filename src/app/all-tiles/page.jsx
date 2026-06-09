import TilesCard from '@/components/TilesCard'
import React from 'react'

const All_Tiles = async () => {
      const res = await fetch("https://tiles-server-data.onrender.com/products")
    const tilesData = await res.json()
    console.log(tilesData)
  return (
 <div className='container'>
  <h2 className='font-bold text-2xl'>All Tiles Gallery</h2>
     <div className='grid grid-cols-4 gap-5'>
      {
        tilesData.map((tiles) => <TilesCard key={tiles.id} tiles={tiles}/>)
      }
    </div>
 </div>
  )
}

export default All_Tiles
