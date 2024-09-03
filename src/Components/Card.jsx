import React from 'react'


const Card = (props) => {
  return (
    <div className="rounded-md border-[0.5px] border-[gray] bg-base-100 w-[330px] shadow-xl">
    <figure>
      <img
        src={props.image}
        alt="Shoes" className='h-[150px] w-full'/>
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {props.title}
      </h2>
      <p className='text-xl'>{props.description}</p>
      <div className="justify-start flex flex-col">
        <div className="text-md">Raja Bazaar, Rawalpindi</div>
        <div className="text-md">4 weeks ago</div>
      </div>
    </div>
  </div>
  )
}

export default Card