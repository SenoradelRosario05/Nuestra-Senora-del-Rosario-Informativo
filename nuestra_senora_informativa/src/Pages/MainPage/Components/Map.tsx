import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import useTitles from "../../../Hooks/useTitles";

// Importa el ícono de marcador manualmente
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Crear un nuevo icono para Leaflet
const customIcon = new Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // Tamaño estándar del icono
  iconAnchor: [12, 41], // Punto de anclaje
  popupAnchor: [1, -34], // Ajusta la posición del popup
  shadowSize: [41, 41],
});

const Map = () => {
  const position: LatLngTuple = [10.25669, -85.590225];
  const { data: title, isError } = useTitles(8);

  return (
    <>
      {isError && <div>Error fetching data.</div>}
      <div
        className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 mt-16 relative"
        style={{ zIndex: 1 }}
      >
        <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-'Poppins' uppercase text-center">
          {title ? title.title_Text_Section : ""}
        </h2>
        <div className="w-full h-[400px] max-w-6xl mt-8">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
            style={{ zIndex: 0 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>Hogar de Ancianos Nuestra Señora del Rosario</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Map;
