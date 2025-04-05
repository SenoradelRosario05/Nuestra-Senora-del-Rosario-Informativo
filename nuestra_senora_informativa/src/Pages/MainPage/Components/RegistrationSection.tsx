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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-6 py-16">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={registration?.registrationImage_Url}
          alt="Imagen de fondo"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 p-8 rounded-lg  max-w-4xl text-center">
        
        {/* Title Section */}
        <h2 className="text-white text-[35px] font-normal font-'Poppins' mb-6">
          {title?.title_Text_Section}
        </h2>
        
        {/* Decorative Line with Icon */}
        <div className="flex items-center justify-center my-6 w-full">
          <div className="flex-grow border-t-2 border-white"></div>
          <img className="mx-4 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]" loading='lazy'
           src={siteSettingsData?.icon_HGA_Url} alt="Logo de la institución" />
          <div className="flex-grow border-t-2 border-white"></div>
        </div>
        
        {/* Description */}
        <p className="text-white text-lg font-light font-'Poppins' mb-8">
          {title?.description_Section}
        </p>

        {/* Call to Action */}
        <h2 className="text-white text-[28px] font-normal font-'Poppins' mb-6">
          {registration?.registration_MoreInfoPrompt}
        </h2>

        {/* Button */}
        <div className="mt-4">
          <a href={routes['Proceso de ingreso']}>
            <button className="bg-[#dab87d] text-[#0d313f] text-[18px] sm:text-[22px] font-bold font-'Poppins' py-3 sm:py-4 px-8 sm:px-10 rounded-[20px] sm:rounded-[30px] shadow-lg transition-all duration-300 hover:bg-[#c7a46d] hover:scale-105">
              {button?.buttonText || "Ver más información"}
            </button>
          </a>
        </div>

        {/* Support Message */}
        <p className="text-white text-lg font-light font-'Poppins' mt-6">
          {registration?.registration_SupportMessage}
        </p>
      </div>
    </section>
  );
};

export default RegistrationSection;