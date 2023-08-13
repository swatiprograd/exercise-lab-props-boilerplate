import React, { Component } from 'react'

class ImageClass extends Component {
  render() {
    return (
      <div>
      {this.props.Data.map((image)=>{
        return <img key={image.id} className='img' src={image.img} alt=""></img>
      })}
    </div>
    )
  }
}

export default ImageClass;