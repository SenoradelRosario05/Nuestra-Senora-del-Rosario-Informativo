import { useQuery } from 'react-query';
import { getTitles, getButtonText, getVolunteerSection, getIcons } from '../../../Services/ServiceInformative';
import Button from '../../../Components/Button';
import { useToggleText } from '../Hooks/useToggleText';

const VolunteerSection = () => {
  const { data: siteSettingsDataArray } = useQuery('Icons', getIcons);
  const siteSettingsData = siteSettingsDataArray ? siteSettingsDataArray[0] : null;
  const { data: titleData } = useQuery(['title', 4], () => getTitles(4));
  const { data: buttonMore } = useQuery(['button', 1], () => getButtonText(1));
  const { data: buttonLess } = useQuery(['button', 3], () => getButtonText(3));
  const { data: Subtitle } = useQuery(['Subtitle', 5], () => getTitles(5));
  const { data: volunteerData } = useQuery('Volunteers', getVolunteerSection) as { data: any[] };
  const fullText = titleData?.description_Section || '';
  const { expandedText, toggleText, getTextToShow } = useToggleText(fullText);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-['Poppins'] uppercase text-center">
        {titleData?.title_Text_Section || ""}
      </h2>
      <div className="flex items-center justify-center my-6 w-full max-w-lg">
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
        <img className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mx-4" src={siteSettingsData?.icon_HGA_Url} alt="Logo de la institución" />
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
      </div>
      <div className="block lg:hidden">
        <p className="text-[#0d313f] text-lg font-normal font-['Poppins'] text-center max-w-4xl mb-12">
          {getTextToShow()}
          <Button 
            text={expandedText ? buttonLess?.buttonText : buttonMore?.buttonText}
            onClick={toggleText}
            className="ml-2 text-blue-500 underline bg-transparent p-0 border-0" 
          />
        </p>
      </div>
      <div className="hidden lg:block">
        <p className="text-[#0d313f] text-lg font-normal font-['Poppins'] text-center max-w-4xl mb-12">
          {fullText}   
        </p>
      </div>

      <h2 className="text-[#0d313f] text-[35px] font-normal font-['Poppins'] uppercase text-center mb-8">
        {Subtitle ? Subtitle.title_Text_Section : ""}
      </h2>

      <div className="overflow-x-auto flex space-x-16 max-w-full px-4 snap-x snap-mandatory">
        {volunteerData?.map((service: any, index: number) => (
          <div 
            key={index}  
            className="relative flex-shrink-0 w-[300px] h-[350px] bg-[#0d313f] rounded-[15px] overflow-hidden shadow-lg group snap-center">
            
            {/* Título del voluntariado */}
            <div className="p-2 bg-[#0d313f] text-center text-white font-bold text-lg">
              {service.title_Card_VT}
            </div>
            
            <img 
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" 
              src={service.image_Card_VT_Url} 
              alt={service.title_Card_VT} 
            />
            <div 
              className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg font-normal font-['Poppins']">
                {service.description_Card_VT.split('.')[0]}.
              </p>
             <Button text={buttonMore?.buttonText || ''} 
             onClick={() => {}} 
             className="mt-4 px-4 py-2 border border-white rounded-md text-white text-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerSection;