import React from 'react'
import Image from "next/image"
import back from './comps/styles.module.css'

export default function Home() {

  const user = 'joshua'

  return (
    <>
    <div className={back.home}>
  <div className="grid grid-cols-3 ">
 
 </div>
      
    
  <section>
  

  <p>This is the first test by {user} </p>
  <p>This is the second test by {user} </p>
  
  </section>
      
    </div>
    </>
  )
}
