import axios from "axios";

const URLBase =  'http://localhost:5074/api';

export const getNavbarItems = async () => {
  const response = await axios.get(`${URLBase}/NavbarItem`);
  return response.data;
};

export const getNavbarItemsId = async (id: number) => {
  const response = await axios.get(`${URLBase}/NavbarItem/${id}`);
  return response.data;
};