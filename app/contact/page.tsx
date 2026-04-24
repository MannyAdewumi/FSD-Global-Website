'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  need: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [status, setStatus] = useState<null | 'submitted'>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Main Contact Form data:', data);
    setStatus('submitted');
    reset();
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">Let&apos;s Talk Solutions</h1>
          <p className="text-xl text-gray-600">
            Reach out to discuss your facility, recruitment, or logistics needs. Our team is ready to provide tailored support.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg">
                  Whether you have an immediate operational emergency or need a strategic consultation for long-term support, we are here for you.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Headquarters</h4>
                    <p className="text-gray-600 mt-1">Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Call Us</h4>
                    <p className="text-gray-600 mt-1">+234 (0) 800 000 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Email Us</h4>
                    <p className="text-gray-600 mt-1">contact@fsdglobal.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              {status === 'submitted' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent</h3>
                  <p className="text-gray-600">Thank you for reaching out. A representative from FSD Global will contact you shortly.</p>
                  <button onClick={() => setStatus(null)} className="mt-8 text-blue-900 font-semibold hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        {...register('name')}
                        type="text" 
                        id="name" 
                        className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-900 focus:ring-blue-900'} outline-none transition-shadow`} 
                        placeholder="John Doe" 
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        {...register('email')}
                        type="email" 
                        id="email" 
                        className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-900 focus:ring-blue-900'} outline-none transition-shadow`} 
                        placeholder="john@company.com" 
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input 
                      {...register('company')}
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-shadow" 
                      placeholder="Your Organization Ltd." 
                    />
                  </div>

                  <div>
                    <label htmlFor="need" className="block text-sm font-medium text-gray-700 mb-1">Primary Need</label>
                    <select 
                      {...register('need')}
                      id="need" 
                      className={`w-full px-4 py-3 rounded-md border ${errors.need ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-900 focus:ring-blue-900'} outline-none transition-shadow bg-white`}
                    >
                      <option value="">Select a service...</option>
                      <option value="facility">Facility Management</option>
                      <option value="recruitment">Recruitment & Manpower</option>
                      <option value="security">IT & Security Systems</option>
                      <option value="procurement">Procurement & Supply</option>
                      <option value="logistics">Logistics & Export</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    {errors.need && <p className="mt-1 text-sm text-red-500">{errors.need.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      {...register('message')}
                      id="message" 
                      rows={4} 
                      className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-900 focus:ring-blue-900'} outline-none transition-shadow resize-none`} 
                      placeholder="How can we help your business?"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 disabled:opacity-50 transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
