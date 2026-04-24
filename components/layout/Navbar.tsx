'use client';

import Link from 'next/link';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Logo from '../Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Facility Management', href: '/services#facility' },
    { name: 'Recruitment & Manpower', href: '/services#recruitment' },
    { name: 'IT & Security Systems', href: '/services#security' },
    { name: 'Procurement & Supply', href: '/services#procurement' },
    { name: 'Logistics & Export', href: '/services#logistics' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-auto text-blue-900" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            if (link.name === 'Services') {
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors py-2"
                  >
                    {link.name} <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-0 top-full w-56 rounded-md shadow-lg bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="flex flex-col py-2">
                      {serviceLinks.map((service) => (
                        <Link 
                          key={service.name} 
                          href={service.href} 
                          className="px-4 py-2 hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-orange-500 w-full text-left"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors py-2"
              >
                {link.name}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-blue-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-800"
          >
            Get a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-6 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.name} className="flex flex-col space-y-2">
                    <Link
                      href={link.href}
                      className="text-base font-medium text-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    <div className="flex flex-col pl-4 space-y-2 border-l border-gray-100 mt-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="text-sm font-medium text-gray-600 hover:text-orange-500"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
