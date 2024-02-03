'use client'
import Link from 'next/link';
import React, { Suspense } from 'react';
import Loading from './loading';



//https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json

const page = async() => {
const data = await fetch('https://yt-latest.vercel.app/');
const res = await data.json();


  
return(

  <Suspense fallback={<Loading />}>
    <h2 class='center'>~ By Ritik</h2>
    <div class="all">
      
    {
      res.map(resp=>
        <>
         
         <Link href={{pathname:`/video/${resp.id}`,query:{
         name:`${resp.link}`
         }}}>
         
         <div class="content">
         
            <div class='image'>
            <img loading='lazy' src={resp.thumbnail} />
          
          <div class="text" key={resp.id}>{resp.name}</div>
            </div>
           
          </div>
         
         
        
         </Link>
        
        </>
      
        )
    }
    </div>
    </Suspense>
)
}

page();

export default page
