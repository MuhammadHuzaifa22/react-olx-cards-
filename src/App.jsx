import React from 'react'
import './App.css';
import Card from './Components/Card';
import img1 from "/src/Images/shoes.avif"
import img2 from "/src/Images/range-rover.avif"
import img3 from "/src/Images/mountain-bike.avif"


const App = () => {
  return (
    <>
    <h1 className='text-center text-3xl mt-[20px]'>Olx Product Cards</h1>
    <div className='flex flex-wrap gap-[50px] mt-[20px] justify-center'>
<Card title="Bata Shoes" description="best qualtiy shoes for men" image={img1}/>
<Card title="Range Rover" description="best for mounatins and city" image={img2}/>
<Card title="Mountain Bike" description="best for hills and forests" image={img3}/>


    </div>
    </>
  )
}

export default App