export default function CTA() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-gray-900">¿Quieres ver más?</h3>
            <p className="text-xl text-gray-600">Solicita acceso a una demo personalizada</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://globodain.com/es-es/softcamp/demo"
              className="px-8 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300 text-lg font-medium"
            >
              Solicitar demo
            </a>
            <a
              href="mailto:office@globodain.com?subject=Pregunta%20sobre%20SoftCamp"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 text-lg font-medium"
            >
              Hablar con soporte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
