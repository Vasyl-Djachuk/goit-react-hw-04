import 'modern-normalize';
import './App.css';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import startContacts from './dataContacts/contacts.json';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    return savedContacts !== null ? JSON.parse(savedContacts) : startContacts;
  });

  const [searchValue, setSearchValu] = useState('');
  const handleChangeSearch = e => {
    setSearchValu(e.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filtredContacts = contacts.filter(
    contact =>
      contact.name
        .toLowerCase()
        .split(` `)
        .filter(n => n.startsWith(searchValue.toLocaleLowerCase())).length > 0
  );

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    setContacts([...contacts, values]);
    actions.resetForm();
  };

  const handleDeleteClick = e => {
    setContacts(contacts.filter(contact => contact.id !== e.target.dataset.id));
  };

  return (
    <>
      <div>
        <h1 className="main-title">Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <SearchBox
          handleChange={handleChangeSearch}
          searchValue={searchValue}
        />
        <ContactList
          contacts={filtredContacts}
          handleDeleteClick={handleDeleteClick}
        />
      </div>
    </>
  );
};
