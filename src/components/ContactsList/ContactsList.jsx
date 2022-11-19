import { List } from './ConctactsList.styled';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts = [], onDelete = () => {} }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
