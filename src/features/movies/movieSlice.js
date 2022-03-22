import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async()=>{


    const movieText = "Harry"
        // i=tt3896198&apikey=1efb613b
    const response = await movieApi.get(`?i=tt3896198&apikey=${APIKey}&s=${movieText}&type=movie`)
    console.log(response)
    return response.data
    // dispatch(addMovies(response.data))

    
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async()=>{


    const seriesText = "Friends"
        // i=tt3896198&apikey=1efb613b
    const response = await movieApi.get(`?i=tt3896198&apikey=${APIKey}&s=${seriesText}&type=series`)
    console.log(response)
    return response.data
    // dispatch(addMovies(response.data))

    
})


const initialState = {
    movies:{},
    shows:{}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies= payload;
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully")
            return {...state, movies:payload}

        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected");

        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully")
            return {...state, shows:payload}

        },
    }
})

export const {addMovies} = movieSlice.actions
export const getAllMovies = (state)=>state.movies.movies
export const getAllShows = (state)=>state.movies.shows
export default movieSlice.reducer;