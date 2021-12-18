import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};
