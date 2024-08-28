import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useQuery } from 'react-query';
import { getTitles } from '../../../Services/ServiceInformative';

const Map = () => {
  const position: LatLngTuple = [10.256690, -85.590225];
  const { data: title, isLoading: isLoadingTitle, isError: isErrorTitle } = useQuery(['title', 8], () => getTitles(8));

  return (
    <>
      {isLoadingTitle && <div>Loading...</div> || isErrorTitle && <div>Error fetching data.</div>}
      <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 mt-16"> {/* Agregué margen superior */}
        <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-'Poppins' uppercase text-center">
          {title ? title.title_Text_Section : ""}
        </h2>
        <div className="w-full h-[400px] max-w-6xl mt-8">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Hogar de Ancianos Nuestra Señora del Rosario
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Map;