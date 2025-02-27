import { Separator } from "../ui/separator";

export default function OurMission() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
        <Separator className="w-24 h-1 bg-blue-600 mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">
              SoftCamp está dedicado a proporcionar soluciones de gestión eficientes para campings pequeños y medianos. Nuestro software combina herramientas intuitivas con funcionalidades avanzadas, asegurando que los gestores puedan optimizar su ocupación, automatizar tareas repetitivas y mejorar la experiencia del cliente. Nos centramos en ofrecer tecnología práctica que resuelve problemas reales del sector.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Nuestro Impacto</h3>
            <Separator className="w-16 h-1 bg-blue-600 mb-4" />
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">200+</p>
                  <p className="text-sm text-gray-600">Campings Gestionados</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">50+</p>
                  <p className="text-sm text-gray-600">Mejoras Implementadas</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">90%</p>
                  <p className="text-sm text-gray-600">Tasa de Satisfacción</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">30%</p>
                  <p className="text-sm text-gray-600">Aumento Promedio de Ocupación</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">25% </p>
                    <p className="text-sm text-gray-600">Reducción en Tareas Administrativas</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">15+</p>
                  <p className="text-sm text-gray-600">Años de Experiencia en el Sector</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}