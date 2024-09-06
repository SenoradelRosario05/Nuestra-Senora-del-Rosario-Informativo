import axios from "axios";

const URLBase =  'http://localhost:5074/api';

export const getMemberSection = async () => {
  const response = await axios.get(`${URLBase}/AssociatesSection`);
  return response.data;
};
