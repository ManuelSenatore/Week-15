import React from 'react'
import { useState, useEffect } from 'react'
import SingleAlbum from './SingleAlbum'

const AlbumCard = (props) => {

    const [artist, setArtist] = useState([])

    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
    })

    
    useEffect(() => {
        fetchArtist()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchArtist = async () => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
                props.artist,
                {
                    method: 'GET',
                    headers,
                }
            )
            if (response.ok) {
                let result = await response.json()
                console.log(result);
                setArtist(result.data)
            } else {
                console.log('error')
            }
        } catch (err) {
            console.log(err)
        }
        console.log(artist);
    }


  return (
    <div className='albumCard'>
    {
        artist.length !== 0 && (
        <SingleAlbum album={artist[0].album} artist={artist[0].artist} />
        )
    }  
</div>
  )
}

export default AlbumCard
