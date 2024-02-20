import React from 'react'
import './Albums.css'
import TopAlbums from './TopAlbums/TopAlbums'
import NewAlbums from './NewAlbums/NewAlbums'


const Albums = () => {
  return (
    <div className='albums'>
      <div className="gap"><TopAlbums /></div>
      <div className="gap"><NewAlbums /></div>
    </div>
  )
}

export default Albums