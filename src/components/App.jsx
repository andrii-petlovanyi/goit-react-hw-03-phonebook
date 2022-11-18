import { Component } from 'react';
import { Box } from './Box';
import { ContactForm } from './ContactsForm/ContactsForm';
import { FilterContacts } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import { theme } from './Theme';
import {
  ListItemApp,
  ListItemText,
  BtnDel,
} from './ContactListItem/ContactListItem.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('KEY_CONTACTS'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('KEY_CONTACTS', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    if (
      this.state.contacts.find(
        cont => cont.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onDelete = id => {
    const newArray = this.state.contacts.filter(c => c.id !== id);
    this.setState(prevState => ({
      contacts: [...newArray],
    }));
  };

  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onFilter = () => {
    if (this.state.filter === '') {
      return;
    }
    return this.state.contacts.map(contact => {
      if (
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      ) {
        return (
          <ListItemApp key={contact.id}>
            <ListItemText>
              <b>{contact.name}</b> : {contact.number}
            </ListItemText>
            <BtnDel
              type="button"
              onClick={() => {
                this.onDelete(contact.id);
              }}
            ></BtnDel>
          </ListItemApp>
        );
      }
      return null;
    });
  };

  render() {
    return (
      <Box
        as="section"
        width={380}
        listStyle="none"
        mx="auto"
        mt="20px"
        p="20px"
        borderRadius="20px"
        backgroundColor={theme.colors.mainBackground}
        boxShadow={theme.shadows.custom}
      >
        <Box
          as="h1"
          display="flex"
          justifyContent="center"
          color={theme.colors.text}
          fontFamily={theme.fonts.title}
        >
          PhoneBook
        </Box>
        <ContactForm onSubmit={this.addContact} />
        <Box
          as="span"
          width={330}
          height={3}
          backgroundColor={theme.colors.text}
          display="flex"
          mx="auto"
          my="40"
        />
        <Box
          as="h2"
          my={40}
          display="flex"
          color={theme.colors.text}
          fontFamily={theme.fonts.title}
          justifyContent="center"
        >
          {this.state.contacts.length > 0 ? 'Contacts' : 'No contacts'}
        </Box>
        {this.state.contacts.length > 1 && (
          <FilterContacts
            onChange={this.onChange}
            value={this.state.filter}
            onFilter={this.onFilter}
          />
        )}
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.onDelete}
        />
      </Box>
    );
  }
}
