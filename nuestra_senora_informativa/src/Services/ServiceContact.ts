import axios from "axios";

const URLBase =  'http://localhost:5074/api';

export const getContacts = async () => {
    const response = await axios.get(`${URLBase}/Contact`);
    return response.data;
  };
  