import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { Box } from '../Box';

export const FilterContacts = ({ onChange = () => {}, value = '' }) => {
  return (
    <Box
      display="flex"
      pl="30px"
      flexDirection="column"
      justifyContent="center"
      p={0}
    >
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    </Box>
  );
};

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
