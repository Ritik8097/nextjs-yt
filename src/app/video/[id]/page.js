import React, { Suspense } from 'react'
import Loading from '../loading';
import '../style.css'

function page({ searchParams }  ) {

  return (
    <div>
        <Suspense fallback={<Loading />}>
    <iframe id='iframe' src={searchParams.name} allowFullScreen  title="video player" frameborder="0" allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " >
      
    </iframe>
    </Suspense>
    </div>
  )

  
}

export default page
