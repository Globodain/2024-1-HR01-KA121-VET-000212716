'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm pl-5 pr-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                className="h-6 m-auto "
                src="https://cdn-static.globodain.com/softcamp/logos/logotipo"
                alt="SoftCamp Logo"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">

            <Link href="/about-us" className="text-gray-700 hover:text-primary">
              Sobre Nosotros
            </Link>
            <Link
              href="https://app.softcamp.eu/login"
              className="text-gray-700 hover:text-primary"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="https://app.softcamp.eu/register"
              className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Comenzar Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/features"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Características
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Precios
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="https://app.softcamp.eu/login"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="https://app.softcamp.eu/register"
              className="block px-3 py-2 text-primary font-medium"
            >
              Comenzar Gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
