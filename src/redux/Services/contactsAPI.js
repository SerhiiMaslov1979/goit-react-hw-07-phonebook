import axios from 'axios';

const BASE_URL = 'https://mockapi.io';

export const getContacts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contacts`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createContact = async contactData => {
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, contactData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteContact = async contactId => {
  try {
    await axios.delete(`${BASE_URL}/contacts/${contactId}`);
  } catch (error) {
    throw new Error(error.message);
  }
};
