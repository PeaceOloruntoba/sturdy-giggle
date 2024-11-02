import React from 'react'
import SermonCard from '../../../components/container/SermonCard'

export default function RecentSermons() {
  return (
    <div className='w-full flex flex-col px-24'>
      <span>RECENT SERMONS</span>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <SermonCard />
        <SermonCard />
        <SermonCard />
        <SermonCard />
      </div>
    </div>
  )
}
