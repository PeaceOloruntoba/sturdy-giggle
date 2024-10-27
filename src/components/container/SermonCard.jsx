import React from 'react'

export default function SermonCard() {
  return (
    <div className='bg-white rounded-xl'>
      <img src="" alt="" />
      <span>THE PARABLE OF THE PRODIGAL SON</span>
      <span>SUNDAY, 30TH JUNE, 2024</span>
      <div className="flex w-full items-center justify-end gap-2">
        <button className='text-primary border-primary p-2 px-4 rounded-full'>DOWNLOAD</button>
        <button className='text-primary border-primary p-2 px-4 rounded-full'>WATCH NOW</button>
      </div>
    </div>
  )
}
