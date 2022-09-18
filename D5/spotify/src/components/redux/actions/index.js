export const GET_ARTIST = 'GET_ARTIST'

export const getArtAction = (query) => {
    return async (dispatch, getState) => {

        let headers = new Headers({
            // sets the headers
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
        })
      
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query,
        {
            method: 'GET',
            headers,
        }
        )
        if (response.ok) {
          const { data } = await response.json()
          console.log(data)
          console.log('GETSTATE', getState())
          setTimeout(() => {
            dispatch({
              type: GET_ARTIST,
              payload: data,
            })
          }, 1000);
          
        } else {
          alert('Error fetching results') 
        }
      } catch (error) {
        console.log(error)
      }
    }
  }