import { useEffect, useState } from 'react'
import { singleNotice } from '../types/notice'
import MySingleNotice from './MySingleNotice'

 
const MyMain = () => {

    const [notice, setNotice] = useState<singleNotice[]>([])

    useEffect(() => {
      fetchNotice()
    }, [])

    const fetchNotice = async () => {
      try {
        const response = await fetch(
        'https://api.spaceflightnewsapi.net/v3/articles'
       )
        if (response.ok) {
          let data = await response.json()
          console.log(data)
          setNotice(data)
        } else {
          console.log('something went wrong')
        }
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className='home-page
    wrap  
    top-plane
    bottom-plane'>
      {
        notice.map((item, i) => (
          <MySingleNotice key={i} item={item} />
        ))
      }
    </div>
  )
}

export default MyMain
