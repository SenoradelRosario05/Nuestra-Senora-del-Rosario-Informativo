import IconsComponent from '../../../Icons/IconsComponent';
import useAboutUs from '../Hooks/useAboutUs';
import { useSiteSettings } from '../../../Hooks/useSiteSettings';
import useTitles from '../../../Hooks/useTitles';

const AboutUsSection = () => {
  const { data: AboutUsDataArray } = useAboutUs();  
  const AboutUs = AboutUsDataArray ? AboutUsDataArray[0] : null;
  const { data: title } = useTitles (1);
  const { data: IconsDataArray } = useSiteSettings();
  const IconsDA = IconsDataArray ? IconsDataArray[0] : null;

  return (
    <div id="about-us-section" className="relative w-full min-h-screen bg-white flex flex-col items-center py-16 px-4 lg:px-8 space-y-16">
      
      <div className="w-full flex flex-col items-center text-center space-y-6">
        <div className="flex items-center justify-center mb-6">
          <img className="opacity-80 w-[60px] h-[60px] rounded-full mr-4" src={IconsDA?.icon_HGA_Url} alt="Icon" />
          <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-'Poppins' uppercase text-center">
            {title?.title_Text_Section}
          </h2>
        </div>
        <div className="w-[10%] h-[3px] bg-[#0d313f] mx-auto mb-8"></div>
        <p className="text-[#0d313f] text-lg font-normal font-'Poppins' max-w-4xl leading-relaxed">
          {AboutUs?.subtitle_About_Us}
        </p>
      </div>

      {/* Sección de Misión y Visión en dos columnas */}
      <div className="w-full max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Misión */}
        <div className="flex flex-col items-center justify-start text-center p-6 border border-[#0d313f] rounded-lg shadow-lg transition-shadow hover:shadow-xl group">
          <div className="flex items-center space-x-4 mb-4">
            <IconsComponent iconName="mission" size={40} color="#0d313f" />
            <h3 className="text-3xl text-[#0d313f] font-normal">{AboutUs?.missionTitle_About_US}</h3>
          </div>
          <div className="w-[50px] h-[3px] bg-[#0d313f] mb-4 transition-all duration-300 ease-in-out group-hover:w-[120px]"></div>
          <p className="text-[#0d313f] text-lg font-normal font-'Poppins' leading-relaxed">
            {AboutUs?.missionDescription_About_US}
          </p>
        </div>

        {/* Visión */}
        <div className="flex flex-col items-center justify-start text-center p-6 border border-[#0d313f] rounded-lg shadow-lg transition-shadow hover:shadow-xl group">
          <div className="flex items-center space-x-4 mb-4">
            <IconsComponent iconName="vision" size={40} color="#0d313f" />
            <h3 className="text-3xl text-[#0d313f] font-normal">{AboutUs?.visionTitle_About_US}</h3>
          </div>
          <div className="w-[50px] h-[3px] bg-[#0d313f] mb-4 transition-all duration-300 ease-in-out group-hover:w-[120px]"></div>
          <p className="text-[#0d313f] text-lg font-normal font-'Poppins' leading-relaxed">
            {AboutUs?.visionDescription_About_US}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;