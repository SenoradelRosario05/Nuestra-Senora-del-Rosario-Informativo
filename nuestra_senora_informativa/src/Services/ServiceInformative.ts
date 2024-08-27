import axios from 'axios';

//Sections Urls
const CONTACT_URL = 'http://localhost:5074/api/Contact'; 
const TITTLE_URL = 'http://localhost:5074/api/TitleSection/';

export const getContacts = async () => {
  const response = await axios.get(CONTACT_URL);
  return response.data;
};

export const getTitles = async (id : number) => {
  const response = await axios.get(`${TITTLE_URL}${id}`);
  return response.data;
};

