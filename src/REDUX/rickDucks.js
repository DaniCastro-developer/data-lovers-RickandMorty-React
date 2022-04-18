import axios from "axios"

// constants

const dataInitial = {
    info: [],
    results: []
}

// types
const GET_DATA_SUCESS = 'GET_DATA_SUCESS'
const NEXT_DATA_SUCESS = 'NEXT_DATA_SUCESS'
const PREVIOUS_DATA_SUCESS = 'PREVIOUS_DATA_SUCESS'
const DETAILS_CHARACTER_SUCESS = 'DETAILS_CHARACTER_SUCESS'

//reducer
export default function RickReducer (state = dataInitial, action) {
    switch(action.type){
       case GET_DATA_SUCESS:
           return {...state, ...action.payload}
        case NEXT_DATA_SUCESS:
           return {...state, ...action.payload}
        case PREVIOUS_DATA_SUCESS:
            return {...state, ...action.payload}
        case DETAILS_CHARACTER_SUCESS:
            return {...state, details: action.payload}
        default:
            return state
    }
}

//accions
export const DetailsCharacter = (url = 1) => async (dispatch) => {

    if(localStorage.getItem(url)) {
        dispatch({
            type: DETAILS_CHARACTER_SUCESS,
            payload: JSON.parse(localStorage.getItem(url))
        })
        //console.log('storage')
        return
    }
 try {
     const res = await axios.get(`https://rickandmortyapi.com/api/character/${url}`)


     //console.log(res.data)
     dispatch({
        type: DETAILS_CHARACTER_SUCESS,
        payload: {
            Name: res.data.name,
            Origin: res.data.origin.name,
            Specie: res.data.species,
            Image: res.data.image,
            Status: res.data.status,
            Gender: res.data.gender, 
            /* Episode: res.data. */
            Location:res.data.location.name,
            Episode: {
                episodes: res.data.episode
            }
        }
     })
     //console.log('API')
     localStorage.setItem(url, JSON.stringify({
        Name: res.data.name,
        Origin: res.data.origin.name,
        Specie: res.data.species,
        Image: res.data.image,
        Status: res.data.status,
        Gender: res.data.gender, 
        /* Episode: res.data. */
        Location:res.data.location.name,
        Episode: {
            episodes: res.data.episode
        }
    }))
     
 } catch (error) {
     console.log(error)
 }
 
}

export const getDataAccion = () => async (dispatch) => {
   // console.log('getState', getState().rickAndMorty.offset)
   
   if(localStorage.getItem('arrayData')){
    console.log('exist')
    dispatch({
        type: GET_DATA_SUCESS,
        payload: JSON.parse(localStorage.getItem('arrayData'))
    })
} else {
    console.log('do not exist')
    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character?page=0`)
        //console.log(res.data)
        dispatch({
            type: GET_DATA_SUCESS,
            payload: res.data
        })
        localStorage.setItem('arrayData', JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }

}
}

export const nextPageDataAccion = () => async (dispatch, getState) => {

    const {next} = getState().rickAndMorty.info;
    //console.log(next)

    if(localStorage.getItem(next)){
        //console.log('exist')
        dispatch({
            type: NEXT_DATA_SUCESS,
            payload: JSON.parse(localStorage.getItem(next))
        })
    } else {
    try {
        const res = await axios.get(next)
        dispatch({
            type: NEXT_DATA_SUCESS,
            payload: res.data
        })
        localStorage.setItem(next, JSON.stringify(res.data))

    } catch (error) {
        console.log(error)
    }
}
}

export const previousPageDataAccion = () => async (dispatch, getState) => {

    const {prev} = getState().rickAndMorty.info;
    if(localStorage.getItem(prev)){
        console.log('previo')
        dispatch({
            type: PREVIOUS_DATA_SUCESS,
            payload: JSON.parse(localStorage.getItem(prev))
        })
    } else {
    try {
        const res = await axios.get(prev)
        dispatch({
            type: PREVIOUS_DATA_SUCESS,
            payload: res.data
        })
        localStorage.setItem(prev, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}
}