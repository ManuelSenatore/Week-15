import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { GrFavorite} from  "react-icons/gr"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const FavouritesIcon = () => {
    const navigate = useNavigate()

    const jobsLength = useSelector((state) => state.jobs.content.length)

  return (
    <Container>
    <div className='flex'>
        <Link to='/'>
         <h2>Home</h2>
        </Link>
       <div className="ml-auto mt-3 mb-4">
      <Button color="primary" onClick={() => navigate('/Favourites')}>
        <GrFavorite />
        <span className="ml-2">{jobsLength}</span>
      </Button>
    </div>
    </div>
    </Container>
  )
}

export default FavouritesIcon
