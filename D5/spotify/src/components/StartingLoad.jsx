import React from 'react'
import AlbumCard from './AlbumCard'

const StartingLoad = (props) => {
  return (
    <div className="albumarea">
    {
        props.arr.length !== 0 && props.arr.map((data, i)=>(
           <AlbumCard artist={data} key={i}/>
        ))
    }
</div>
  )
}

export default StartingLoad
