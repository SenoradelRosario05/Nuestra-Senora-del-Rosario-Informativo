import { useQuery } from 'react-query';
import { getButtonText, getDonationsSection, getIcons, getTitles } from '../../../Services/ServiceInformative';
import { Link } from 'react-router-dom';

export const DonationSection = () => {

  const { data: donationsDataArray} = useQuery('donationsInfo', getDonationsSection);
  const { data: siteSettingsDataArray } = useQuery('Icons', getIcons);
  const { data: title} = useQuery(['title', 6], () => getTitles(6));
  const { data: button } = useQuery(['button', 2], () => getButtonText(2));

  const donationsData = donationsDataArray ? donationsDataArray[0] : null;
  const siteSettingsData = siteSettingsDataArray ? siteSettingsDataArray[0] : null;

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full flex flex-col items-center">
        <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-['Poppins'] uppercase text-center">
          {title ? title.title_Text_Section : ""}
        </h2>
        <div className="flex items-center justify-center my-6 w-full max-w-lg">
          <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
          <img className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mx-4" src={siteSettingsData?.icon_HGA_Url} alt="Logo de la institución" />
          <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
        </div>
        <div className="relative w-full max-w-4xl">
          <img className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-auto opacity-20" src={siteSettingsData?.icon_HGA_Url} alt="Imagen de Fondo" />
          <p className="relative z-10 text-[#0d313f] text-base sm:text-xl font-normal font-['Poppins'] text-center mt-6">
            {title?.description_Section || ""}   
          </p>
          <p className="relative z-10 text-[#0d313f] text-base sm:text-xl font-normal font-['Poppins'] text-center mt-6">
            {donationsData?.description_Donations || "En el Hogar de Ancianos Nuestra Señora del Rosario se reciben todo tipo de donaciones para mejorar la calidad de vida de los residentes. Puedes contribuir con ropa, alimentos, artículos de aseo personal, libros, juegos de mesa y más."}
          </p>
          <p className="relative z-10 text-[#0d313f] text-[20px] sm:text-[25px] font-bold font-['Poppins'] text-center mt-6">
            {donationsData?.donations_MoreInfoPrompt || "Tu generosidad hará una diferencia significativa en la vida de quienes residen allí. ¡Gracias por tu apoyo!"}
          </p>
        </div>
      </div>
      <div className="relative z-10 mt-12 text-center">
        <button className="bg-[#dab87d] text-[#0d313f] text-[20px] sm:text-[25px] font-bold font-['Poppins'] py-3 sm:py-4 px-6 sm:px-8 rounded-[20px] sm:rounded-[30px] shadow transition-all duration-300 hover:bg-[#c7a46d]">
         <Link to="/">{button?.buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default DonationSection;