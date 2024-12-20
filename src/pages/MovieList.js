import React, { useEffect } from 'react'
import Card from '../components/Card'
import { useFetch } from '../hooks/useFetch';

export const MovieList = ({apiPath , title}) => {
  const {data : movies} = useFetch(apiPath)

  useEffect(()=> { document.title = `${title} Cinemate` })

  return (
    <main >
      <section className='max-w-7xl mx-auto py-7:'>
        <div className='flex justify-start flex-wrap other:justify-evenly'>
          {movies.map((movie, index)=>(
             <Card key={index} movie={movie}/>
          ))}
         
        </div>
      </section>
    </main>
  )
}
