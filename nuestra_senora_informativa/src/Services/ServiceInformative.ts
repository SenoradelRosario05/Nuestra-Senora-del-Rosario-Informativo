


import axios from 'axios';



const URLBase = 'https://localhost:7066/api/AboutUsSection';


export const getAboutUsSection = async (id: number) => {
    const response = await axios.get(`${URLBase}/subtitle_About_Us/${id}`);
    return response.data;
}


export const getMissionTitle = async () => {  
const response = await axios.get(`${URLBase}/missionTitle_About_Us`);
return response.data;
}


export const getMissionDescription = async () => {
    const response = await axios.get(`${URLBase}/missionDescription_About_Us`);
    return response.data;
}



export const getVisionTitle = async () => {
  const response = await axios.get(`${URLBase}/visionTitle_About_Us`);
  return response.data 

}


export const getVisionDescription = async () => {
  const response = await axios.get(`${URLBase}/visionDescription_About_Us`);
  return response.data;
}

 