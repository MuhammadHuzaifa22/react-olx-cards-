import React from 'react'
import './App.css';
import Card from './Components/Card';


const App = () => {
  return (
    <>
    <h1 className='text-center text-3xl mt-[20px]'>Olx Product Cards</h1>
    <div className='flex flex-wrap gap-[50px] mt-[20px] justify-center'>
<Card title="Bata Shoes" description="best qualtiy shoes for men" image="src\Images\shoes.avif"/>
<Card title="Range Rover" description="best for mounatins and city" image="src\Images\mountain-bike.avif"/>
<Card title="Mountain Bike" description="best for hills and forests" image="src\Images\range-rover.avif"/>


    </div>
    </>
  )
}

export default App