
import Marquee from 'react-fast-marquee';
import useGalery from '../Hooks/useGalery';
import useTitles from '../../../Hooks/useTitles';
import { useSiteSettings } from '../../../Hooks/useSiteSettings';
import useButtons from '../../../Hooks/useButtons';
import useNavbarItemsId from '../../../Hooks/useNavbarItemsId';
import { GalleryImage } from '../../../Types/informativeType';

const GalerySection = () => {
  const { data: galleryImages, isError } = useGalery();
  const { data: siteSettings } = useSiteSettings();
  const siteSettingsData = siteSettings ? siteSettings[0] : null;
  const { data: title } = useTitles(7);
  const { data: button } = useButtons(1);
  const { data: navbarItems } = useNavbarItemsId(8);

  if (isError) return <p>Error al cargar los datos</p>;

  // Validar si galleryImages es un arreglo y obtener las primeras 10 imágenes
  const imagesToDisplay = Array.isArray(galleryImages) ? galleryImages.slice(0, 10) : [];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center mb-6">
        <img
          className="opacity-80 w-[60px] h-[60px] rounded-full mr-4"
          src={siteSettingsData?.icon_HGA_Url}
          alt="Icon"
        />
        <h2 className="text-[#0d313f] text-[28px] sm:text-[35px] font-normal font-'Poppins' uppercase text-center">
          {title?.title_Text_Section}
        </h2>
      </div>
      <p className="text-[#0d313f] text-lg font-normal font-'Poppins' text-center max-w-4xl mb-12">
        {title?.description_Section}
      </p>

      <div className="relative overflow-hidden w-full max-w-full sm:max-w-5xl lg:max-w-6xl mt-12">
        <Marquee 
          gradient={false} 
          speed={40} 
          pauseOnHover={false} 
          loop={0}
          delay={0}
        >
          {/* Primera serie de imágenes */}
          {imagesToDisplay.map((image: GalleryImage, index: number) => (
            <img
              key={`original-${index}`}
              className="gallery-item w-[200px] sm:w-[250px] lg:w-[325px] h-[150px] sm:h-[180px] lg:h-[200px] mx-2"
              src={image?.gallery_Image_Url}
              alt={`Galería del Hogar - Imagen ${index + 1}`}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/325x200?text=Imagen+no+disponible';
              }}
            />
          ))}
          
          {/* Duplicar imágenes para asegurar continuidad */}
          {imagesToDisplay.map((image: GalleryImage, index: number) => (
            <img
              key={`duplicate-${index}`}
              className="gallery-item w-[200px] sm:w-[250px] lg:w-[325px] h-[150px] sm:h-[180px] lg:h-[200px] mx-2"
              src={image?.gallery_Image_Url}
              alt={`Galería del Hogar - Imagen ${index + 1}`}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/325x200?text=Imagen+no+disponible';
              }}
            />
          ))}
        </Marquee>
      </div>

      <div className="mt-12">
        <a href={navbarItems?.urlNav}>
          <button className="bg-[#dab87d] text-[#0d313f] text-[20px] sm:text-[25px] font-bold font-'Poppins' py-3 sm:py-4 px-6 sm:px-8 rounded-[20px] sm:rounded-[30px] shadow transition-all duration-300 hover:bg-[#c7a46d]">
            {button?.buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default GalerySection;
