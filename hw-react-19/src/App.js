   import './App.css';
   import './reset.css';
   import React, { useState } from 'react';
   import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
   import ContactPage from './components/User';
   import PublicationPage from './components/PublicationPage/PublicationPage';
   import PhotoPage from './components/Foto/Foto';
   import HomePage from './components/HomePage/HomePage';

   const App = () => {
   return (
      <Router>
         <div>
         <nav>
            <ul>
               <li>
               <Link to="/">Головна</Link>
               </li>
               <li>
               <Link to="/publications">Публікації</Link>
               </li>
               <li>
               <Link to="/photos">Фотографії</Link>
               </li>
               <li>
               <Link to="/contacts">Контакти</Link>
                  </li>
         </ul>
      </nav>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/publications" element={<PublicationPage />} />
         <Route path="/photos" element={<PhotoPage />} />
         <Route path="/contacts" element={<ContactPage />} />
      </Routes>
   </div>
      </Router>
   );
   };

   export default App;