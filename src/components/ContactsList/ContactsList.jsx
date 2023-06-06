import React from 'react';
import './ContactsList.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <ul className="ContactsList__list">
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className="ContactsList__item">
          <p className="ContactsList__text">
            {name}: {number}
          </p>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
