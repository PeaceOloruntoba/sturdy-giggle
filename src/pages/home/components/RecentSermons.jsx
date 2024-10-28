import React from 'react'
import SermonCard from '../../../components/container/SermonCard'

export default function RecentSermons() {
  return (
    <div className='w-full flex flex-col px-24'>
      <span>RECENT SERMONS</span>
      <div className="grid grid-cols-4 gap-8">
        <SermonCard />
        <SermonCard />
        <SermonCard />
        <SermonCard />
      </div>
    </div>
  )
}
