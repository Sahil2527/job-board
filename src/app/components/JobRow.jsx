import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const JobRow = () => {
  return (
    <div>
       <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className='absolute cursor-pointer top-2 right-4'>
        <FontAwesomeIcon className='size-4 text-gray-300' icon={faHeart} />
        </div>
        <div className="flex grow gap-4">
        <div className='content-center' >
            <img className='size-12'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/768px-Spotify_icon.svg.png" alt="" />
        </div>
        <div className='grow md:flex'>
            <div className='grow'>
                <div className='text-gray-500'>Spotify</div>
            <div className='font-bold text-lg mb-1'>Product Designer</div>
            <div className='text-gray-400 text-sm'>
                Remote &middot; New York,US &middot; Full Time
            </div>
            </div>
            
             <div className='content-end text-gray-500 text-xs'>
            2 weeks ago
        </div>
        </div>
       </div> 
        </div>
       
    </div>
  )
}

export default JobRow
 