import axios from "axios"
import { ENDPOINT_UNSPLASH, CLIENT_ID } from "@env"

export const SearchImage = (search, page) => (dispatch) => {
    axios.get(ENDPOINT_UNSPLASH,
        {
            params: {
                query: search,
                client_id: CLIENT_ID,
                per_page: 10,
                page
            }
        })
        .then(res => {
            dispatch({ type: 'RENDER_PAGE', payload: false })
            dispatch({ type: 'UPDATE_DATA', payload: res.data.results })
        })
        .catch(err => console.log(err + ' ini'))
}

export const NextPage = (search, page, data) => (dispatch) => {
    axios.get(ENDPOINT_UNSPLASH,
        {
            params: {
                query: search,
                client_id: CLIENT_ID,
                per_page: 10,
                page
            }
        })
        .then(res => {
            dispatch({ type: 'ADD_PAGE', payload: [...data, ...res.data.results] })
        })
        .catch(err => console.log(err))
}