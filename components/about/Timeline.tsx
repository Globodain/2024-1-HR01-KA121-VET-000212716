import { Separator } from "../ui/separator";

export default function Timeline() {
  const milestones = [
    {
      year: "2009",
      title: "Lanzamiento de SoftCamp",
      description: "Creación de la primera versión del software para gestión de campings",
    },
    {
      year: "2015",
      title: "Expansión Nacional",
      description: "Alcanzamos presencia en más de 100 campings en toda España",
    },
    {
      year: "2020",
      title: "Renovación Tecnológica",
      description: "Implementación de nueva plataforma con funcionalidades avanzadas",
    },
    {
      year: "2023",
      title: "Internacionalización",
      description: "Expansión a Portugal, Francia e Italia con interfaces multilingües",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Nuestra Trayectoria</h2>
        <Separator className="w-24 h-1 mx-auto bg-blue-600 mb-12" />
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="min-w-[100px] text-xl font-bold">{milestone.year}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <Separator className="w-12 h-0.5 bg-blue-600 mb-3" />
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}