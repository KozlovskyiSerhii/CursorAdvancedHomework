import React, { useState } from 'react';
import comment from './comment.svg';
import download from './download.svg';
import like from './like.svg';
import retweet from './retweet.svg';
import './App.css';

const ANAKIN_IMAGE = "https://static.wikia.nocookie.net/disney/images/5/50/Profile_-_Anakin_Skywalker.png";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const date = Date().split(" ").slice(1, 4).join(" ");
const content=  "WTF? Who is Ray? Why she is Skywalker? Luke...?";
const author = {
  name: "Anakin Skywalker",
  photo: ANAKIN_IMAGE,
  nickname: "@dart_vader"
};

function App() {
  const [count, setCount] = useState(157);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
            <div className="header">
               <img src={ANAKIN_IMAGE} alt="Anakin" className="header-img" />
               <p className="header-info header-text">{author.name}</p>
               <p className="header-info">{author.nickname}</p>
               <p className="header-info">{date}</p>
            </div>
            <div className="info-ray">
               <p className="info-ray-text">{content}</p>
               <img src={RAY_IMAGE} alt="Rey" className="img-rey" />
            </div>
        <div className="footer">
        <div className="footer-block-info">
          <img src={comment} alt="comment"  className="footer-img" />
          <p className="number">342</p>
        </div>
           <div className="footer-block-info">
               <img src={retweet} alt="retweet" className="footer-img"/>
      <p className="number">345</p>
   </div>
           <div className="footer-block-info">
       <img src={like} alt="like" onClick={handleClick} className="footer-img"/>
      <p className="number">{count}</p>
   </div>
           <div className="footer-block-info">
              <img src={download} alt="download" className="footer-img--download" />
           </div>
      </div>
    </div>
  );
}

export default App;
