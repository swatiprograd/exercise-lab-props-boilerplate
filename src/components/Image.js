// Complete this component

import React from 'react'

function Image(props){
  return (
    <div>
      {props.data.map((image)=>{
        return <img key={image.id} className='img' src={image.img} alt=""></img>
      })}
    </div>
  )
}

export default Image;