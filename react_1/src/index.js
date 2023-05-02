import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom/client';

// import './style.css'

const contacts_all = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }
]

function Contact(props){
  return (
    <div className='contacts'>
      <p>Імʼя: {props.firstName}</p>
      <p>Призвіще: {props.lastName}</p>
      <p>Номер телефону: {props.phone}</p>
    </div>
  )
}

function Contacts(){
  const [contacts, setContacts] = useState(contacts_all);
  const [search, setSearch] = useState("");
  
  function handleSearchChange(event){
    setSearch(event.target.value)

    setContacts(contacts_all.filter(el => el.lastName.includes(search)))
  }

  return (
    <Fragment>
      <input className='search' placeholder='Find a person' value={search} onChange={(event) => { handleSearchChange(event) }} />
      <div className='contacts_container'>
        { contacts.map(el => <Contact {...el} />) }
      </div>
    </Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contacts />);