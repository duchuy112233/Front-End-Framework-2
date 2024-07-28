import { useState, useEffect } from 'react'

const images = [
  'https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg',
  'https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629_640.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small/abstract-polygonal-banner-background.jpg',
  'https://static3.depositphotos.com/1000193/104/i/450/depositphotos_1048150-stock-photo-grunge-banner.jpg'
]

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1))
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1))
  }

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1))
  }

  return (
    <div>
      <div className='slide relative'>
        <img className='h-[400px] w-[1450px]' src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />

        <div className='btn-slide flex justify-between min-w-full absolute top-2/4'>
          <div className='prev ml-4' onClick={prevSlide}>
            <i className='fa-solid fa-angle-left'></i>
          </div>

          <div className='next mr-4' onClick={nextSlide}>
            <i className='fa-solid fa-angle-right'></i>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Banner
