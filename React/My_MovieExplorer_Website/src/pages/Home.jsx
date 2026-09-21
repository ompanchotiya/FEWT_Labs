import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import MovieGrid from '../components/MovieGrid'

function Home() {
    const [MovieDetails, setMoviedetails] = useState([]);
  
    const Api_URL = ""
  
    useEffect(() => {
        fetch(Api_URL, 
            {method:"GET"}, 
            Headers: {
                "Authorization": "Bearer "+{Api_token}, "Content-Type":""
            }
        )
        .then(res => res.json)
        .then((res) => {
          setMoviedetails(res);
        })
    },[])
  
  
    return (
        <main className="main-container">
            <Hero />
            <MovieGrid />
        </main>
    )
}

export default Home
