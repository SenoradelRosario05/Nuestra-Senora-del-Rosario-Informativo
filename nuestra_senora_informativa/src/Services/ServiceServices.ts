import axios from "axios";

const URLBase =  'http://localhost:5074/api';

export const getServicesSection = async () => {
  const response = await axios.get(`${URLBase}/ServiceSection`);
  console.log(response.data); 
  return response.data;
}
