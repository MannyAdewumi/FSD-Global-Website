import Link from 'next/link';
import { ArrowRight, Building2, Server, Users, Package, Truck, Compass, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 'facility',
    title: 'Facility Management',
    icon: <Building2 className="w-8 h-8" />,
    shortDesc: 'Comprehensive maintenance to prevent downtime.',
    whatItIs: 'Full-spectrum management of your commercial or industrial property. We handle electrical, plumbing, HVAC, cleaning, and general maintenance.',
    whoItsFor: 'Commercial property owners, corporate HQs, industrial sites.',
    benefits: [
      'Tech-enabled real-time issue reporting and tracking',
      'Prolonged lifespan of capital equipment',
      'Zero operational friction for your staff'
    ],
    image: 'https://picsum.photos/seed/building/1000/600'
  },
  {
    id: 'recruitment',
    title: 'Recruitment & Manpower',
    icon: <Users className="w-8 h-8" />,
    shortDesc: 'Source, vet, and deploy the talent you need.',
    whatItIs: 'End-to-end recruitment services covering local hires and expatriate management. We handle sourcing, background checks, payroll, and compliance.',
    whoItsFor: 'Companies needing rapid scale-up, specialized roles, or expatriate handling.',
    benefits: [
      'Accelerated hiring timelines',
      'Guaranteed compliance with labor laws',
      'Seamless expatriate quota and immigration handling'
    ],
    image: 'https://picsum.photos/seed/meeting/1000/600'
  },
  {
    id: 'security',
    title: 'IT & Security Systems',
    icon: <Server className="w-8 h-8" />,
    shortDesc: 'Protecting your digital and physical perimeters.',
    whatItIs: 'Installation, monitoring, and maintenance of cutting-edge security systems including CCTV, biometric access controls, fire alarms, and network infrastructure.',
    whoItsFor: 'Banks, corporate offices, warehouses, and secure facilities.',
    benefits: [
      '24/7 proactive security monitoring',
      'Integration across physical and digital access',
      'Deter theft and prevent unauthorized entry'
    ],
    image: 'https://picsum.photos/seed/security/1000/600'
  },
  {
    id: 'procurement',
    title: 'Procurement & Supply',
    icon: <Package className="w-8 h-8" />,
    shortDesc: 'Reliable sourcing of critical materials.',
    whatItIs: 'Strategic sourcing and supply chain management. If your operations require specialized parts, equipment, or consumables, we procure them globally at competitive rates.',
    whoItsFor: 'Oil & gas sector, manufacturing, and large enterprises.',
    benefits: [
      'Reduced procurement costs via our vendor network',
      'Guaranteed quality assurance of supplied goods',
      'Predictable delivery schedules'
    ],
    image: 'https://picsum.photos/seed/supply/1000/600'
  },
  {
    id: 'logistics',
    title: 'Logistics & Export Services',
    icon: <Truck className="w-8 h-8" />,
    shortDesc: 'Moving goods across borders efficiently.',
    whatItIs: 'Expert freight forwarding, port operations, customs clearance, and export coordination. We untangle the complexities of Nigerian port logistics.',
    whoItsFor: 'Importers, exporters, and industrial manufacturers.',
    benefits: [
      'Faster customs clearance',
      'Reduced demurrage and storage penalties',
      'End-to-end visibility of your cargo'
    ],
    image: 'https://picsum.photos/seed/cargo/1000/600'
  }
];

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From maintaining your corporate headquarters to clearing critical cargo at the port, FSD Global provides the operational backbone your business needs to thrive.
          </p>
        </div>
      </section>

      {/* Services Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="lg:w-1/4">
          <div className="sticky top-24 pt-4 lg:pt-8 bg-white z-10 hidden lg:block">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Jump to Service</h3>
            <nav className="flex flex-col space-y-1.5 border-l-2 border-gray-100 pl-4">
              {services.map((service) => (
                <a 
                  key={service.id} 
                  href={`#${service.id}`}
                  className="text-gray-600 hover:text-orange-500 hover:border-orange-500 font-medium py-2 transition-all relative -left-[18px] pl-[16px] border-l-2 border-transparent"
                >
                  {service.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Services List Content */}
        <div className="lg:w-3/4 space-y-32">
          {services.map((service, index) => (
            <section key={service.id} id={service.id} className="scroll-mt-32">
            <div className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-900 mb-2">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">{service.title}</h2>
                <p className="text-xl text-gray-600 font-medium">{service.whatItIs}</p>
                
                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Who it&apos;s for</h4>
                  <p className="text-gray-600 mb-6">{service.whoItsFor}</p>
                  
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">The FSD Advantage</h4>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800 transition-colors">
                  Request this Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Image */}
              <div className="flex-1 w-full">
                 <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                   <Image src={service.image} alt={service.title} fill className="object-cover" />
                 </div>
              </div>
              
            </div>
          </section>
        ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#0A2540] py-24 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-4xl font-display font-bold text-white mb-6">Need a custom support package?</h2>
          <p className="text-xl text-blue-200 mb-10">We tailor our integrated services to match your exact operational requirements.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-orange-500 hover:bg-orange-600 shadow-lg">
            Discuss Your Requirements Today
          </Link>
        </div>
      </section>
    </div>
  );
}
