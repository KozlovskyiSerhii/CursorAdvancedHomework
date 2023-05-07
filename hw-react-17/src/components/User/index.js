import React, { useState } from 'react';
import './user.css';
import male from "./icon/male.svg";
import female from "./icon/female.svg";
import intersex from "./icon/intersex.svg";
import contacts from "./_contacts";

const User = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [showFemale, setShowFemale] = useState(true);
  const [showMale, setShowMale] = useState(true);
  const [showIntersex, setShowIntersex] = useState(true);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    const filtered = contacts.filter(contact => {
      const fullName = `${contact.firstName.toLowerCase()} ${contact.lastName.toLowerCase()}`;
      return fullName.includes(event.target.value.toLowerCase());
    });
    setFilteredContacts(filtered);
  }

  const handleFemaleChange = () => {
    setShowFemale(!showFemale);
  }

  const handleMaleChange = () => {
    setShowMale(!showMale);
  }

  const handleIntersexChange = () => {
    setShowIntersex(!showIntersex);
  }

  const getGenderIcon = (gender) => {
    if (gender === 'female') {
      return <img src={female} alt="Жіноча стать" />;
    } else if (gender === 'male') {
      return <img src={male} alt="Чоловіча стать" />;
    } else {
      return <img src={intersex} alt="Інша стать" />;
    }
  };

  const filteredByGenderContacts = filteredContacts.filter(contact => {
    if ((contact.gender === 'female' && showFemale) || (contact.gender === 'male' && showMale) || (contact.gender === 'none' && showIntersex)) {
      return true;
    }
    return false;
  });

  return (
    <div className="user">
      <div className="search">
        <input type="text" value={searchText} onChange={handleSearchTextChange} placeholder="search...." />
      </div>
      <div className='filter'>
        <label>
          <input type="checkbox" checked={showFemale} onChange={handleFemaleChange} /> Жіноча
        </label>
        <label>
          <input type="checkbox" checked={showMale} onChange={handleMaleChange} /> Чоловіча
        </label>
        <label>
          <input type="checkbox" checked={showIntersex} onChange={handleIntersexChange} /> Інша
        </label>
      </div>
      <div className='card'>
        {filteredByGenderContacts.map((contact, index) => (
           <div key={index} className="card-info">
            <p>{getGenderIcon(contact.gender)}</p>
            <p>Ім'я: {contact.firstName}</p>
            <p>Прізвище: {contact.lastName}</p>
            <p>Телефон: {contact.phone}</p>
            <p>Стать: {contact.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
