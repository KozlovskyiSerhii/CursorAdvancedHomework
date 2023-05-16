import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const ContactsPage = () => {
  const contacts = [
    { id: 1, name: 'Контакт 1' },
    { id: 2, name: 'Контакт 2' },
    { id: 3, name: 'Контакт 3' },
    { id: 4, name: 'Контакт 4' },
  ];

  return (
    <div>
      <h1>Сторінка контактів</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.name}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactDetailsPage = () => {
  const { name } = useParams();
  const contact = {
    name,
    gender: 'Чоловік',
    phone: '123-456-7890',
    description: 'Це детальний опис контакту.',
    conversation: 'Це умовна переписка з контактом.',
  };

  return (
    <div>
      <h1>{contact.name}</h1>
      <p>Стать: {contact.gender}</p>
      <p>Телефон: {contact.phone}</p>
      <p>Опис: {contact.description}</p>
      <p>Умовна переписка: {contact.conversation}</p>
    </div>
  );
};

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
              <Link to="/contacts">Контакти</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Головна сторінка</h1>} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/contacts/:name" element={<ContactDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;