import DonationSection from './Components/DonationSection';
import Map from './Components/Map'; 
import AboutUsSection from './Components/AboutUsSection';
import HeroSection from './Components/HeroSection';
import VolunteerSection from './Components/VolunteerSection';
import MemberSection from './Components/MemberSecion';

const MainPage = () => {
  return (
    <>
    <HeroSection />
    <AboutUsSection />
    <MemberSection />
    <VolunteerSection />
    <DonationSection />
    <Map />
    </>
  )
}

export default MainPage