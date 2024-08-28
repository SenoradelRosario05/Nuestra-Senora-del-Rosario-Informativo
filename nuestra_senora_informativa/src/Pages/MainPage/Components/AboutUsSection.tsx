
import { useQuery } from 'react-query';
import { getAboutUsSection, getIcons, getTitles } from '../../../Services/ServiceInformative';
import IconsComponent from '../../../Icons/IconsComponent';


const AboutUsSection = () => {
  const { data: AboutUsDataArray } = useQuery('AboutUs', getAboutUsSection);
  const AboutUs = AboutUsDataArray ? AboutUsDataArray[0] : null;

  const { data: IconsDataArray } = useQuery('Icons', getIcons);
  const IconsDA = IconsDataArray ? IconsDataArray[0] : null;

  const { data: title } = useQuery(['title', 1], () => getTitles(1));
  if (!title) return null;

  return (
    <div id="about-us-section" className="relative w-full min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full flex flex-col items-center">
        <div className="flex items-center justify-center mb-6">
          <img className="w-[60px] h-[60px] rounded-[35px] mr-4" src={IconsDA?.icon_HGA_Url} alt="Icon" />
          <p className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-'Poppins' uppercase text-center">
            {title?.title_Text_Section}
          </p>
        </div>
        <div className="w-[1100px] h-[0px] border-2 border-[#0d313f] mb-6"></div>
        <div className="text-[#0d313f] text-[22px] font-medium font-['Poppins'] text-center max-w-2xl mb-12">
          <p>{AboutUs?.subtitle_About_Us}</p>
          <br />
          Nuestra misión es proporcionar un entorno seguro y afectuoso, donde cada persona reciba la atención y el apoyo que necesita para vivir plenamente.
        </div>
        <div className="w-[1440px] h-[auto] bg-[#f3f3f3] flex flex-col items-center justify-center py-8">
          <div className="flex flex-col items-center justify-center space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-4">
              <IconsComponent iconName="mission" size={30} color="#0d313f" />
              <h2 className="text-3xl text-[#0d313f] font-bold">{AboutUs?.missionTitle_About_US}</h2>
            </div>
            <div className="w-[1100px] h-[0px] border-2 border-[#0d313f]"></div>
            <div className="w-[1100px] text-center text-[#0d313f] text-xl font-medium font-['Poppins']">
              <p>{AboutUs?.missionDescription_About_US}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <IconsComponent iconName="vision" size={30} color="#0d313f" />
              <h2 className="text-3xl text-[#0d313f] font-bold">{AboutUs?.visionTitle_About_US}</h2>
            </div>
            <div className="w-[1100px] h-[0px] border-2 border-[#0d313f]"></div>
            <div className="w-[1100px] text-center text-[#0d313f] text-xl font-medium font-['Poppins']">
              <p>{AboutUs?.visionDescription_About_US}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
