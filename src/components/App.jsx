import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/selectors';
import ContactsList from './ContactsList/ContactsList';
import './App.css';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

export function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App__container">
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      {contacts.length > 0 ? (
        <>
          <Filter />

          <ContactsList />
        </>
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
}
