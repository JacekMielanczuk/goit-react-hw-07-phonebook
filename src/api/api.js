import axios from 'axios';

const CONTACTS_URL = 'contacts';

const instance = axios.create({
  baseURL: 'https://649b0bbfbf7c145d0239ecfe.mockapi.io/',
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
