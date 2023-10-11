
import React from 'react'

const Card = ({item}) => {
    console.log({ item });
    console.log(item.title);
  return (
      <>
          <div className="flex flex-col justify-center items-center gap-5 shadow-xl pb-40 p-5   text-xl text-center ">
              <img src={item.icon} alt="" width={100} />
              <p>{item.title}</p>
              <p>{item.description }</p>
          </div>
          
      </>
  )
}

export default Card