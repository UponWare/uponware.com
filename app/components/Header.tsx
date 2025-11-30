'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-sm fixed w-full top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/uponware.png"
              alt="UponWare"
              width={150}
              height={50}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Navegación Desktop - Oculta en móvil */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-white hover:bg-white hover:text-black px-4 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Inicio
            </Link>
            <Link 
              href="/servicios" 
              className="text-white hover:bg-white hover:text-black px-4 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Servicios
            </Link>
            <Link 
              href="/nosotros" 
              className="text-white hover:bg-white hover:text-black px-4 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Nosotros
            </Link>
            <Link 
              href="/contacto"
              className="text-white hover:bg-white hover:text-black px-4 py-2 rounded-md text-sm font-medium transition duration-200"
            > 
              Contacto
            </Link>
          </nav>

          {/* Botón Menú Hamburguesa - Solo visible en móvil */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Abrir menú principal</span>
            {!isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú Móvil - Se muestra cuando está abierto */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2 border border-gray-700">
              <Link 
                href="/"
                className="block bg-blue-600 text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/servicios"
                className="block bg-blue-600 text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                href="/nosotros"
                className="block bg-blue-600 text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="/contacto"
                className="block bg-blue-600 text-white hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}