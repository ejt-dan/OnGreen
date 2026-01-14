import React, { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { dataService } from '../services/dataService';
import { ProductItem } from '../types';

export const Solutions: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    setProducts(dataService.getProducts());
  }, []);

  return (
    <>
      <Hero 
        title="Solutions & Products"
        subtitle="하드웨어부터 소프트웨어까지, 완벽한 통합 위치 관제 시스템을 경험하세요."
      />

      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16">
            {products.map((product, index) => (
              <div key={product.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="w-full md:w-1/2 h-[400px] bg-brand-gray relative overflow-hidden rounded-sm group">
                  <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-all z-10" />
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="w-full md:w-1/2">
                  <span className="text-brand-green font-bold tracking-widest text-sm mb-2 block">{product.category}</span>
                  <h2 className="text-3xl font-bold mb-6">{product.name}</h2>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    {product.description}
                  </p>
                  
                  <div className="bg-brand-gray/30 p-6 rounded-sm border border-white/5">
                    <h4 className="text-white font-semibold mb-4 border-b border-white/10 pb-2">Key Specifications</h4>
                    <ul className="space-y-3">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex items-center text-gray-400 text-sm">
                          <span className="w-2 h-2 bg-brand-green rounded-full mr-3" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="mt-8 text-white border-b border-brand-green hover:text-brand-green transition-colors pb-1 font-medium">
                    제품 브로슈어 다운로드
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};