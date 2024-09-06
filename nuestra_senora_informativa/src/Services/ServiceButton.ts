import axios from "axios";

const URLBase =  'http://localhost:5074/api';

export const getButtonText = async (id: number) => {
    const response = await axios.get(`${URLBase}/ButtonInfo/${id}`);
    return response.data;
  };