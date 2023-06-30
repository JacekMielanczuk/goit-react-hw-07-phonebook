import axios from 'axios';

const CONTACTS_URL = 'contacts';

const instance = axios.create({
  baseURL: 'https://645e153212e0a87ac0e71f94.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getContacts = () => {
  return instance.get(`/${CONTACTS_URL}`);
};

export const addContact = data => {
  return instance.post(`/${CONTACTS_URL}`, data);
};

export const deleteContact = id => {
  return instance.delete(`/${CONTACTS_URL}/${id}`);
};
