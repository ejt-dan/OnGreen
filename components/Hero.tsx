import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
  height?: 'full' | 'half';
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, bgImage, height = 'half', children }) => {
  return (
    <div className={`relative w-full ${height === 'full' ? 'h-screen' : 'h-[60vh]'} flex items-center overflow-hidden`}>
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {bgImage ? (
           <img src={bgImage} alt="Background" className="w-full h-full object-cover opacity-40" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-gray to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-transparent to-brand-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-brand-black/50" />
      </div>

      <div className="container mx-auto px-6 z-10 relative mt-16">
        <div className="max-w-3xl animate-fadeIn">
          <div className="w-20 h-1 bg-brand-green mb-6" />
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight whitespace-pre-wrap">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-8 max-w-2xl leading-relaxed whitespace-pre-wrap">
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};