'use client';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "¿Puedo probar el software de gestión?",
    answer: (
      <p>Puedes socilitar la <strong>creación de una cuenta demo</strong>. Conlleva el mismo proceso que el registro de una cuenta normal, a diferencia de que ésta tendrá datos de ejemplo sobre reservas, clientes, pagos, transacciones, etcétera. <strong>La cuenta demo será editable, pero no usable</strong>. Contacta con el equipo de soporte para pasar de 'Demo' a 'Live' y poder utilizar el software de gestión sin problemas.</p>
    )
  },
  {
    question: "¿Qué coste tiene usar el software el software de gestión?",
    answer: (
      <p><strong>El uso de SoftCamp es gratuito</strong> por tiempo ilimitado. La contratación de servicios de terceros o costes de transacción serán abonadas por el negocio y cobradas mensualmente, a excepción de la oferta aplicada si ésta existiera.</p>
    )
  },
  {
    question: "¿Cuál es la ventaja de SoftCamp sobre otros software de gestión?",
    answer: (
      <p>SoftCamp es un software de gestión <strong>especializado en la gestión de Campings que integra la tecnología más moderna del mercado</strong>. Desarrollamos no sólo la capacidad de interacción con el uso del sotware (UX, UI), sino también la simplificación del mismo en base a tus necesidades, reducción de la carga del software de gestión y <strong>optimización de la gestión diaria y el tiempo empleado en el aprendizaje</strong> del uso del software.</p>
    )
  },
  {
    question: "¿Qué ocurre con mis datos?",
    answer: (
      <div>
        <p>Tus datos son <strong>accesibles sólo por el administrador principal y los usuarios que dispongan de los permisos necesarios</strong>. Puedes realizar una exportación de la base de datos en Excel o JSON para su análisis, o bien solicitar acceso a la API de SoftCamp y que tu equipo de desarrollo gestione las peticiones al servidor. Nuestro equipo de soporte sólo tiene acceso a los datos necesarios para ofrecer el buen funcionamiento de la operativa diaria. No tienen acceso a datos sensibles cómo datos personales de tus clientes o facturación. Si tienen capacidad para visualizar los datos de las reservas:</p>
        <ol className="list-decimal list-inside py-2">
          <li>ID de cliente</li>
          <li>Fecha de entrada</li>
          <li>Fecha de salida</li>
          <li>Alojamiento seleccionado</li>
        </ol>
        <p>Con respecto a los datos <strong>en relación con servicios de terceros</strong>; Con la contratación y activación del servicio en nuestro marketplace aceptas la política de servicios aplicada por la empresa proveedora del mismo. Consulta las políticas antes de instalar y activar estos servicios.</p>
      </div>
    )
  },
  {
    question: "¿Qué sistemas integra SofCamp?",
    answer: (
      <div>
        <p>Algunas de las características claves que ofrece nuestro software de gestión son:</p>
        <ul className="list-disc list-inside py-2 space-y-1">
          <li>Capar la plataforma por accesos en base al rol del usuario.</li>
          <li>Trabajar en equipo de forma simultánea en la plataforma.</li>
          <li>Accesibilidad 24/7 desde cualquier lugar.</li>
          <li>Despliegue y gestión de los alojamientos en +400 canales digitales de forma simultánea.</li>
          <li>Crear informes avanzados sobre reservas, clientes, facturas o transacciones, entre otros.</li>
          <li>Modificación del Front-desk cómo calendario, lista o mapa interactivo.</li>
          <li>Creación y exportación de la auditoría nocturna.</li>
          <li>Gestión, asignación y control de la limpieza de los alojamientos (housekeeping).</li>
          <li>Control del acceso a personas y vehículos al recinto.</li>
          <li>Creación de website y motor de reservas.</li>
          <li>Sistema de notificaciones en directo.</li>
          <li>Integración con sistemas de videovigilancia y control de accesos.</li>
          <li>Automatización de check-ins y check-outs.</li>
        </ul>
      </div>
    )
  },
  {
    question: "¿Cuándo puedo empezar a utilizar la solución después de registrarme?",
    answer: (
      <p>Tu cuenta es revisada por nuestro equipo de soporte para verificar que cumple con las normativas legales vigentes. <strong>El tiempo medio de activación final de la cuenta es de 12 horas</strong>. Todo depende de la documentación recibida y su validez.</p>
    )
  },
  {
    question: "Si realizo ventas digitales, ¿cómo recibo el dinero?",
    answer: (
      <p>Tu cuenta está conectada con la pasarela de pagos de Stripe para ofrecer una experiencia completa y segura. Recibirás las cuantías cobradas <strong>en tu cuenta bancaria asociada</strong> a la configuración de tu cuenta durante la activación de OneWay <strong>una vez cada 24 horas</strong> restando las comisiones cobradas por Stripe por la transacción.</p>
    )
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { 
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={onClick}
      >
        <span className="font-semibold text-left text-gray-800">{question}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 py-4 bg-white text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Preguntas frecuentes</h2>
          <p className="text-xl text-gray-600">Te resolveremos todas tus dudas</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems[index] || false}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-6">¿No encuentras la respuesta que buscas?</p>
          <a
            href="/contacto"
            className="inline-flex px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            Contacta con nosotros
          </a>
        </div>
      </div>
    </section>
  );
}
