import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { cn } from '../lib/utils';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Sent successfully!');
    reset();
  };

  return (
    <div className="pt-24">
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading badge="Contact" title="Get in Touch" center />
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-8">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-8 bg-white rounded-3xl shadow-xl">
                    <Mail size={24} className="text-blue-600 mb-4" />
                    <p className="font-bold">hello@movedifferent.ke</p>
                  </div>
                  <div className="p-8 bg-white rounded-3xl shadow-xl">
                    <Phone size={24} className="text-purple-600 mb-4" />
                    <p className="font-bold">+254 700 000 000</p>
                  </div>
               </div>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.36448995543!2d36.8044!3d-1.2644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1710500000000!5m2!1sen!2ske"
                  width="100%" height="300" className="rounded-3xl" style={{ border: 0 }} loading="lazy"
                ></iframe>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-12 rounded-[3rem] shadow-2xl space-y-8">
              <input {...register('name')} placeholder="Name" className={cn("w-full p-5 bg-slate-50 rounded-2xl", errors.name && "ring-2 ring-red-500")} />
              <input {...register('email')} placeholder="Email" className={cn("w-full p-5 bg-slate-50 rounded-2xl", errors.email && "ring-2 ring-red-500")} />
              <input {...register('subject')} placeholder="Subject" className={cn("w-full p-5 bg-slate-50 rounded-2xl", errors.subject && "ring-2 ring-red-500")} />
              <textarea {...register('message')} placeholder="Message" rows={4} className={cn("w-full p-5 bg-slate-50 rounded-2xl", errors.message && "ring-2 ring-red-500")} />
              <button disabled={isSubmitting} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;