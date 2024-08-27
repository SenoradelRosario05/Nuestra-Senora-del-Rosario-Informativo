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

export const getIcons = async () => {
  const response = await axios.get(`${UrlBase}/SiteSettings`);
  console.log(response.data);
  return response.data;
};

export const getDonationsSection = async () => {
  const response = await axios.get(`${UrlBase}/DonationsSection`);
  console.log(response.data);
  return response.data;
};

export const getButtonText = async (id: number) => {
  const response = await axios.get(`${UrlBase}/ButtonInfo/${id}`);
  console.log(response.data);
  return response.data;
};