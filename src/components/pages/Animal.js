import React, {useState, useEffect} from 'react'

export default function Animal(props) {

  const [image, setImage] = useState(0)
  const [images, setImages] = useState(0)

  useEffect(() => {
    // get images
  }, [])

  const getNextImg = () => {
    return images[(image+1) % images.length]
  }

  const getPrevImg = () => {
    return images[image === 0 ? images.length - 1: image - 1]
  }

  const nextImg = () => {
    setImage((image+1) % images.length)
  }

  const prevImg = () => {
    setImage(image === 0 ? images.length - 1: image - 1)
  }

  return (
    <>
      <div className='carousal' >

        <button onClick={prevImg} >{'<'}</button>
        <img src={images[image]} alt={`animal${image}`} />
        <button onClick={nextImg} >{'>'}</button>

        <div className='otherImgs' >
          <img onClick={prevImg} src={getPrevImg()} alt={`animal next`} />
          <img src={images[image]} alt={`animal current`} />
          <img onClick={nextImg} src={getNextImg()} alt={`animal previous`} />
        </div>
      </div>
    </>
  )
}