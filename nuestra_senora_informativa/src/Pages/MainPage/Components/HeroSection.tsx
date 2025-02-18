
import { useQuery } from "react-query";
import {
  getHeroSection,
  getTitles,
} from "../../../Services/ServiceInformative";
import useNavbarItemsId from "../../../Hooks/useNavbarItemsId";
import useHandleScroll from "../../../Hooks/useHandleScroll";
import { LoadingSpinner } from "../../../Components";

const HeroSection = () => {
  const { data: TitleSection, isLoading: isTitleLoading } = useQuery(
    ["title", 1],
    () => getTitles(1)
  );
  const { data: HeroSection, isLoading: isHeroLoading } = useQuery(
    "hero",
    getHeroSection
  );
  const { data: navbarItems } = useNavbarItemsId(2);
  const { handleScroll } = useHandleScroll();

  if (isTitleLoading || isHeroLoading) return <LoadingSpinner/>;

  const heroDataArray = HeroSection ? HeroSection[0] : null;
  if (!TitleSection || !heroDataArray) return null;

  return (
    <div className="relative w-full h-screen">
      <img
        className="w-full h-full object-cover object-center"
        src={`${heroDataArray?.heroImage_Url}.avif`} 
        alt="Hero Image"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
        <div className="text-center text-white text-5xl font-bold font-'Poppins' mb-6">
          <h1>
            {heroDataArray?.hero_Title ||
              "Hogar de Ancianos Nuestra Señora del Rosario"}
          </h1>
        </div>
        <div className="text-center text-white text-2xl font-medium font-'Poppins' mb-12">
          <p>{heroDataArray?.subtitle_Hero}</p>
        </div>
        <a href={navbarItems?.urlNav}>
          <button
            onClick={(event: any) => {
              handleScroll(event, navbarItems?.urlNav);
            }}
            className="bg-gray-100 bg-opacity-20 text-white text-[16px] sm:text-[20px] font-bold font-'Poppins' py-2 sm:py-3 px-4 sm:px-6 rounded-[10px] sm:rounded-[15px] shadow transition-all duration-300 hover:bg-white hover:text-[#0d313f]"
          >
            {TitleSection?.title_Text_Section || "Sobre Nosotros"}
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;