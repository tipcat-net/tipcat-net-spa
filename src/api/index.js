import axios from 'axios';

axios.defaults.baseURL = 'https://api-dev.tipcat.net';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const fetchers = {
  //members
  getMember: () => axios.get('/api/members/current'),
  getMamberUsingPOST: () => axios.post('/api/members/current'),
  //Accounts
  addAccount: (data) => axios.post('/api/accounts', data),
};