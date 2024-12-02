import { useState, useEffect } from 'react';
import useGalleryCategory from '../Hooks/useGalleryCategory';
import useGalery from '../../MainPage/Hooks/useGalery';
import useTitles from '../../../Hooks/useTitles';

const GallerySection = () => {
  const { data: categories, isError: isErrorCategories } = useGalleryCategory();
  const { data: galleryItems, isError: isErrorImages } = useGalery();
  const { data: title } = useTitles(12);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    if ((e.target as HTMLElement).id === 'modal-overlay') {
      setSelectedImage(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenedor principal con margen superior */}
      <div className="max-w-7xl mx-auto p-6 mt-20 flex-grow"> 
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold">{title?.title_Text_Section}</h2>
          <div className="mt-4">
            <select
              className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedCategory ?? ''}
              onChange={(e) => setSelectedCategory(Number(e.target.value))}
            >
              {categories?.map((category: any) => (
                <option key={category.id_GalleryCategory} value={category.id_GalleryCategory}>
                  {category.name_Gallery_Category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages?.length > 0 ? (
            filteredImages?.map((image: any) => (
              <img
                key={image.id_GalleryItem}
                src={image.gallery_Image_Url}
                alt="Galería"
                className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer"
                loading="lazy"
                onClick={() => setSelectedImage(image.gallery_Image_Url)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              {title?.description_Section}
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
