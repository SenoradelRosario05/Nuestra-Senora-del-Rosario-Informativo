import DonationSection from './Components/DonationSection';
import Map from './Components/Map'; 
import AboutUsSection from './Components/AboutUsSection';
import HeroSection from './Components/HeroSection';
import VolunteerSection from './Components/VolunteerSection';
import MemberSection from './Components/MemberSecion';
import GalerySection from './Components/GalerySection';

const MainPage = () => {
  return (
    <>
    <HeroSection />
    <AboutUsSection />
    <MemberSection />
    <VolunteerSection />
    <DonationSection />
    <GalerySection />
    <Map />
    </>
  )
}

export default MainPage