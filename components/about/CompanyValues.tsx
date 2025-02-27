import { Separator } from "../ui/separator";
import { FaLaptopCode } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";
import { IoFlashSharp } from "react-icons/io5";

export default function CompanyValues() {
  const values = [
    {
      title: "Soluciones Prácticas",
      description: "Software centrado en las necesidades reales de los campings pequeños y medianos",
      icon: FaLaptopCode,
    },
    {
      title: "Soporte Experto",
      description: "Asistencia personalizada por profesionales con experiencia en el sector",
      icon: MdSupportAgent,
    },
    {
      title: "Facilidad de Uso",
      description: "Interfaz intuitiva que requiere mínima formación para su implementación",
      icon: FaBullseye,
    },
    {
      title: "Tecnología Moderna",
      description: "Plataforma actualizada continuamente con las últimas innovaciones del mercado",
      icon: IoFlashSharp,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Nuestros Valores</h2>
        <Separator className="w-24 h-1 mx-auto bg-blue-600 mb-12" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">
                <value.icon className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <Separator className="w-12 h-0.5 bg-blue-600 mb-3" />
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}