import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { CONFIG } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { dataService } from '../services/dataService';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      dataService.addInquiry({
        id: Date.now().toString(),
        ...formData,
        date: new Date().toISOString().split('T')[0]
      });
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1000);
  };

  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="프로젝트 문의부터 기술 제휴까지, 온그린은 언제나 열려있습니다."
      />

      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info & Map */}
            <div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Office Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-brand-green mr-4 mt-1" />
                    <div>
                      <span className="block text-gray-400 text-sm">Address</span>
                      <p className="font-medium">{CONFIG.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-brand-green mr-4 mt-1" />
                    <div>
                      <span className="block text-gray-400 text-sm">Phone</span>
                      <p className="font-medium">{CONFIG.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-brand-green mr-4 mt-1" />
                    <div>
                      <span className="block text-gray-400 text-sm">Email</span>
                      <p className="font-medium">{CONFIG.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fake Map Component (Placeholder for Google Maps Iframe) */}
              <div className="w-full h-80 bg-brand-gray rounded-sm overflow-hidden relative border border-white/10 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.056073748268!2d127.0544!3d37.5076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMwJzI3LjQiTiAxMjfCsDAzJzE1LjgiRQ!5e0!3m2!1sko!2skr!4v1620000000000!5m2!1sko!2skr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                  loading="lazy"
                  title="OnGreen Location"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-brand-green text-white px-3 py-1 text-xs font-bold rounded">OnGreen HQ</div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-brand-gray/20 p-8 md:p-10 border border-white/5 rounded-sm">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              {submitted ? (
                <div className="h-64 flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mb-4">
                    <Send className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">전송 완료</h4>
                  <p className="text-gray-400">문의주셔서 감사합니다. 빠른 시일 내에 답변 드리겠습니다.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-brand-green hover:text-white underline"
                  >
                    새 문의 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/20 p-3 focus:border-brand-green focus:outline-none transition-colors text-white placeholder-gray-600"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Company</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/20 p-3 focus:border-brand-green focus:outline-none transition-colors text-white placeholder-gray-600"
                        placeholder="회사명"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/20 p-3 focus:border-brand-green focus:outline-none transition-colors text-white placeholder-gray-600"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Message</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/20 p-3 focus:border-brand-green focus:outline-none transition-colors text-white placeholder-gray-600 resize-none"
                      placeholder="문의 내용을 입력해주세요."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-green hover:bg-brand-lightGreen text-white font-bold py-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '전송 중...' : '문의하기'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};