const partners = [
  {
    name: "Agoda",
    logo: "https://cdn-static.globodain.com/softcamp/website/collaborations/agoda"
  },
  {
    name: "Airbnb",
    logo: "https://cdn-static.globodain.com/softcamp/website/collaborations/airbnb"
  },
  {
    name: "Atrapalo",
    logo: "https://cdn-static.globodain.com/softcamp/website/collaborations/atrapalo"
  },
  {
    name: "Hotels",
    logo: "https://cdn-static.globodain.com/softcamp/website/collaborations/hotels"
  },
  {
    name: "Booking",
    logo: "https://cdn-static.globodain.com/softcamp/website/collaborations/booking"
  },
  {
    name: "Travelperk",
    logo: "https://cdn-static.globodain.com/softcamp/website/collaborations/travelperk"
  }
];

export default function Marquee() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="relative w-full max-w-[1800px] mx-auto overflow-hidden">
          <div className="flex">
            {/* First set of logos */}
            <div className="flex animate-marquee">
              {partners.map((partner) => (
                <div key={partner.name} className="w-[200px] flex items-center justify-center mx-2">
                  <img
                    className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
                    src={partner.logo}
                    alt={partner.name}
                  />
                </div>
              ))}
            </div>
            {/* Clone set */}
            <div className="flex animate-marquee">
              {partners.map((partner) => (
                <div key={partner.name} className="w-[200px] flex items-center justify-center mx-4">
                  <img
                    className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
                    src={partner.logo}
                    alt={partner.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
