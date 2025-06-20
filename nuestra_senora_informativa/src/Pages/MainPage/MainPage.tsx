import DonationSection from './Components/DonationSection';
import Map from './Components/Map'; 
import AboutUsSection from './Components/AboutUsSection';
import HeroSection from './Components/HeroSection';
import VolunteerSection from './Components/VolunteerSection';
import MemberSection from './Components/MemberSecion';
import GalerySection from './Components/GalerySection';
import RegistrationSection from './Components/RegistrationSection';
import ServiceSection from './Components/ServicesSection';

const MainPage = () => {
  return (
    <>
    <HeroSection />
    <AboutUsSection />
    <MemberSection />
    <ServiceSection />
    <RegistrationSection />
    <VolunteerSection />
    <DonationSection />
    <GalerySection />
    <Map />
    </>
  )
}

export default MainPage