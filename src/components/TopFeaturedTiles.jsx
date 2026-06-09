import { Card } from '@heroui/react'
import Image from 'next/image'
import TilesCard from './TilesCard'

const TopFeaturedTiles = async () => {
    const res = await fetch("https://tiles-server-data.onrender.com/products")
    const tilesData = await res.json()
    console.log(tilesData)
    const topTiles = tilesData.slice(0,4)
    console.log(topTiles)
  return (
    <div className='container'>
      <h2 className='font-bold text-2xl mt-5 mb-3'>Top Featured</h2>
   <div className='flex items-center gap-8 mb-8'>
    {
        topTiles.map((tiles) => <TilesCard key={tiles.id} tiles={tiles}/>)
    }
   </div>
    </div>
  )
}

export default TopFeaturedTiles
