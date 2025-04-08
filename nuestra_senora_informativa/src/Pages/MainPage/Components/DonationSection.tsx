import useTitles from '../../../Hooks/useTitles';
import { useSiteSettings } from '../../../Hooks/useSiteSettings';
import useDonation from '../Hooks/useDonation';
import useButtons from '../../../Hooks/useButtons';
import useNavbarRoutes from '../../../Routes/useExtractRoutes';


export const DonationSection = () => {
  const { data: donationsData } = useDonation();
  const donations = donationsData ? donationsData[0] : null;
  const { data: siteSettings } = useSiteSettings();
  const siteSettingsData = siteSettings ? siteSettings[0] : null;
  const { data: title } = useTitles(6);
  const { data: button } = useButtons(2);

  const { isError } = useNavbarRoutes();

  if (isError) return <div>Error loading navigation data</div>;

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full flex flex-col items-center">
        <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-'Poppins'    text-center">
          {title ? title.title_Text_Section : ""}
        </h2>
        <div className="flex items-center justify-center my-6 w-full max-w-lg">
          <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
          <img className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mx-4" src={siteSettingsData?.icon_HGA_Url} alt="Logo de la institución" />
          <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
        </div>
        <div className="relative w-full max-w-4xl">
          <img className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-auto opacity-20" src={siteSettingsData?.icon_HGA_Url} alt="Imagen de Fondo" />
          <p className="relative z-10 text-[#0d313f] text-base sm:text-xl font-normal font-'Poppins' text-center mt-6">
            {title?.description_Section || ""}   
          </p>
          <p className="relative z-10 text-[#0d313f] text-base sm:text-xl font-normal font-'Poppins' text-center mt-6">
            {donations?.description_Donations || ""}
          </p>
          <p className="relative z-10 text-[#0d313f] text-[20px] sm:text-[25px] font-bold font-'Poppins' text-center mt-6">
            {donations?.donations_MoreInfoPrompt || ""}
          </p>
        </div>
      </div>
      <div className="relative z-10 mt-12 text-center">
        <button className="bg-[#dab87d] text-[#0d313f] text-[18px] sm:text-[22px] font-bold font-'Poppins' py-3 sm:py-4 px-8 sm:px-10 rounded-[20px] sm:rounded-[30px] shadow-lg transition-all duration-300 hover:bg-[#c7a46d] hover:scale-105">
          <a href='/donaciones'>{button?.buttonText || "Realiza tu donación ahora"}</a>
        </button>
      </div>
    </div>
  );
};

export default DonationSection;
