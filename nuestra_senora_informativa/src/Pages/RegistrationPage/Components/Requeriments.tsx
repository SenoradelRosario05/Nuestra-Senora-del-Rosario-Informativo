import useButtons from "../../../Hooks/useButtons";
import { useSiteSettings } from "../../../Hooks/useSiteSettings";
import useTitles from "../../../Hooks/useTitles";
import IconsComponent from "../../../Icons/IconsComponent";
import useImportantInformation from "../Hooks/useImportantInformation";
import useRegistration from "../Hooks/useRegistration";

const Requeriments = () => {
  const { data: requirements, isError: isErrorRequirements } = useRegistration();
  const { data: importantInformation, isError: isErrorImportant } = useImportantInformation();
  const { data: siteSettings } = useSiteSettings();
  const siteSettingsData = siteSettings ? siteSettings[0] : null;
  const { data: title } = useTitles(13);
  const { data: Subtitle } = useTitles(14);
  const { data: SubtitleInformation } = useTitles(14);
  const { data: button } = useButtons(2);

  if (isErrorRequirements || isErrorImportant) {
    return <div>Error al cargar los datos.</div>;
  }

  return (
    <>
      <div className="h-auto bg-white p-10">
        <div className="flex justify-center">
          <h1 className="text-center text-[#0d313f] text-[35px] font-normal uppercase mb-8">
           {title?.title_Text_Section}
          </h1>
        </div>

        <div className="flex justify-center items-center mb-8">
          <div className="border-t-2 border-[#0d313f] w-1/3"></div>
          <img className="w-10 h-[40px] mx-4" src={siteSettingsData?.icon_HGA_Url} alt="Logo" />
          <div className="border-t-2 border-[#0d313f] w-1/3"></div>
        </div>

        <p className="text-[#0d313f] text-lg mb-10 text-center">
          {title?.description_Section}
        </p>

        <h2 className="text-[#0d313f] text-[35px] font-normal uppercase mb-6 text-center">
          {Subtitle?.title_Text_Section}
        </h2>

        <ul className="list-none space-y-4 text-center">
          {requirements?.map((req: any) => (
            <li key={req.id_AdministrativeRequirement} className="text-[#0d313f] text-lg font-normal flex items-center gap-4 justify-center">
             <IconsComponent size={24} color="#0d313f" iconName="check" />
              <span className="max-w-3xl text-justify">{req.description_AR}</span>
            </li>
          ))}
        </ul>

        {/* Sección de Información Importante */}
        <h2 className="text-[#0d313f] text-[35px] font-normal uppercase mb-6 text-center mt-10">
         {SubtitleInformation?.title_Text_Section}
        </h2>

        <ul className="list-none space-y-4 text-center">
          {importantInformation?.map((info: any) => (
            <li key={info.id_ImportantInformation} className="text-[#0d313f] text-lg font-normal flex items-center gap-4 justify-center">
              <IconsComponent size={24} color="#0d313f" iconName="check" />
              <span className="max-w-3xl text-justify">{info.description_ImportantInformation}</span>
            </li>
          ))}
        </ul>

        {/* Botón para realizar la solicitud */}
        <div className="flex justify-center mt-10">
          <a href="/solicitud-formulario">
            <button className="bg-[#dab87d] text-[#0d313f] text-[18px] sm:text-[22px] font-bold font-'Poppins' py-3 sm:py-4 px-8 sm:px-10 rounded-[20px] sm:rounded-[30px] shadow-lg transition-all duration-300 hover:bg-[#c7a46d] hover:scale-105">
             {button?.buttonText}
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Requeriments;
