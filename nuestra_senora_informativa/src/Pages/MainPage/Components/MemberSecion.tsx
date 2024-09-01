import useMember from "../Hooks/useMember";

const MemberSection = () => {

  const {data: sectionData, isError} = useMember();
  const memberSectionData = sectionData ? sectionData[0] : null;

  if (isError) return <p>Error al cargar los datos</p>;
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-6 py-12">
      <div className="flex flex-col lg:flex-row lg:items-center max-w-7xl mx-auto space-y-12 lg:space-y-0 lg:space-x-20">
        <img
          src={memberSectionData?.image_AS_Url}
          alt="Custom"
          className="w-90 h-80 object-cover rounded-tl-3xl rounded-br-3xl"
        />

        <div className="flex-1 lg:max-w-xl">
          <h2 className="text-[#0d313f] text-4xl font-bold font-'Poppins' mt-4 mb-6">
            {memberSectionData?.questionTitle_AS}
          </h2>
          <p className="text-[#0d313f] text-lg font-normal font-'Poppins' text-center max-w-4xl mb-12 text-justify">
            {memberSectionData?.description_AS}
          </p>
          <p className="text-[#0d313f] text-lg font-normal font-'Poppins' text-center max-w-4xl text-justify">
            {memberSectionData ?.contactText_AS}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberSection;