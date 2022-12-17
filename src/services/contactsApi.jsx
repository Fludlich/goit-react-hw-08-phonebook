import axios from 'axios';
 axios.defaults.baseURL = 'https://639b5a7131877e43d68a523d.mockapi.io';

export const  fetch = async () => {
 const response = await axios.get(`/contacts`).then(response => response.data);
 return response
};
export const add = async contact => {
  return await axios.post('/contacts', contact).then(({ data }) => data);
};

export const remove = async contactId => {
  return await axios.delete(`/contacts/${contactId}`);
};





export const update = (contactId, update) => {
  return axios.patch(`/contactId/${contactId}`, update).then(({ data }) => data);
};

