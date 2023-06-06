import React from 'react';
import './ContactsList.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

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
