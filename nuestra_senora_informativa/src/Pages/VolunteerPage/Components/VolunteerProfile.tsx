import useCardsVolunteerProfile from '../Hooks/useCardsVolunteerProfile';
import IconsComponent from '../../../Icons/IconsComponent';
import useTitles from '../../../Hooks/useTitles';
import useButtons from '../../../Hooks/useButtons';
import { useSiteSettings } from '../../../Hooks/useSiteSettings';

const VolunteerProfile = () => {
  const { data: Cards } = useCardsVolunteerProfile();
  const { data: title } = useTitles (10);
  const { data: Subtitle } = useTitles (11);
  const { data: button } = useButtons(4);
  const { data: IconsDataArray } = useSiteSettings();
  const IconsDA = IconsDataArray ? IconsDataArray[0] : null;
  
  return (
    <div className="flex flex-col items-center pt-20 py-12 px-0 bg-white w-full">
      <h2 className="text-[#0d313f] text-[35px] font-semibold font-'Poppins' mb-4">{title?.title_Text_Section}</h2>
      <div className="flex items-center justify-center my-6 w-full max-w-lg">
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
        <img className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mx-4" src={IconsDA?.icon_HGA_Url} alt="Logo de la institución" />
        <div className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]"></div>
      </div>

      <p className="text-lg text-center text-black font-normal font-'Poppins' max-w-4xl mb-8">
{title?.description_Section}
  </p>

      <div className="bg-[#f3f3f3] w-full px-0 lg:px-12 py-12">
        <h3 className="text-center text-[#0d313f] text-[30px] font-semibold font-'Poppins' mb-8">{Subtitle?.title_Text_Section}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {Cards?.map((item: any) => (
            <div
              key={item.id_Volunteer_Profile}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-2xl"
            >
              <IconsComponent
                size={40}
                color="#0d315e"
                iconName={item.tittle_Volunteer_Profile.toLowerCase()}
              />
              <h4 className="text-[#000000] text-xl font-semibold mb-2">{item.tittle_Volunteer_Profile}</h4>
              <p className="text-[#000000] text-lg font-normal font-'Poppins'">
                {item.description_Volunteer_Profile}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a href="/formulario_voluntariado">
        <button className="bg-[#dab87d] text-[#0d313f] text-[18px] sm:text-[22px] font-bold font-'Poppins' py-3 sm:py-3 px-6 sm:px-6 rounded-[20px] sm:rounded-[30px] shadow-lg transition-all duration-300 hover:bg-[#c7a46d] hover:scale-105" type="button">
          {button?.buttonText}
        </button>
        </a>
      </div>
    </div>
  );
};

export default VolunteerProfile;