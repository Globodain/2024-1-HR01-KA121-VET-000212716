interface Metric {
  value: string;
  label: string;
}

interface Testimonial {
  clientName: string;
  position: string;
  company: string;
  avatarUrl: string;
  rating: number;
  content: string;
  metrics: Metric[];
}

const testimonials: Testimonial[] = [
  {
    clientName: "Juan Pérez",
    position: "Director General",
    company: "Camping La Playa",
    avatarUrl: "/avatar/avatar1.jpg",
    rating: 5.0,
    content: "SoftCamp ha revolucionado completamente la forma en que gestionamos nuestro camping. La automatización de reservas y la integración con múltiples canales de venta nos ha permitido aumentar nuestras ventas en un 200%. El soporte técnico es excepcional y siempre están disponibles para ayudarnos.",
    metrics: [
      { value: "+127%", label: "Incremento en reservas" },
      { value: "-4h", label: "Tiempo ahorrado/día" }
    ]
  },
  {
    clientName: "María García",
    position: "Propietaria",
    company: "Camping El Bosque",
    avatarUrl: "/avatar/avatar2.jpg",
    rating: 4.5,
    content: "Después de probar varios sistemas de gestión, SoftCamp es sin duda el más completo y fácil de usar. La posibilidad de gestionar todo desde el móvil y la integración con el control de accesos ha simplificado enormemente nuestras operaciones diarias. El ROI fue positivo en el primer mes.",
    metrics: [
      { value: "+85%", label: "Satisfacción cliente" },
      { value: "+43%", label: "Ingresos online" }
    ]
  },
  {
    clientName: "Carlos López",
    position: "Gerente",
    company: "Camping Las Montañas",
    avatarUrl: "/avatar/avatar3.jpg",
    rating: 5.0,
    content: "La implementación de SoftCamp fue un punto de inflexión para nuestro negocio. El sistema de housekeeping y la gestión de personal han mejorado nuestra eficiencia operativa. Los informes automáticos y el panel de control nos dan una visión clara del negocio que antes no teníamos.",
    metrics: [
      { value: "-35%", label: "Costes operativos" },
      { value: "+92%", label: "Eficiencia" }
    ]
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? 'text-yellow-400'
              : star - 0.5 <= rating
              ? 'text-yellow-400'
              : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-gray-800 font-semibold">{rating.toFixed(1)}</span>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experiencias reales de nuestros clientes</h2>
          <p className="text-xl text-gray-600">Descubre por qué más de 500 campings confían en nosotros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg transform transition duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.clientName}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.clientName}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>

              <div className="flex-grow mb-6">
                <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-around">
                  {testimonial.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <span className="block text-xl font-bold text-gray-800">{metric.value}</span>
                      <span className="text-sm text-gray-600">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
