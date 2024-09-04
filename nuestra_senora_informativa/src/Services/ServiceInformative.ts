import axios from 'axios';

const URLBase =  'http://localhost:5074/api';

export const getAboutUsSection = async () => {
  const response = await axios.get(`${URLBase}/AboutUsSection`);
  return response.data;
}

export const getVolunteerSection = async () => {
  const response = await axios.get(`${URLBase}/VolunteeringSection`);
  return response.data;
};

export const getContacts = async () => {
  const response = await axios.get(`${URLBase}/Contact`);
  return response.data;
};

export const getTitles = async (id: number) => {
  const response = await axios.get(`${URLBase}/TitleSection/${id}`);
  return response.data;
};

export const getIcons = async () => {
  const response = await axios.get(`${URLBase}/SiteSettings`);
  return response.data;
};

export const getDonationsSection = async () => {
  const response = await axios.get(`${URLBase}/DonationsSection`);
  return response.data;
};

export const getButtonText = async (id: number) => {
  const response = await axios.get(`${URLBase}/ButtonInfo/${id}`);
  return response.data;
};

export const getHeroSection = async () => {
const response = await axios.get(`${URLBase}/HeroSection`);
return response.data ; 
}


export const getNavbarItems = async () => {
  const response = await axios.get(`${URLBase}/NavbarItem`);
  return response.data;
};

export const getNavbarItemsId = async (id: number) => {
  const response = await axios.get(`${URLBase}/NavbarItem/${id}`);
  return response.data;
};

export const getMemberSection = async () => {
  const response = await axios.get(`${URLBase}/AssociatesSection`);
  return response.data;
};


export const getGalleryItem = async () => {
  const response = await axios.get(`${URLBase}/GalleryItem`);
  return response.data;
};

export const getVolunteerProfile = async () => {
  const response = await axios.get(`${URLBase}/VolunteerProfile`);
  return response.data;
}


export const getRegistrationSection = async () => {
  const response = await axios.get(`${URLBase}/RegistrationSection`);
  console.log(response.data);
  return response.data;
}





