import React from 'react';
import image1 from './img/1.jpg';
import image2 from './img/2.webp';
import image3 from './img/3.jpg';
import image4 from './img/4.jpg';
import image5 from './img/5.jpg';
import image6 from './img/6.webp';
import image7 from './img/7.jpg';
import image8 from './img/8.webp';
import './foto.css'
const PhotoPage = () => {
   const photos = [
      {
         id: 1,
         imageUrl: image1,
      },
      {
         id: 2,
         imageUrl: image2,
      },
      {
         id: 3,
         imageUrl: image3,
      },
      {
         id: 4,
         imageUrl: image4,
      },
      {
         id: 5,
         imageUrl: image5,
      },
      {
         id: 6,
         imageUrl: image6,
      },
      {
         id: 7,
         imageUrl: image7,
      },
      {
         id: 8,
         imageUrl: image8,
      },
   ];

   return (
      <div>
         <div className="photo-gallery">
            {photos.map((photo) => (
               <PhotoCard key={photo.id} imageUrl={photo.imageUrl} />
            ))}
         </div>
      </div>
   );
};

const PhotoCard = ({ imageUrl }) => (
   <div className="photo-card">
      <img className='photo-card-img' src={imageUrl} alt="Фотографія" />
      <p className='photo-card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta voluptatum fugiat nostrum possimus quo officia minus eum, aut quas placeat autem omnis ut sint, magni repudiandae hic, quibusdam neque?</p>
      </div>
);

export default PhotoPage;