
import { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import useTitles from "../../../Hooks/useTitles";

const PigeonMap = () => {
  // Latitud/Longitud
  const position: [number, number] = [10.25669, -85.590225];

  // Estado para controlar la visibilidad del Overlay
  const [showOverlay, setShowOverlay] = useState(false);

  // Hooks para título
  const { data: title, isError } = useTitles(8);

  // Maneja el clic en el marcador (alternar Overlay)
  const handleMarkerClick = () => {
    setShowOverlay((prev) => !prev);
  };


  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 mt-16 relative">
      {isError && <div>Error fetching data.</div>}

      <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-Poppins    text-center">
        {title ? title.title_Text_Section : "Ubicación"}
      </h2>

      {/* Contenedor para el mapa */}
      <div className="w-full h-[400px] max-w-6xl mt-8">
        <Map
          defaultCenter={position}
          defaultZoom={13}
          metaWheelZoom={false}
          height={400}
        >
          {/* Marcador con onClick para mostrar/ocultar la tarjeta */}
          <Marker
            width={50}
            anchor={position}
            onClick={handleMarkerClick}
          />

          {/* Overlay que aparece sólo si showOverlay es true */}
          {showOverlay && (
            <Overlay anchor={position} offset={[15, 30]}>
              <div className="bg-white p-2 rounded-md shadow-md">
                <p className="text-[#0d313f] text-sm font-semibold">
                  Hogar de Ancianos Nuestra Señora del Rosario
                </p>
                <p className="text-[#0d313f] text-xs">
                  Santa Cruz, Guanacaste
                </p>
              </div>
            </Overlay>
          )}
        </Map>

      </div>
    </div>
  );
};


export default PigeonMap;

