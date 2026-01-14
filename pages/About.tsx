import React from 'react';
import { Hero } from '../components/Hero';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      <Hero 
        title="Who We Are"
        subtitle="온그린은 기술로 공간의 가치를 새롭게 정의합니다."
      />

      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Vision & Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              "모든 이동하는 것들에 대한 정확한 이해"<br/>
              우리는 위치 정보 기술이 단순한 좌표 확인을 넘어, 산업의 효율성을 극대화하고 
              사람들의 안전을 지키는 핵심 인프라라고 믿습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-brand-gray p-10 border-l-4 border-brand-green">
              <h3 className="text-2xl font-bold mb-4 text-brand-green">History</h3>
              <ul className="space-y-6 border-l border-white/10 ml-2 pl-8 relative">
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 bg-brand-green rounded-full" />
                  <span className="block text-sm text-gray-500 mb-1">2024</span>
                  <span className="block text-lg font-medium">글로벌 IoT 파트너십 체결</span>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 bg-brand-dark border border-white/30 rounded-full" />
                  <span className="block text-sm text-gray-500 mb-1">2023</span>
                  <span className="block text-lg font-medium">OG-Tracker 시리즈 출시</span>
                </li>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 w-4 h-4 bg-brand-dark border border-white/30 rounded-full" />
                  <span className="block text-sm text-gray-500 mb-1">2022</span>
                  <span className="block text-lg font-medium">온그린(OnGreen) 법인 설립</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col justify-center">
               <h3 className="text-2xl font-bold mb-6">Core Competency</h3>
               <div className="space-y-4">
                 <CompetencyItem title="High Precision GPS" desc="오차 범위 1m 이내의 초정밀 측위 기술 보유" />
                 <CompetencyItem title="Low Power Design" desc="배터리 수명을 극대화하는 독자적인 저전력 알고리즘" />
                 <CompetencyItem title="Scalable Platform" desc="수십만 대의 기기를 동시에 관제하는 대용량 서버 아키텍처" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CompetencyItem: React.FC<{title: string, desc: string}> = ({ title, desc }) => (
  <div className="flex items-start">
    <CheckCircle2 className="text-brand-green mr-4 flex-shrink-0 mt-1" size={24} />
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  </div>
);