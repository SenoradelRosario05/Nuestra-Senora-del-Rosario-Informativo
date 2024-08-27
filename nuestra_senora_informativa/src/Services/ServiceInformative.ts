import axios from 'axios';

// UrlBase
const UrlBase = 'http://localhost:5074/api';

export const getContacts = async () => {
  const response = await axios.get(`${UrlBase}/Contact`);
  return response.data;
};

export const getTitles = async (id: number) => {
  const response = await axios.get(`${UrlBase}/TitleSection/${id}`);
  return response.data;
};
