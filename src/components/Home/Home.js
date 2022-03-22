import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import baseURL from '../../common/apis/movieApi'
import movieApi from "../../common/apis/movieApi";
import { APIKey } from '../../common/apis/movieApiKey'
import { useDispatch } from "react-redux";
import { addMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";


const Home = ()=>{
    const movieText = "Harry"
    const dispatch = useDispatch()
    useEffect(()=>{

        // const fetchMoviies = async()=>{
        //     // i=tt3896198&apikey=1efb613b
        // const response = await movieApi.get(`?i=tt3896198&apikey=${APIKey}&s=${movieText}&type=movie`).catch((error)=>{
        //     console.log(error)
        // })
        // console.log(response)
        // dispatch(addMovies(response.data))

        // }


        // fetchMoviies();
        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
    },[dispatch])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    )
}

export default Home