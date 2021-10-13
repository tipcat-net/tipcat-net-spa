import axios from 'axios';

import { loginRequest } from "../authConfig";
import { msalInstance } from "../index";

axios.defaults.baseURL = 'https://api-dev.tipcat.net';

const getToken = async (request) => {
  const account = msalInstance.getActiveAccount();

  if (!account) {
      throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
  }

  const response = await msalInstance.acquireTokenSilent({
      account: account,
      ...request
  });

  return response.accessToken;
}

export const fetchers = {
  // SignUp
  
  // Members
  getMembers: async ({ accountId }) => {
    console.log('accountId', accountId);
    const accessToken = await getToken(loginRequest);
    return axios.get(`/api/accounts/${accountId}/members`, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },

  // Member
  getMember: async () => {
    const accessToken = await getToken(loginRequest);
    return axios.get('/api/members/current', { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },
  createMember: async () => {
    const accessToken = await getToken(loginRequest);
    return axios.post('/api/members/current', null, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },
  getMemberById: async ({accountId, memberId}) => {
    const accessToken = await getToken(loginRequest);
    return axios.post(`/api/accounts/${accountId}/members/${memberId}`, null, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },
  updateMember: async ({accountId, id, ...data}) => {
    const accessToken = await getToken(loginRequest);
    return axios.put(`/api/accounts/${accountId}/members/${id}`, data, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },

  // Accounts
  addAccount: async (data) => {
    const accessToken = await getToken(loginRequest);
    return axios.post('/api/accounts', data, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },
  getAccount: async (accountId) => {
    const accessToken = await getToken(loginRequest);
    return axios.get(`/api/accounts/${accountId}`, { headers: {"Authorization" : `Bearer ${accessToken}`} })
  },
  updateAccount: async ({id, ...data}) => {
    const accessToken = await getToken(loginRequest);
    return axios.put(`/api/accounts/${id}`, data, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  }
};