import { FaBinoculars, FaEnvelope, FaFacebookF, FaInfoCircle, FaLightbulb, FaMapMarkerAlt, FaPhoneAlt, FaHandHoldingHeart, FaUserFriends, FaComments, FaHandsHelping, FaHandshake, FaUsers } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface IconsComponentProps {
    size: number;
    color: string;
    iconName: string;
}

export const iconMap: { [key: string]: IconType } = {
  "vision": FaBinoculars,
  "mission": FaLightbulb,
  "Hogar de Nuestra Señora del Rosario, Santa Cruz, Gte": FaFacebookF,
  "hogar.nsrosario@yahoo.es": FaEnvelope,
  "+(506) 2680 0591": FaPhoneAlt,
  "Santa Cruz, Guanacaste, Costa Rica": FaMapMarkerAlt,
  "Citas ó visitas a nuestras instalaciones en el horario de lunes a sábados de 8:30 a.m. a 11:00 a.m. y de 1:00 p.m. a 3:30 p.m.": FaInfoCircle,
  "compromiso": FaHandHoldingHeart,
  "respeto": FaUserFriends,
  "comunicación": FaComments,
  "orientación al servicio": FaHandsHelping,
  "desarrollo de relaciones": FaHandshake,
  "trabajo en equipo": FaUsers
};

const IconsComponent: React.FC<IconsComponentProps> = ({ size, color, iconName }) => {
  const Icon = iconMap[iconName.toLowerCase()]; // Mapea iconName a su ícono correspondiente

  if (!Icon) {
    return <span>Icono no encontrado</span>; // Muestra un mensaje si el ícono no existe en IconMap
  }

  return <Icon size={size} color={color} />;
};

export default IconsComponent;