interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  type: string;
  title: string;
  imageUrl: string;
  metrics: Metric[];
  description: string;
  features: string[];
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    type: "Camping Costero",
    title: "Camping La Playa",
    imageUrl: "https://www.campinglasdunas.com/wp-content/uploads/2023/04/Las-Dunas-camping-costa-brava-playa-cap-de-creus-2.jpg",
    metrics: [
      { value: "+50%", label: "Reservas" },
      { value: "-30%", label: "Costes" },
      { value: "+75%", label: "Satisfacción" }
    ],
    description: "Descubre cómo este camping costero transformó su gestión digital, aumentando sus reservas y mejorando la satisfacción de sus clientes mediante la automatización de procesos.",
    features: ["Channel Manager", "Motor de Reservas", "Control de Accesos"],
    link: "/case-studies/camping-la-playa.html"
  },
  {
    type: "Camping Rural",
    title: "Camping El Bosque",
    imageUrl: "https://campingurbion.com/wp-content/uploads/2024/05/bungalow-el-bosque.webp",
    metrics: [
      { value: "+85%", label: "Eficiencia" },
      { value: "-4h", label: "Tiempo/día" },
      { value: "+120%", label: "Ingresos" }
    ],
    description: "Explora cómo este camping rural modernizó sus operaciones, optimizó la gestión del personal y aumentó significativamente sus ingresos anuales.",
    features: ["Housekeeping", "Gestión de Personal", "Informes Avanzados"],
    link: "/case-studies/camping-el-bosque.html"
  }
];

export default function CaseStudies() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Casos de Éxito</h2>
          <p className="text-xl text-gray-600">Descubre cómo otros negocios han transformado su operativa con SoftCamp</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-40">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60">
                  <div className="p-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">{study.type}</span>
                  </div>
                </div>
                <img src={study.imageUrl} alt={study.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-5 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">{study.title}</h3>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="grid grid-cols-3 gap-2">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <span className="block text-xl font-bold text-gray-800">{metric.value}</span>
                        <span className="text-xs text-gray-600">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">{study.description}</p>

                <div className="flex flex-wrap gap-2">
                  {study.features.map((feature, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    className="text-center px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary-dark transition duration-300"
                  >
                    Ver Más
                  </button>
                  <a
                    href={study.link}
                    className="text-center px-4 py-2 border border-primary text-primary text-sm rounded-lg hover:bg-primary hover:text-white transition duration-300"
                  >
                    Caso Completo <span className="inline-block ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/case-studies"
            className="inline-flex items-center px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300"
          >
            Ver Más Casos de Éxito
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}