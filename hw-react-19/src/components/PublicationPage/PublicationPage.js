import React, { useState } from 'react';
import comment from './icon/comment.svg';
import download from './icon/download.svg';
import like from './icon/like.svg';
import retweet from './icon/retweet.svg';
import './cards.css';
import img1 from './img/four.jpg';
import img2 from './img/two.jpg';
import img3 from './img/one.jpg';
import img4 from './img/three.jpg';

const Cards = ({ author, date, content, fotos }) => {
  const [count, setCount] = useState(157);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="cards">
      <div className="header">
        <img src={author.photo} alt="Author" className="header-img" />
        <p className="header-info header-text">{author.name}</p>
        <p className="header-info">{author.nickname}</p>
        <p className="header-info">{date}</p>
      </div>
      <div className="info-ray">
        <p className="info-ray-text">{content}</p>
        <img src={fotos} alt="Rey" className="img-rey" />
      </div>
      <div className="footer">
        <div className="footer-block-info">
          <img src={comment} alt="comment" className="footer-img" />
          <p className="number">342</p>
        </div>
        <div className="footer-block-info">
          <img src={retweet} alt="retweet" className="footer-img" />
          <p className="number">345</p>
        </div>
        <div className="footer-block-info">
          <img src={like} alt="like" onClick={handleClick} className="footer-img" />
          <p className="number">{count}</p>
        </div>
        <div className="footer-block-info">
          <img src={download} alt="download" className="footer-img--download" />
        </div>
      </div>
    </div>
  );
};

const PublicationPage = () => {
  const publications = [
    {
      id: 1,
      title: 'Публікація 1',
      content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
      foto : img1,
      author: {
        name: "Anakin Skywalker",
        photo: img1,
        nickname: "@dart_vader"
      },
      date: new Date().toLocaleDateString()
    },
    {
      id: 2,
      title: 'Публікація 2',
       content: 'WTF? Who is Ray? Why she is Skywalker? Yoda...?',
      foto : img2,
      author: {
        name: "Yoda",
        photo: img2,
        nickname: "@Big-Yoda"
      },
      date: new Date().toLocaleDateString()
    },
    {
      id: 3,
      title: 'Публікація 3',
       content: 'WTF? Who is Ray? Why she is Skywalker? Darth Vader...?',
      foto : img3,
      author: {
        name: "Darth Vader",
        photo: img3,
        nickname: "@Darth_Vader"
      },
      date: new Date().toLocaleDateString()
},
{
id: 4,
title: 'Публікація 4',
   content: 'WTF? Who is Ray? Why she is Skywalker? Mandalorian...?',
foto : img4,
author: {
name: "Mandalorian",
photo: img4,
nickname: "@Mandalorian"
},
date: new Date().toLocaleDateString()
}
];

return (
<div>
{publications.map((publication) => (
<Cards
      key={publication.id}
      fotos={publication.foto}
       author={publication.author}
       date={publication.date}
       content={publication.content}
     />
))}
</div>
);
};

export default PublicationPage;