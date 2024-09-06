import axios from "axios";

const URLBase =  'http://localhost:5074/api';


export const getHeroSection = async () => {
const response = await axios.get(`${URLBase}/HeroSection`);
return response.data ; 
}