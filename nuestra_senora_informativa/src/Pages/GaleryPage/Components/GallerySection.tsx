import { useState, useEffect } from "react";
import useGalleryCategory from "../Hooks/useGalleryCategory";
import useGalery from "../../MainPage/Hooks/useGalery";
import useTitles from "../../../Hooks/useTitles";
import { FaImages } from "react-icons/fa";
import { useSiteSettings } from "../../../Hooks/useSiteSettings";

const GallerySection = () => {
  const { data: categories, isError: isErrorCategories } = useGalleryCategory();
  const { data: galleryItems, isError: isErrorImages } = useGalery();
  const { data: title } = useTitles(12);
    const { data: siteSettings } = useSiteSettings();
    const siteSettingsData = siteSettings ? siteSettings[0] : null;

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Mapeo de nombres de categorías a íconos
  // Ajusta este objeto según los nombres de categoría de tu backend.
  const categoryIcons: Record<string, JSX.Element> = {
    "default": <FaImages className="inline-block mr-1" />
  };

  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory(categories[0].id_GalleryCategory);
    }
  }, [categories]);

  if (isErrorCategories || isErrorImages) {
    return <div className="text-center text-red-500">Error al cargar la galería.</div>;
  }

  const filteredImages = selectedCategory
    ? galleryItems?.filter((item: any) => item.id_GalleryCategory === selectedCategory)
    : [];

  const handleCloseModal = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      setSelectedImage(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenedor principal con margen superior */}
      <div className="max-w-7xl mx-auto p-6 mt-20 flex-grow">
        {/* Título estático "Galería" */}
        <div className="text-center items-center mb-6">
        <h2 className="text-[#0d313f] text-[28px] sm:text-3xl font-normal font-Poppins uppercase text-center">
        Galería
      </h2>
     {/* Contenedor para centrar en la página */}
<div className="flex flex-col items-center mx-auto my-6 w-full max-w-lg">
  {/* Fila interna con flex-grow para las líneas e ícono en el centro */}
  <div className="flex items-center justify-center w-full gap-4">
    <div className="flex-grow border-t-2 border-[#0d313f]" />
    <img
      className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
      src={siteSettingsData?.icon_HGA_Url}
      alt="Logo de la institución"
    />
    <div className="flex-grow border-t-2 border-[#0d313f]" />
  </div>
</div>

        </div>

        <div
  className="
    mb-6
    grid
    grid-cols-2
    gap-3
    justify-items-center

    /* A partir de sm (640px) se activan estas clases */
    sm:flex
    sm:flex-wrap
    sm:justify-center
    sm:gap-3
  "
>
  {categories?.map((category: any) => {
    const icon = 
      categoryIcons[category.name_Gallery_Category] ?? categoryIcons["default"];

    return (
      <button
        key={category.id_GalleryCategory}
        className={`
          px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 
          ${
            selectedCategory === category.id_GalleryCategory
              ? "bg-[#317591] text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        onClick={() => setSelectedCategory(category.id_GalleryCategory)}
      >
        {icon}
        {category.name_Gallery_Category}
      </button>
    );
  })}
</div>


        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-opacity duration-500 ease-in-out">
          {filteredImages?.length > 0 ? (
            filteredImages.map((image: any) => (
              <img
                key={image.id_GalleryItem}
                src={image.gallery_Image_Url}
                alt="Galería"
                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
                loading="lazy"
                onClick={() => setSelectedImage(image.gallery_Image_Url)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              {title?.description_Section || "No hay imágenes disponibles en esta categoría."}
            </p>
          )}
        </div>
      </div>

      {/* Modal para zoom */}
      {selectedImage && (
        <div
          id="modal-overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl w-full bg-transparent rounded-lg shadow-lg p-4">
            <div className="flex justify-center items-center py-6">
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-[75vh] object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
