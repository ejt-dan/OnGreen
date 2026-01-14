import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ArrowRight, Satellite, Smartphone, Layers, ShieldCheck } from 'lucide-react';
import { INITIAL_PRODUCTS } from '../constants';

export const Home: React.FC = () => {
  return (
    <>
      <Hero 
        title={`정확한 위치가\n미래를 만듭니다.`}
        subtitle="OnGreen은 초정밀 GPS 기술과 IoT 솔루션을 결합하여 비즈니스에 새로운 가치를 제공합니다. 기술의 한계를 넘어선 연결, 지금 경험하세요."
        height="full"
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920"
      >
        <Link 
          to="/solutions" 
          className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-lightGreen text-white px-8 py-4 rounded-sm font-bold text-lg transition-all transform hover:translate-x-1"
        >
          솔루션 보기 <ArrowRight size={20} />
        </Link>
      </Hero>

      {/* Key Features Section */}
      <section className="py-24 bg-brand-black relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Satellite size={40} />}
              title="초정밀 GPS"
              desc="cm 단위의 오차 범위를 실현한 차세대 GNSS 모듈 기술"
            />
            <FeatureCard 
              icon={<Layers size={40} />}
              title="IoT 통합 플랫폼"
              desc="하드웨어와 소프트웨어를 아우르는 올인원 관제 시스템"
            />
            <FeatureCard 
              icon={<Smartphone size={40} />}
              title="모바일 최적화"
              desc="언제 어디서나 실시간으로 자산을 모니터링하는 앱 지원"
            />
            <FeatureCard 
              icon={<ShieldCheck size={40} />}
              title="보안 & 신뢰"
              desc="엔터프라이즈급 데이터 암호화 및 무결성 보장"
            />
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-24 bg-brand-dark border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Our Solutions</h2>
              <p className="text-gray-400">온그린의 혁신적인 제품 라인업을 소개합니다.</p>
            </div>
            <Link to="/solutions" className="text-brand-green hover:text-white transition-colors flex items-center gap-1 mt-4 md:mt-0">
              전체 보기 <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} className="group bg-brand-gray border border-white/5 overflow-hidden hover:border-brand-green/50 transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                   <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-transparent transition-all z-10" />
                   <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="text-xs text-brand-green font-bold uppercase tracking-wider mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{product.description}</p>
                  <Link to="/solutions" className="text-white text-sm font-semibold border-b border-brand-green pb-1 inline-block hover:text-brand-green transition-colors">
                    자세히 보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/20 to-brand-black" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">비즈니스의 미래를 함께 설계하세요</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            온그린은 고객의 성공을 위한 맞춤형 위치 정보 솔루션을 제공합니다. <br/>
            지금 바로 전문가와 상담하세요.
          </p>
          <Link 
            to="/contact" 
            className="inline-block border border-white hover:bg-white hover:text-brand-black px-10 py-4 font-bold text-lg transition-all"
          >
            문의하기
          </Link>
        </div>
      </section>
    </>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-brand-gray/30 p-8 border border-white/5 hover:border-brand-green/50 transition-all hover:-translate-y-2 group">
    <div className="text-brand-green mb-6 group-hover:text-white transition-colors">{icon}</div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
);