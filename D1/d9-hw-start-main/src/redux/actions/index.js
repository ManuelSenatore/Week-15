export const ADD_TO_FAV = 'ADD_TO_FAV';
export const REMOVE_TO_FAV = 'REMOVE_TO_FAV';
export const GET_JOBS = 'GET_JOBS';
export const SET_QUERY = 'SET_QUERY';
export const SET_PARAMS = 'SET_PARAMS';
export const GET_JOBS_COMPANY = 'GET_JOBS_COMPANY';

export const addToFavAction = (data) => ({
    type: ADD_TO_FAV,
    payload: data,
})

export const removeFromFavAction = (i) => ({
    type: REMOVE_TO_FAV,
    payload: i
});

export const getQueryAction = (data) => ({
    type: SET_QUERY,
    payload: data
})
export const getQueryParams = (params) => ({
    type: SET_PARAMS,
    payload: params
});
export const getJobsCompany = (data) => ({
    type: GET_JOBS_COMPANY,
    payload: data
});

export const getJobsAction = () => {
      const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='
    return async (dispatch, getState) => {
        try {
      const response = await fetch(baseEndpoint + getState().lists.query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
            type: GET_JOBS,
            payload: data,
        })
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
    }
}

export const getCompanyJobsAction = () => {
      const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?company='
    return async (dispatch, getState) => {
        try {
          const response = await fetch(baseEndpoint + getState().lists.params)
          if (response.ok) {
            const { data } = await response.json()
            dispatch({
                type: GET_JOBS_COMPANY,
                payload: data,
            })
          } else {
            alert('Error fetching results')
          }
        } catch (error) {
          console.log(error)
        }
    }
}