import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn-static.globodain.com/softcamp/backgrounds/background2')",
        }}
      >
        <div className="absolute inset-0 bg-white/95" />
        
        <Navbar />

        <div className="relative z-10 pt-40 flex items-center justify-center min-h-screen text-center px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Se acabó el no tener{' '}
                  <span className="text-primary">la tecnología necesaria</span>. 
                  Utiliza SoftCamp
                </h1>
                <p className="text-xl md:text-2xl mb-10">
                  El software de gestión #1 entre pequeños y medianos Campings.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                  <Link
                    href="#how-to-implement-it"
                    className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    Cómo implementarlo en mi negocio
                  </Link>
                  <Link
                    href="https://app.softcamp.eu/register"
                    className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-md"
                  >
                    Comenzar GRATIS
                  </Link>
                </div>

                <div className="mt-20 relative">
                  <Image
                    src="https://cdn-static.globodain.com/softcamp/website/hero-desktop"
                    alt="SoftCamp Software"
                    width={1100}
                    height={900}
                    className="mx-auto shadow-lg rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}