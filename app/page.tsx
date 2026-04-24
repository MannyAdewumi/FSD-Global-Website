import Link from 'next/link';
import { ArrowRight, ShieldCheck, TrendingUp, Users, Building2, Truck, Server, Package, Quote, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Clean SaaS Split style */}
      <section className="relative w-full overflow-hidden bg-[#0A2540] text-white">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1699549196390-e31bfc88536d?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Industrial operations"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
          referrerPolicy="no-referrer"
        />

        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30 mix-blend-screen pointer-events-none">
          <svg width="800" height="800" fill="none" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="400" fill="url(#hero-gradient)" />
            <defs>
              <radialGradient id="hero-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(400 0 0 400 400 400)">
                <stop stopColor="#F27D26" />
                <stop offset="1" stopColor="#0A2540" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-800 bg-blue-900/50 px-3 py-1 text-xs font-semibold text-blue-200 uppercase tracking-widest mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              Integrated Support Services
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-display leading-[1.05]">
              Your All-in-One Partner for
              <span className="block text-orange-500">Business Operations.</span>
            </h1>
            <p className="max-w-xl text-lg text-blue-100 mb-8 font-sans">
              FSD Global Services provides end-to-end facility management, recruitment, security, and logistics support for corporate and industrial leaders across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex justify-center items-center gap-2 rounded-md bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="inline-flex justify-center items-center gap-2 rounded-md border border-gray-400 bg-transparent px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-4 border-t border-blue-800 pt-8 flex-nowrap">
              <div className="bg-white rounded-[10px] p-4 sm:p-6 min-w-0 shadow-lg flex-1">
                <p className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-1 truncate">24/7</p>
                <p className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-wider truncate">Support</p>
              </div>
              <div className="bg-white rounded-[10px] p-4 sm:p-6 min-w-0 shadow-lg flex-1">
                <p className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-1 truncate">100%</p>
                <p className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-wider truncate">Reliability</p>
              </div>
            </div>
          </div>
          
          {/* Dashboard/Tech visualization */}
          <div className="flex-1 w-full max-w-lg relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                 <div className="flex space-x-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                 </div>
                 <div className="text-[10px] font-mono text-gray-400">FSD_OPS_CENTER</div>
               </div>
               
               {/* Real-time issue tracking mock */}
               <div className="space-y-3 mb-4">
                 <h4 className="text-xs uppercase text-blue-300 font-bold tracking-widest">Real-time Issue Tracking</h4>
                 {[
                   { id: 'ISS-492', location: 'Chevron HQ', status: 'Resolved', time: '2m ago' },
                   { id: 'SEC-101', location: 'Apapa Port', status: 'Allocating', time: 'Just now' },
                   { id: 'FAC-88', location: 'Mainland Hub', status: 'In Progress', time: '14m ago' }
                 ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center p-3 rounded bg-white/5 border border-white/5 text-sm">
                     <div>
                       <div className="text-white font-mono text-xs mb-1">{item.id}</div>
                       <div className="text-gray-400 text-xs">{item.location}</div>
                     </div>
                     <div className="text-right">
                       <div className={`text-xs font-semibold ${item.status === 'Resolved' ? 'text-green-400' : item.status === 'Allocating' ? 'text-orange-400' : 'text-blue-400'}`}>
                         {item.status}
                       </div>
                       <div className="text-gray-500 text-[10px]">{item.time}</div>
                     </div>
                   </div>
                 ))}
               </div>
               
               <div className="rounded-lg bg-orange-500/20 border border-orange-500/50 p-4">
                 <div className="flex items-center gap-3 text-orange-400">
                   <TrendingUp className="h-5 w-5" />
                   <span className="text-sm font-semibold">Resource Allocation Optimal</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Delivering Excellence Every Step of the Way</h3>
            <p className="text-gray-600 text-lg">
              We combine industry expertise, proven methodologies, and unwavering dedication to ensure your business operations never miss a beat.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="h-6 w-6" />, title: "Tested Security", desc: "Rigorous standards and vetted personnel for absolute peace of mind." },
              { icon: <TrendingUp className="h-6 w-6" />, title: "Operational Growth", desc: "Our solutions are scaled to handle your most ambitious goals." },
              { icon: <Users className="h-6 w-6" />, title: "Expert Network", desc: "Access the best talent and specialized professionals nationwide." },
              { icon: <CheckCircle2 className="h-6 w-6" />, title: "Quality Assured", desc: "End-to-end quality control to ensure flawless execution." }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Our Core Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Integrated Support Services</h3>
            <p className="text-lg text-gray-600">We eliminate operational bottlenecks. Partner with FSD to streamline your facility, recruitment, and logistics needs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Building2 className="h-6 w-6" />}
              title="Facility Management"
              description="Comprehensive maintenance and management. Eliminate downtime with our tech-enabled issue tracking and resource allocation."
              href="/services#facility"
            />
            <ServiceCard 
              icon={<Users className="h-6 w-6" />}
              title="Recruitment & Manpower"
              description="End-to-end recruitment, expatriate management, and staffing solutions. We find the right people fast."
              href="/services#recruitment"
            />
            <ServiceCard 
              icon={<Server className="h-6 w-6" />}
              title="IT & Security Systems"
              description="Advanced CCTV, access control, and alarm installations. Secure your assets with state-of-the-art tech."
              href="/services#security"
            />
            <ServiceCard 
               icon={<Package className="h-6 w-6" />}
               title="Procurement & Supply"
               description="Reliable supply chain services. We source and deliver equipment, materials, and consumables seamlessly."
               href="/services#procurement"
            />
            <ServiceCard 
               icon={<Truck className="h-6 w-6" />}
               title="Logistics & Export"
               description="Freight forwarding, port operations, and complex logistics handled with precision."
               href="/services#logistics"
            />
             <div className="flex flex-col justify-center rounded-2xl bg-[#0A2540] p-8 border border-blue-900 shadow-xl group text-white">
                <h4 className="font-display text-2xl font-bold mb-4">Want to see our full capabilities?</h4>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 group-hover:text-orange-300">
                  View All Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Trust & Industries Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Trusted by Nigeria&apos;s Largest Industries</h2>
               <p className="text-lg text-gray-600 mb-8">
                 We understand the high stakes of commercial and industrial operations. Our team is equipped to handle complex support tasks for demanding sectors.
               </p>
               <ul className="space-y-4">
                 {[
                   'Oil & Gas Companies',
                   'Energy & Power Sectors',
                   'Telecommunications',
                   'Commercial Real Estate',
                   'Government & Institutions'
                 ].map((industry, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                     <ShieldCheck className="h-5 w-5 text-orange-500 shrink-0" />
                     {industry}
                   </li>
                 ))}
               </ul>
             </div>
             <div className="grid grid-cols-2 gap-4">
               {/* Visual composition layout */}
               <div className="space-y-4">
                 <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1660448076231-6da14185d036?q=80&w=360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Industrial operations" fill className="object-cover" referrerPolicy="no-referrer" />
                 </div>
                 <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1728808668131-76d40d112271?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tech and IT Security" fill className="object-cover" referrerPolicy="no-referrer" />
                 </div>
               </div>
               <div className="space-y-4 pt-12">
                 <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1618505497364-f97e23c8b70a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tbWVyY2lhbCUyMHJlYWwlMjBlc3RhdGV8ZW58MHwxfDB8fHwy" alt="Corporate facility" fill className="object-cover" referrerPolicy="no-referrer" />
                 </div>
                 <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1704839531639-6cc24e1034be?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logistics and shipping" fill className="object-cover" referrerPolicy="no-referrer" />
                 </div>
               </div>
             </div>
           </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Stop managing vendors. Start managing growth.</h2>
          <p className="text-xl text-blue-200 mb-10">
            Let FSD Global Services become your single point of contact for all facility, recruitment, and logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex justify-center items-center rounded-md bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-orange-600 transition-colors">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Client Success</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">What Our Partners Say</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="FSD&apos;s integrated approach completely changed how we operate. We used to juggle five different vendors for facility maintenance and security. Now, we have one reliable partner."
              name="Adewale Johnson"
              role="Operations Director"
              company="Apex Energy Solutions"
            />
            <TestimonialCard 
              quote="When we needed to scale our logistics and manpower for a major offshore project, FSD delivered. Their reliability and speed in sourcing vetted professionals is unmatched."
              name="Sarah Lin"
              role="Head of Procurement"
              company="Global Offshore Marine"
            />
            <TestimonialCard 
              quote="The transition to FSD for our IT security systems was seamless. The real-time visibility they provide gives us confidence that our critical assets are protected 24/7."
              name="Michael Okonkwo"
              role="Chief Technology Officer"
              company="First Metro Bank"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Questions & Answers</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="What does Integrated Business Support mean?"
              answer="Integrated business support means we handle all your non-core operational activities—such as facility maintenance, IT security, recruitment, and logistics—under a single management umbrella. This gives you one point of contact, unified accountability, and eliminates the friction of juggling multiple specialized vendors."
            />
            <FAQItem 
              question="We already have a facility manager. Can we hire you for just security or logistics?"
              answer="Absolutely. While our fully integrated package offers the best value and seamless coordination, we also structure modular service packages. You can engage FSD Global for specialized standalone solutions like expatriate management, port operations, or IT security systems."
            />
            <FAQItem 
              question="How does FSD's tech-enabled approach work?"
              answer="We leverage real-time issue tracking, cloud-based resource allocation, and operational dashboards across our teams. This allows field agents to report maintenance or security events instantly, and gives your management total transparency over response times, asset conditions, and project resolution statuses."
            />
            <FAQItem 
              question="Do you support businesses outside of Lagos?"
              answer="Yes, our operations span across Nigeria. We support major industrial sites, regional corporate offices, and strategic supply chain nodes nationwide, ensuring consistent service quality no matter where your facilities are located."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <details className="group border border-gray-200 rounded-xl bg-gray-50 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-lg font-semibold text-gray-900 hover:text-blue-900 transition-colors list-none">
        {question}
        <span className="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white group-open:bg-blue-50 group-open:border-blue-200 transition-colors">
          <svg
            className="h-4 w-4 transition-transform duration-300 group-open:rotate-180 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-6 text-gray-600 font-medium leading-relaxed">
        <p>{answer}</p>
      </div>
    </details>
  );
}

function TestimonialCard({ quote, name, role, company }: { quote: string, name: string, role: string, company: string }) {
  return (
    <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
      <Quote className="h-10 w-10 text-blue-900/10 mb-6" />
      <p className="text-gray-700 italic mb-8 flex-grow leading-relaxed">&quot;{quote}&quot;</p>
      <div>
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm font-semibold text-orange-500 mt-1">{company}</p>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <div className="group relative flex flex-col items-start p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
       <div className="mb-6 p-4 bg-gray-50 text-blue-900 rounded-xl group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300 shrink-0">
         {icon}
       </div>
       <h4 className="font-display text-xl font-bold text-gray-900 mb-3">{title}</h4>
       <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow">{description}</p>
       <Link href={href} className="mt-auto inline-flex items-center text-sm font-semibold text-blue-900 group-hover:text-orange-500 transition-colors">
         Learn more <ArrowRight className="ml-1 h-4 w-4" />
       </Link>
    </div>
  );
}
