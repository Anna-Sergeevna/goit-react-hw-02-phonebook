import React, { Component } from "react";
import shortid from 'shortid';

import Container from 'components/Container';
import Section from 'components/Section';

import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import './App.css';

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({name, number}) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  };


  deleteContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }))
};

  render() {
    const { contacts } = this.state;
    const addContact = this.addContact;
    const onDeleteContact = this.deleteContact

  return (
    <Container title="Телефонная книга">
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact}/>
      </Section>
      <Section title="Contacts">
        {/* <Filter/> */}
        <ContactList contacts={contacts} onDeleteContact={onDeleteContact}/>
      </Section>
    </Container>
  );
  }
}

export default App;