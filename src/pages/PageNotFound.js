import React from 'react'
import  PageNotFoundImage  from '../assets/pagenotfound.png'

export const PageNotFound = () => {
  return (
    <main>
      <section className='flex  flex-col justify-center px-2'> 
        <div className='flex flex-col items-center my-4'>
            <p>404, Oops!</p>
            <img  className="max-h-96 max-w-96" src={PageNotFoundImage} alt='404 Page not found'/>
        </div>
        <div>

        </div>
      </section>
    </main>
  )
}
