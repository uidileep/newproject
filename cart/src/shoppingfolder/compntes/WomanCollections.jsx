

import React from 'react'

const WomanCollections = (props) => {
  
    const {title, image1, image2, image3, image4, image5, image6} = props.ladiesFashion
  return (
    <div className='collectionSection'>

        <div><img src="/assets/banner05.png"/></div>
    <h2>{title}</h2>

    <div className="womanImages">
        <img src={image1} alt={title} />
        <img src={image2} alt={title} />
        <img src={image3} alt={title} />
        <img src={image4} alt={title} />
        

    </div>

    <div><img src="/assets/banner02.png" /></div>
  </div>
  )
}

export default WomanCollections
