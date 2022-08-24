import React from 'react'
import './Homestyle.css';
function Home() {
  return (
    <div className='main_content' >
      <div className="card"> 

    
         <img className='myimage' src='./Images/TOMM4986-Edit.jpg' alt='image' />
          
        </div>
      <div className='name'>
          <h2 className='span1'><span className='span_one'>It's </span><span className='span_two'>me</span></h2>
          <h1  className='span2'><span className='span_three'>Nallattuthodika</span><span> Haris Rahman</span></h1>
          <span className='span3'>Web Designer And Developer</span>
          <div className='btn'>
        <button className='btn1'>Read More</button>
        <button className='btn2'>Contact Me</button>
      </div>

      </div>
     
      
      

    </div>
  )
}

export default Home
