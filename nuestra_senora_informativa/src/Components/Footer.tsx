
import { useQuery } from 'react-query';
import useContact from "../Hooks/useContact";
import { getTitles } from '../Services/ServiceInformative';
import { iconMap } from '../Icons/IconsComponent';



const Footer = () => {
  const { data: contacts, isLoading: isLoadingContacts, isError: isErrorContacts } = useContact();
  const { data: title, isLoading: isLoadingTitle, isError: isErrorTitle } = useQuery(['title', 9], () => getTitles(9));


  if (isLoadingContacts || isLoadingTitle) return <div>Loading...</div>;
  if (isErrorContacts || isErrorTitle) return <div>Error fetching data.</div>;

  return (
    <div className="w-full h-auto bg-[#317591] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 text-white text-[20px] sm:text-[28px] font-normal font-'Poppins' uppercase">
        <p>{title ? title.title_Text_Section : "¿Deseas contactar con la institución?"}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        <div className="flex flex-col gap-6">
          {contacts.slice(0, 3).map((contact: any) => {
            const IconComponent = iconMap[contact.contact_title];
            return (
              <a
                key={contact.id_Contact}
                href={contact.contact_url || "#"}
                target={contact.contact_url ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 sm:gap-6 cursor-pointer transition-all duration-300 hover:text-[#cce7f3] hover:scale-105"
              >
                <IconComponent className="text-white text-2xl transition-all duration-300 hover:text-[#cce7f3] hover:scale-110" />
                <div className="text-white text-lg sm:text-xl font-normal font-'Poppins'">
                  {contact.contact_title}
                </div>
              </a>
            );
          })}
        </div>
        <div className="flex flex-col gap-6">
          {contacts.slice(3).map((contact: any) => {
            const IconComponent = iconMap[contact.contact_title];
            return (
              <a
                key={contact.id_Contact}
                href={contact.contact_url || "#"}
                target={contact.contact_url ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 sm:gap-6 cursor-pointer transition-all duration-300 hover:text-[#cce7f3] hover:scale-105"
              >
                <IconComponent className="text-white text-2xl transition-all duration-300 hover:text-[#cce7f3] hover:scale-110" />
                <div className="text-white text-lg sm:text-xl font-normal font-'Poppins'">
                  {contact.contact_title}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;


