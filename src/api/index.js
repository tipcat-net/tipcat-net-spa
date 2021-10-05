import axios from 'axios';

axios.defaults.baseURL = 'https://api-dev.tipcat.net';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const fetchers = {
  // SignUp
  

  // Members
  getMember: () => axios.get('/api/members/current'),
  createMember: () => axios.post('/api/members/current'),
  getMemberById: ({accountId, memberId}) => axios.post(`/api/accounts/${accountId}/members/${memberId}`),
  updateMember: ({accountId, id, ...data}) => axios.put(`/api/accounts/${accountId}/members/${id}`, data),

  // Accounts
  addAccount: (data) => axios.post('/api/accounts', data),
  getAccount: (accountId) => axios.get(`/api/accounts/${accountId}`),
  updateAccount: ({id, ...data}) => axios.put(`/api/accounts/${id}`, data),
};