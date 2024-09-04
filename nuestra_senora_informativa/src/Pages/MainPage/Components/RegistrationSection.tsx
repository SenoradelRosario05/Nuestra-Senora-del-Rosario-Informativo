
import useButtons from "../../../Hooks/useButtons";
import { useSiteSettings } from "../../../Hooks/useSiteSettings";
import useTitles from "../../../Hooks/useTitles";
import useNavbarRoutes from "../../../Routes/useExtractRoutes";
import useRegistration from "../Hooks/useRegistration";

export const RegistrationSection = () => {
  const { data: title } = useTitles(3);
  const { data: siteSettings } = useSiteSettings();
  const siteSettingsData = siteSettings ? siteSettings[0] : null;
  const { data: registrationData } = useRegistration();
  const registration = registrationData ? registrationData[0] : null;

  const { routes } = useNavbarRoutes();  
  const { data: button } = useButtons(5);

  

  return (
    <section className="min-h-screen flex flex-col items-center justify-center  px-4 sm:px-6 lg:px-6">
      
      <h2 className="text-center text-[#0d313f] text-[35px] font-normal font-'Poppins' mb-6">
        {title?.title_Text_Section}
      </h2>
      
      <div className="flex items-center justify-center my-6 w-full max-w-lg">
        <hr className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]" />
        {siteSettingsData?.icon_HGA_Url && (
          <img
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mx-4"
            src={siteSettingsData?.icon_HGA_Url}
            alt="Logo de la institución"
          />
        )}
        <hr className="w-1/4 sm:w-1/3 md:w-1/2 border-t-2 border-[#0d313f]" />
      </div>
      
     
        <p className="text-center max-w-4xl text-[#0d313f] text-xl font-normal font-'Poppins' mb-4">
          {title?.description_Section}
        </p>
    
      
      
        <h2 className="text-center max-w-4xl text-[#0d313f] text-[28px] font-normal font-'Poppins' mb-4">
          {registration?.registration_MoreInfoPrompt}
        </h2>
     
      
     
      <div className="relative z-10 mt-4 text-center">
        <button className="bg-[#dab87d] text-[#0d313f] text-[15px] sm:text-[25px] font-bold font-'Poppins' py-3 sm:py-4 px-6 sm:px-8 rounded-[20px] sm:rounded-[30px] shadow transition-all duration-300 hover:bg-[#c7a46d]">
          <a href={routes['Registro']}>{button?.buttonText || "Ver más información"}</a>
        </button>
      </div>
      <br />
      
      
        <p className="text-center max-w-4xl text-[#0d313f] text-xl font-normal font-'Poppins' mb-6">
          {registration?.registration_SupportMessage}
        </p>
     
     
        <img
          className="max-w-full h-auto"
          src={registration?.registrationImage_Url}
          alt="Imagen de registro"
        />
     
    </section>
  );
};

export default RegistrationSection;
