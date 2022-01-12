import axios from 'axios';

import { getBody, ContentTypes } from '../form-helpers/utils';
import { config } from './config';

axios.defaults.baseURL = process.env.REACT_APP_API;

export const fetchers = {
  // Member
  addMember: async ({accountId, ...data}) => axios.post(`/api/accounts/${accountId}/members`, data, config(true)),
  addAvatarMember: async ({id, accountId, data}) => axios.post(`/api/accounts/${accountId}/members/${id}/avatar`, getBody(data, ContentTypes.MPFD), config(true, ContentTypes.MPFD)),
  getMember: async () => axios.get('/api/members/current', config(true)),
  createMember: async () => axios.post('/api/members/current', null, config(true)),
  getMemberById: async ({accountId, memberId}) => axios.post(`/api/accounts/${accountId}/members/${memberId}`, null, config(true)),
  updateMember: async ({accountId, id, ...data}) => axios.put(`/api/accounts/${accountId}/members/${id}`, data, config(true)),
  updateAvatarMember: async ({id, accountId, data}) => axios.put(`/api/accounts/${accountId}/members/${id}/avatar`, getBody(data, ContentTypes.MPFD), config(true, ContentTypes.MPFD)),

  // Accounts
  addAccount: async (data) => axios.post('/api/accounts', data, config(true)),
  getAccount: async (accountId) => axios.get(`/api/accounts/${accountId}`, config(true)),
  updateAccount: async ({id, ...data}) => axios.put(`/api/accounts/${id}`, data, config(true)),
  updateAvatarAccount: async ({id, data}) => axios.put(`/api/accounts/${id}/avatar`, getBody(data, ContentTypes.MPFD), config(true, ContentTypes.MPFD)),

  // Facility
  getFacilities: async (accountId) => axios.get(`/api/accounts/${accountId}/facilities`, config(true)),
  addFacility: async ({ accountId, ...data }) => axios.post(`/api/accounts/${accountId}/facilities`, data, config(true)),
  addAvatarFacility: async ({id, accountId, data}) => axios.put(`/api/accounts/${accountId}/facilities/${id}/avatar`, getBody(data, ContentTypes.MPFD), config(true, ContentTypes.MPFD)),
  updateFacility: async ({ accountId, facilityId, ...data }) => axios.put(`/api/accounts/${accountId}/facilities/${facilityId}`, data, config(true)),

  getPayment: async (memberCode) => axios.get(`/api/payments/${memberCode}`),
  createPayment: async (data) => axios.post('/api/payments', data),
  capturePayment: async (paymentId) => axios.post(`/api/payments/${paymentId}/capture`),
  updatePayment: async ({ paymentId, ...data }) => axios.put(`/api/payments/${paymentId}`, data),

  getTransactions: async (params) => axios.get('/api/transactions/', config(true, null, params)),
};
