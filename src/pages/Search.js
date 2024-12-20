import React from 'react'
import Card from '../components/Card'
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from "react-router-dom";

export const Search = ({apiPath}) => {
 
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q')

  const {data : movies} = useFetch(apiPath , queryTerm);
  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No Result for ${queryTerm}` :  `Result for ${queryTerm}` }</p>
      </section>
       <section className='max-w-7xl mx-auto py-7:'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movie, index)=>(
             <Card key={index} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}