import CityInfoMain from "./ui/CityInfoMain";

const MainInfoContainer = () => {
  const sampleData = [
    {
      temperature: 25,
      weatherUnit: "celsius",
      weather: "Cloudy",
      highTemperature: 30,
      lowTemperature: 20,
      name: "Toronto",
      country: "Canada",
    }
  ];

  return (
    <div className="flex items-center p-4 shadow-lg w-full h-full m-5 rounded-3xl bg-[#add8e6]">
      <CityInfoMain data={sampleData} />
    </div>
  );
};

export default MainInfoContainer;