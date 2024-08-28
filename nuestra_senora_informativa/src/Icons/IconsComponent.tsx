import { FaBinoculars, FaEnvelope, FaFacebookF, FaInfoCircle, FaLightbulb, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface IconsComponentProps {
    size: number;
    color: string;
    iconName: string;
}

const IconMap: { [key: string]: IconType } = {
  vision: FaBinoculars,
  mission: FaLightbulb,
  contact: FaPhoneAlt,
  email: FaEnvelope,
  location: FaMapMarkerAlt,
  networks: FaFacebookF, 
  about: FaInfoCircle,
};


const IconsComponent: React.FC<IconsComponentProps> = ({ size, color, iconName }) => {
  const Icon = IconMap[iconName.toLowerCase()]; // Mapea iconName a su ícono correspondiente

  if (!Icon) {
    return <span>Icono no encontrado</span>; // Muestra un mensaje si el ícono no existe en IconMap
  }

  return <Icon size={size} color={color} />;
};

export default IconsComponent;
