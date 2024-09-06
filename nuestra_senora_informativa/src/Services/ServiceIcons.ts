import axios from "axios";

const URLBase =  'http://localhost:5074/api';

export const getIcons = async () => {
    const response = await axios.get(`${URLBase}/SiteSettings`);
    return response.data;
  };
  