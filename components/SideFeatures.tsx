import { Separator } from "./ui/separator";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
}

const features: Feature[] = [
  {
    title: "Crea tu cuenta y configúrala",
    description: `Se creará simultáneamente la cuenta de usuario y negocio, siendo la primera ligada a ésta última.

    Puedes configurar la cuenta para adaptar la gestión a tu forma de dirigir el negocio: temporadas, alojamientos, fechas de cierre, operativa, definición de servicios y características...

    Una vez activada la cuenta podrás importar los datos de tu anterior negocio haciendo uso de la herramienta que ofrecemos para adaptarlo.`,
    imageUrl: "https://cdn-static.globodain.com/softcamp/website/landing/2025/feb/sec-1.svg",
    imageAlt: "Section 1 Image"
  },
  {
    title: "Define tus roles de usuario",
    description: `Crea un usuario por cada compañero de trabajo. Esto permitirá identificar las tareas y acciones realizadas por cada trabajador o asociar dinero a la caja de recepción (crea el rol de recepcionista y asócialo a un usuario).

    La creación de roles es una buena decisión si quieres limitar las capacidades de cada usuario - cómo la visibilidad a contenido financiero - y optimizar el trabajo en equipo. Limitarás también el rango de acción de dicho usuario, reduciendo de ésta forma la probabilidad de cometer errores.`,
    imageUrl: "https://cdn-static.globodain.com/softcamp/website/landing/2025/feb/sec-2.svg",
    imageAlt: "Section 2 Image",
    reversed: true
  },
  {
    title: "Comienza a gestionar tus reservas",
    description: `Una vez configurado todo el panel del negocio y dado de alta los alojamientos, podrás comenzar a operar.

    Para obtener una experiencia totalmente completa, te recomendamos activar OneWay e instalar las integraciones necesarias para aumentar tus ventas en un +200% y desplegar todos tus alojamientos en los canales de venta.

    Tienes a tu diposición un marketplace con una amplia gama de módulos que permitirán aumentar u optimizar las funcionalidades de la plataforma. Algunos de éstos módulos básicos son: Interactive Map, Cleanapp (housekeeping) o Recovermind.`,
    imageUrl: "https://cdn-static.globodain.com/softcamp/website/landing/2025/feb/sec-3.svg",
    imageAlt: "Section 3 Image"
  }
];

export default function SideFeatures() {
  return (
    <section id="how-to-implement-it" className="py-20">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`flex flex-col ${feature.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-20`}
          >
            <div className="w-full md:w-7/12 text-center">
              <img
                className="max-w-full h-auto"
                src={feature.imageUrl}
                alt={feature.imageAlt}
              />
            </div>
            <div className="w-full md:w-5/12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                <p className="pb-2">{feature.title}</p>
                <Separator />
              </h2>

              <div className="text-gray-600 space-y-4">
                {feature.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
