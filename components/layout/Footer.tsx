import Link from 'next/link';
import Logo from '../Logo';
import { Mail, Phone, MapPin } from 'lucide-react';
import FooterContactForm from '../FooterContactForm';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <FooterContactForm />
      
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo className="h-8 w-auto text-white mb-6" />
            <p className="text-sm text-gray-400">
              Integrated business support services. We handle your operations so you can focus on growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-3 text-sm flex flex-col items-start text-left">
              <li><Link href="/services#facility-management" className="hover:text-white transition text-left">Facility Management</Link></li>
              <li><Link href="/services#recruitment" className="hover:text-white transition text-left">Recruitment & Manpower</Link></li>
              <li><Link href="/services#it-security" className="hover:text-white transition text-left">IT & Security Systems</Link></li>
              <li><Link href="/services#procurement" className="hover:text-white transition text-left">Procurement & Supply</Link></li>
              <li><Link href="/services#logistics" className="hover:text-white transition text-left">Logistics & Export</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+234 (0) 800 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>contact@fsdglobal.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FSD Global Services Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
