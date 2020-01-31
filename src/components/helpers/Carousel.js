import React, { useState, useEffect } from 'react'

import '../../stylesheets/helpers/Carousel.scss'

export default function Carousel(props) {

  const [image, setImage] = useState(0)
  const [images, setImages] = useState(props.images)
  const [direction, setDirection] = useState('center')

  useEffect(() => {
    setImage(0)
    setImages(props.images)
  }, [props])

  const getImg = (i) => {
    return i < 0 ? images.length + i : i % images.length
  }

  const nextImg = () => {
    setDirection('left')
    setTimeout(() => {
      setDirection('center')
      setImage(getImg(image + 1))
    }, 200)
  }

  const prevImg = () => {
    setDirection('right')
    setTimeout(() => {
      setDirection('center')
      setImage(getImg(image - 1))
    }, 200)
  }
  
  return (
    <div className='carousel' >
      <div className={`mainImg ${direction}`} >
        <img src={images[getImg(image - 1)]} alt={`animal${image}`} />
        <img src={images[image]} alt={`animal${image}`} />
        <img src={images[getImg(image + 1)]} alt={`animal${image}`} />
      </div>

      <div className='otherImgs' >
        <button onClick={prevImg} >{'<'}</button>
        <div className={direction} >
          <img src={images[getImg(image - 2)]} alt={`animal next`} />
          <img onClick={prevImg} src={images[getImg(image - 1)]} alt={`animal next`} />
          <img src={images[image]} alt={`animal current`} />
          <img onClick={nextImg} src={images[getImg(image + 1)]} alt={`animal previous`} />
          <img src={images[getImg(image + 2)]} alt={`animal next`} />
        </div>
        <button onClick={nextImg} >{'>'}</button>
      </div>
    </div>
  )
}