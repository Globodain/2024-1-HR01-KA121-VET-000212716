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
            <div className="flex animate-marquee gap-24 items-center min-w-full">
              {partners.map((partner) => (
                <img
                  key={partner.name}
                  className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110 flex-shrink-0"
                  src={partner.logo}
                  alt={partner.name}
                />
              ))}
            </div>
            {/* Clone the first set immediately after for seamless loop */}
            <div 
              className="flex animate-marquee gap-24 items-center min-w-full"
              aria-hidden="true"
              style={{ animationDelay: '-15s' }} // Half of the animation duration
            >
              {partners.map((partner) => (
                <img
                  key={partner.name}
                  className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110 flex-shrink-0"
                  src={partner.logo}
                  alt={partner.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
