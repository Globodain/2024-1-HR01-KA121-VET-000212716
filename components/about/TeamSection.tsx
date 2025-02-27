import { Separator } from "../ui/separator";

export default function TeamSection() {
  const team = [
    {
      name: "Josip Ćerlek",
      role: "Fundador y CEO",
      image: "/team/josip.jpg",
      description: "Experto en Gestión de Campings"
    },
    {
      name: "Manuel Radaljac",
      role: "Director de Operaciones",
      url: "https://manuelradaljac.com",
      image: "/team/manuel.jpg",
      description: "Especialista en Atención al Cliente"
    },
    {
      name: "Emil Fak",
      role: "Director de Tecnología",
      image: "/team/emil.jpg",
      description: "Ingeniero de Software Senior"
    },
    {
      name: "Miro Mužik",
      role: "Director de Desarrollo",
      image: "/team/miro.jpg",
      description: "Arquitecto de Software"
    },
    {
      name: "Marin Šuman",
      role: "Director de Marketing",
      image: "/team/marin.jpg",
      description: "Estratega Digital"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Nuestro Equipo</h2>
        <Separator className="w-24 h-1 mx-auto bg-blue-600 mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <div key={index} className="text-center mb-8 lg:mb-0">
              <div className="w-36 h-36 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600 font-medium">{member.role}</p>
              {member.url && (
                <a href={member.url} className="text-blue-600 hover:underline text-sm">{member.url}</a>
              )}
              <Separator className="w-12 h-0.5 mx-auto bg-blue-600 my-2" />
              <p className="text-gray-500 text-sm mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}