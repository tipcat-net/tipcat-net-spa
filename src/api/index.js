import axios from 'axios';

import { getBody, ContentTypes } from '../form-helpers/utils';

axios.defaults.baseURL = process.env.REACT_APP_API;

const getToken = async () => localStorage.getItem('token');

export const fetchers = {
  // Member
  addMember: async ({accountId, ...data}) => {
    const accessToken = await getToken();
    return axios.post(`/api/accounts/${accountId}/members`, data, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },
  getMember: async () => {
    const accessToken = await getToken();
    return axios.get('/api/members/current', { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },
  createMember: async () => {
    const accessToken = await getToken();
    return axios.post('/api/members/current', null, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },
  getMemberById: async ({accountId, memberId}) => {
    const accessToken = await getToken();
    return axios.post(`/api/accounts/${accountId}/members/${memberId}`, null, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },
  updateMember: async ({accountId, id, ...data}) => {
    const accessToken = await getToken();
    return axios.put(`/api/accounts/${accountId}/members/${id}`, data, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },
  updateAvatarMember: async ({id, memberId, data}) => {
    const accessToken = await getToken();
    return axios.put(`/api/accounts/${id}/members/${memberId}/avatar`, getBody(data, ContentTypes.MPFD), { 
        headers: {
          'Content-Type': ContentTypes.MPFD,
          'Authorization' : `Bearer ${accessToken}`
        } 
      }
    );
  },

  // Accounts
  addAccount: async (data) => {
    const accessToken = await getToken();
    return axios.post('/api/accounts', data, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },
  getAccount: async (accountId) => {
    const accessToken = await getToken();
    return axios.get(`/api/accounts/${accountId}`, { headers: {"Authorization" : `Bearer ${accessToken}`} })
  },
  updateAccount: async ({id, ...data}) => {
    const accessToken = await getToken();
    return axios.put(`/api/accounts/${id}`, data, { headers: {"Authorization" : `Bearer ${accessToken}`} });
  },
  updateAvatarAccount: async ({id, data}) => {
    const accessToken = await getToken();
    return axios.put(`/api/accounts/${id}/avatar`, getBody(data, ContentTypes.MPFD), { 
        headers: {
          'Content-Type': ContentTypes.MPFD,
          'Authorization' : `Bearer ${accessToken}`
        } 
      }
    );
  },

  // Facility
  addFacility: async ({ accountId, ...data }) => {
    const accessToken = await getToken();
    return axios.post(`/api/accounts/${accountId}/facilities`, data, { headers: {"Authorization" : `Bearer ${accessToken}`} })
  },
  updateFacility: async ({ accountId, facilityId, ...data }) => {
    const accessToken = await getToken();
    return axios.put(`/api/accounts/${accountId}/facilities/${facilityId}`, data, { headers: {"Authorization" : `Bearer ${accessToken}`} })
  },
};
