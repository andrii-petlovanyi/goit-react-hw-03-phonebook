import PropTypes from 'prop-types';
import { ListItem, ListItemText, BtnDel } from './ContactListItem.styled';

export const ContactListItem = ({ contact = {}, onDelete = () => {} }) => {
  const { id, name, number } = contact;
  return (
    <ListItem id={id}>
      <ListItemText>
        <b>{name}</b> : {number}
      </ListItemText>
      <BtnDel
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      ></BtnDel>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  onDelete: PropTypes.func,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
