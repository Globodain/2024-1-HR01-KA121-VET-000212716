import { 
  MdDashboard, 
  MdPayments, 
  MdMessage, 
  MdReceiptLong,
  MdCheck,
  MdBackup,
  MdBarChart,
  MdWebAsset
} from 'react-icons/md';

export default function Features() {
  const features = [
    {
      icon: <MdDashboard className="w-8 h-8 text-primary" />,
      title: "ERP",
      description: "Gestión del negocio integral en una única plataforma."
    },
    {
      icon: <MdPayments className="w-8 h-8 text-primary" />,
      title: "Pagos seguros",
      description: "Pasarela de pagos para realizar cobros digitales sólo al 3.5%."
    },
    {
      icon: <MdMessage className="w-8 h-8 text-primary" />,
      title: "Mensajes directos",
      description: "Recibe comunicaciones de tus clientes sin servicios de terceros."
    },
    {
      icon: <MdReceiptLong className="w-8 h-8 text-primary" />,
      title: "Auto-cobro",
      description: "Establece límites para cobrar automáticamente a tus clientes."
    },
    {
      icon: <MdCheck className="w-8 h-8 text-primary" />,
      title: "Canales digitales",
      description: "Despliega todos tus alojamientos en +400 canales de venta."
    },
    {
      icon: <MdBackup className="w-8 h-8 text-primary" />,
      title: "Backups",
      description: "Todos tus datos guardados bajo políticas de acceso seguras."
    },
    {
      icon: <MdBarChart className="w-8 h-8 text-primary" />,
      title: "Reportes personalizados",
      description: "Generar reportes automatizados bajo las premisas indicadas."
    },
    {
      icon: <MdWebAsset className="w-8 h-8 text-primary" />,
      title: "Website & Motor de reservas",
      description: "Crea tu propia website con motor de reservas integrado."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nunca había sido tan fácil
          </h2>
          <p className="text-xl text-gray-600">
            Automatiza los procesos repetitivos de tu negocio en un <i>plis plas</i>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
