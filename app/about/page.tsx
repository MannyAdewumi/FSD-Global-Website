import Image from 'next/image';
import { Target, Eye, Shield, Users, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="bg-[#0A2540] py-24 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Built on Trust. Driven by Excellence.</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            FSD Global Services Limited is a premier integrated business support company in Nigeria, dedicated to fueling operational efficiency.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Our Story</h2>
               <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Your Unified Support Partner</h3>
               <div className="space-y-4 text-gray-600 text-lg">
                 <p>
                   Managing multiple vendors for facility maintenance, staffing, security, and logistics is a drain on your resources. FSD Global Services was founded to solve this critical pain point for Nigerian businesses.
                 </p>
                 <p>
                   We bring all essential operational support services under one roof. Our integrated approach means you have a single point of accountability, streamlined communication, and consistent quality across the board.
                 </p>
                 <p>
                   From high-rise commercial buildings to complex industrial sites in the oil and gas sector, our experienced team leverages modern technology and deep industry knowledge to keep your business running seamlessly.
                 </p>
               </div>
             </div>
             <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
               <Image src="https://picsum.photos/seed/officeboard/800/1200" alt="FSD Global Team" fill className="object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 text-blue-900 transform group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-32 h-32" />
               </div>
               <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-8">
                 <Target className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Mission</h3>
               <p className="text-gray-600 text-lg leading-relaxed">
                 To deliver unparalleled integrated support services that empower our clients to focus on their core competencies, driving growth and operational excellence across Nigeria and beyond.
               </p>
            </div>
            
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 text-blue-900 transform group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-32 h-32" />
               </div>
               <div className="w-14 h-14 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mb-8">
                 <Eye className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Vision</h3>
               <p className="text-gray-600 text-lg leading-relaxed">
                 To be the most trusted and tech-driven partner for corporate and industrial support services in West Africa, known for reliability, security, and innovative resource management.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-16">Why Corporate Leaders Choose Us</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gray-50 flex items-center justify-center rounded-full mb-6 group-hover:bg-orange-50 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-blue-900 group-hover:text-orange-500" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Verified Experts</h4>
              <p className="text-sm text-gray-600">Highly trained professionals for every domain.</p>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gray-50 flex items-center justify-center rounded-full mb-6 group-hover:bg-orange-50 transition-colors">
                <Shield className="w-8 h-8 text-blue-900 group-hover:text-orange-500" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Uncompromised Quality</h4>
              <p className="text-sm text-gray-600">Strict adherence to safety and compliance standards.</p>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gray-50 flex items-center justify-center rounded-full mb-6 group-hover:bg-orange-50 transition-colors">
                <Users className="w-8 h-8 text-blue-900 group-hover:text-orange-500" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Single Point of Contact</h4>
              <p className="text-sm text-gray-600">Unified management structure for better communication.</p>
            </div>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gray-50 flex items-center justify-center rounded-full mb-6 group-hover:bg-orange-50 transition-colors">
                <Target className="w-8 h-8 text-blue-900 group-hover:text-orange-500" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Tech-Enabled</h4>
              <p className="text-sm text-gray-600">Real-time issue tracking and resource transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-50 py-16 text-center border-t border-blue-100">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">Ready to optimize your operations?</h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 shadow-md">
            Contact Our Team Today
          </Link>
        </div>
      </section>
    </div>
  );
}
