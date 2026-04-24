'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function FooterContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="bg-[#0A2540] py-16 border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">Have an inquiry? Let&apos;s talk.</h3>
            <p className="text-blue-200 text-lg">
              Fill out the form and our team will get back to you within 24 hours to discuss how we can support your business.
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent</h4>
                <p className="text-gray-600">Thank you for reaching out. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="footer-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    {...register('name')}
                    id="footer-name" 
                    className={`w-full px-4 py-2.5 rounded-md bg-gray-50 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-blue-900 focus:ring-blue-900'} text-gray-900 outline-none focus:ring-2 transition-shadow`} 
                    placeholder="John Doe" 
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="footer-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    {...register('email')}
                    id="footer-email" 
                    type="email"
                    className={`w-full px-4 py-2.5 rounded-md bg-gray-50 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-blue-900 focus:ring-blue-900'} text-gray-900 outline-none focus:ring-2 transition-shadow`} 
                    placeholder="john@company.com" 
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="footer-service" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                  <select 
                    {...register('service')}
                    id="footer-service"
                    className={`w-full px-4 py-2.5 rounded-md bg-gray-50 border ${errors.service ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-blue-900 focus:ring-blue-900'} text-gray-900 outline-none focus:ring-2 transition-shadow`}
                  >
                    <option value="">Select a service...</option>
                    <option value="facility-management">Facility Management</option>
                    <option value="recruitment">Recruitment & Manpower</option>
                    <option value="it-security">IT & Security Systems</option>
                    <option value="procurement">Procurement & Supply</option>
                    <option value="logistics">Logistics & Export</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="footer-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    {...register('message')}
                    id="footer-message" 
                    rows={3} 
                    className={`w-full px-4 py-2.5 rounded-md bg-gray-50 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-blue-900 focus:ring-blue-900'} text-gray-900 outline-none focus:ring-2 transition-shadow resize-none`} 
                    placeholder="How can we help?"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
