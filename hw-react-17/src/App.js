// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const contacts = [{
//   'firstName': "Барней",
//   'lastName': "Стинсовський",
//   'phone': "+380956319521",
//   'gender': "male"
// }, {
//   'firstName': "Робін",
//   'lastName': "Щербатська",
//   'phone': "+380931460123",
//   'gender': "female"
// }, {
//   'firstName': "Анонімний",
//   'lastName': "Анонімус",
//   'phone': "+380666666666",
//   'gender': "none"
// }, {
//   'firstName': "Лілія",
//   'lastName': "Олдровна",
//   'phone': "+380504691254",
//   'gender': "female"
// }, {
//   'firstName': "Маршен",
//   'lastName': "Еріксонян",
//   'phone': "+380739432123",
//   'gender': "male"
// }, {
//   'firstName': "Теодор",
//   'lastName': "Мотсбес",
//   'phone': "+380956319521",
//   'gender': "male"
// }];

// const Contracts = () => {
//   const [filteredContacts, setFilteredContacts] = useState(contacts);
//   const [searchText, setSearchText] = useState('');

//   const handleSearchTextChange = (event) => {
//     setSearchText(event.target.value);
//     const filtered = contacts.filter(contact => contact.lastName.toLowerCase().includes(event.target.value.toLowerCase()));
//     setFilteredContacts(filtered);
//   }

//   return (
//     <div className="contracts">
//       <div className="search">
//         <input type="text" value={searchText} onChange={handleSearchTextChange} placeholder="Пошук за прізвищем" />
//       </div>
//       {filteredContacts.map((contact, index) => (
//         <Contact key={index} contact={contact} />
//       ))}
//     </div>
//   );
// };

// const Contact = ({ contact }) => {
//   const getGenderIcon = (gender) => {
//     if (gender === "male") {
//       return <i className="fas fa-male"></i>;
//     } else if (gender === "female") {
//       return <i className="fas fa-female"></i>;
//     } else {
//       return <i className="fas fa-genderless"></i>;
//     }
//   };

//   return (
//     <div className='card'>
//       <div className="card-info">
//         <div className="avatar">
//           {getGenderIcon(contact.gender)}
//         </div>
//         <div className="details">
//           <p className="name">{contact.firstName} {contact.lastName}</p>
//           <p className="phone">{contact.phone}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const User = () => {
//   return (
//     <div className="user">
//       <Contracts />
//     </div>
//   );
// };

// ReactDOM.render(<User />, document.getElementById('root'));