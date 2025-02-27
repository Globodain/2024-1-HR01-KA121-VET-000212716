"use client"
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="mb-4 sm:mb-6">
          <Link href="/" className="inline-block">
            <img
              src="https://cdn-static.globodain.com/softcamp/logos/logotipo"
              alt="SoftCamp Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Error message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Página no encontrada</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors shadow-sm"
          >
            Volver al Inicio
          </Link>
          <Link
            href="https://app.softcamp.eu/login"
            className="px-5 py-2 rounded-full bg-white text-gray-900 font-medium text-sm border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>

      {/* Support information */}
      <div className="mt-8 text-center text-xs sm:text-sm">
        <p className="text-gray-500">
          ¿Necesitas ayuda? <a href="/contacto" className="text-primary hover:underline">Contacta con nuestro equipo</a>
        </p>
      </div>
    </div>
  );
}