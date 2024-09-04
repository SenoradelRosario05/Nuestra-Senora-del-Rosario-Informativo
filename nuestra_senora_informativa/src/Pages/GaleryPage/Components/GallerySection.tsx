import { useState, useEffect } from 'react';
import useGalleryCategory from '../Hooks/useGalleryCategory';
import useGalery from '../../MainPage/Hooks/useGalery';
import useTitles from '../../../Hooks/useTitles';

const GallerySection = () => {
  const { data: categories, isError: isErrorCategories } = useGalleryCategory();
  const { data: galleryItems, isError: isErrorImages } = useGalery();
  const { data: title } = useTitles(12);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory(categories[0].id_GalleryCategory);
    }
  }, [categories]);

  if (isErrorCategories || isErrorImages) return <div className="text-center text-red-500">Error al cargar la galería.</div>;


  const filteredImages = selectedCategory
    ? galleryItems?.filter((item: any) => item.id_GalleryCategory === selectedCategory)
    : [];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto p-6 flex-grow">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages?.length > 0 ? (
            filteredImages?.map((image: any) => (
              <img
                key={image.id_GalleryItem}
                src={image.gallery_Image_Url}
                alt="Galería"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">{title?.description_Section}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;