import axios from 'axios';
import { AplicationFormDTO ,  FormDonationCreateDto, FormVolunteerCreateDto } from '../Types/informativeType';


const URLBase =  'https://localhost:7066/api';

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


export const getGalleryCatgory = async () => {
  const response = await axios.get(`${URLBase}/GalleryCategory`);
  return response.data;
}



export const getRegistrationSection = async () => {
  const response = await axios.get(`${URLBase}/RegistrationSection`);
  return response.data;
}


export const getDonationType = async () => {
  const response = await axios.get(`${URLBase}/DonationType`);
  return response.data;
}

export const getServicesSection = async () => {
  const response = await axios.get(`${URLBase}/ServiceSection`);
  return response.data;
}

export const getAdministrativeRequirements = async () => {
  const response = await axios.get(`${URLBase}/AdministrativeRequirements`);
  return response.data;
}

export const getImportantInformation = async () => {
  const response = await axios.get(`${URLBase}/ImportantInformation`);
  return response.data;
}


export const postFormDonation = async (donationData: FormDonationCreateDto): Promise<any> => {
  try {
    // Hacemos la solicitud POST enviando el objeto tipado FormDonationCreateDto
    const response = await axios.post(`${URLBase}/FormDonation`, donationData);
    return response.data; // Retorna la respuesta del backend
  } catch (error) {
    console.error('Error al enviar los datos de donación:', error);
    throw error;  // Lanza el error para que pueda ser manejado por React Query u otros mecanismos
  }
};

export const postFormVolunteer = async (donationData: FormVolunteerCreateDto): Promise<any> => {
  try {
    // Hacemos la solicitud POST enviando el objeto tipado FormDonationCreateDto
    const response = await axios.post(`${URLBase}/FormVoluntarie`, donationData);
    return response.data; // Retorna la respuesta del backend
  } catch (error) {
    console.error('Error al enviar los datos de donación:', error);
    throw error;  // Lanza el error para que pueda ser manejado por React Query u otros mecanismos
  }
};

export const getVoluntarieType = async () => {
  const response = await axios.get(`${URLBase}/VoluntarieType`);
  return response.data;
};

export const getNursingRequirements = async () => {  
  const response = await axios.get(`${URLBase}/NursingRequirements`);
  return response.data;
}




export const postFormAplication = async (applicationData: AplicationFormDTO): Promise<any> => {
  try {
    const response = await axios.post(`${URLBase}/ApplicationForm`, applicationData);
    return response.data;
  } catch (error) {
    console.error('Error al enviar los datos de la solicitud:', error);
    throw error;
  }
};
