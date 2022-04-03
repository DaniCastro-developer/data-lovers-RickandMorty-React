import axios from "axios"

// constants

const dataInitial = {
    array: [],
    offset: 0
}

// types
const GET_DATA_SUCESS = 'GET_DATA_SUCESS'
const NEXT_DATA_SUCESS = 'NEXT_DATA_SUCESS'


//reducer
export default function RickReducer (state = dataInitial, action) {
    switch(action.type){
       case GET_DATA_SUCESS:
           return {...state, array: action.payload}
        case NEXT_DATA_SUCESS:
           return {...state, array: action.payload.array, offset: action.payload.offset}
           default:
            return state
    }
}

//accions
export const getDataAccion = () => async (dispatch, getState) => {

   // console.log('getState', getState().rickAndMorty.offset)
    const {offset} = getState().rickAndMorty;

    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${offset}`)
        dispatch({
            type: GET_DATA_SUCESS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }

}

export const nextPageDataAccion = () => async (dispatch, getState) => {

    const {offset} = getState().rickAndMorty;
    const next = offset + 1
    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${offset}`)
        dispatch({
            type: NEXT_DATA_SUCESS,
            payload: {
                array: res.data.results, 
                offset: next
            }
        })
    } catch (error) {
        console.log(error)
    }
}
