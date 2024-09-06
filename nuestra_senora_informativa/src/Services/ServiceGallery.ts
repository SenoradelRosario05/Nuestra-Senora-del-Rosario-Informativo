import axios from "axios";

const URLBase =  'http://localhost:5074/api';

export const getGalleryItem = async () => {
  const response = await axios.get(`${URLBase}/GalleryItem`);
  return response.data;
};

export const getGalleryCatgory = async () => {
    const response = await axios.get(`${URLBase}/GalleryCategory`);
    return response.data;
  }
  