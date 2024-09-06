import axios from "axios";

const URLBase =  'http://localhost:5074/api';

export const getAboutUsSection = async () => {
    const response = await axios.get(`${URLBase}/AboutUsSection`);
    return response.data;
  }