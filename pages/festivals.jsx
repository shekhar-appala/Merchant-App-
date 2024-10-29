/* eslint-disable @next/next/no-img-element */
import Navbar from '@/components/Navbar'
import React from 'react'

function festivals() {
    const oct=[{img:"/Durga.png", name:"Durga Astami", date:"Fri, 11 Oct, 2024"},{img:"/Dussera.png", name:"Dussera", date:"Tue, 12 Oct, 2024"},{img:"/Dhanteras.png", name:"Dhanteras", date:"Tue, 29 Oct, 2024"},{img:"/Naraka.png", name:"Naraka Chaturdashi", date:"Thu, 31 Oct, 2024"},]
    const nov=[ {img:"/Diwali.png", name:"Diwali", date:"Thu, 31 Oct, 2024"},{img:"/Bhaiya.png", name:"Bhaiya Dooj", date:"Sun, 3 Nov, 2024"}]
  return (
    <div>
        <Navbar />
      <div className="header">
        <img alt="/" src="/media.png" />
        <h3>Festivals </h3>

      </div>

<div className='container mt-5'>
    <div className='month'>Oct 2024</div>
    {oct.map((item, i)=><div className='items' key={i}>
        <div><img alt={item.img} src={item.img}/></div>
        <div className='ps-5'><h5>{item.name}</h5>
        <p>{item.date}</p></div>
        
    </div>)}
</div>

<div className='container mt-5'>
    <div className='month'>Nov 2024</div>
    {nov.map((item, i)=><div className='items' key={i}>
        <div><img alt={item.img} src={item.img}/></div>
        <div className='ps-5'><h5>{item.name}</h5>
        <p>{item.date}</p></div>
        
    </div>)}
</div>


    </div>
  )
}

export default festivals