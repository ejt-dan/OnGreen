import React, { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { dataService } from '../services/dataService';
import { NewsItem } from '../types';
import { Calendar } from 'lucide-react';

export const News: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    setNewsList(dataService.getNews());
  }, []);

  return (
    <>
      <Hero 
        title="News & Updates"
        subtitle="온그린의 새로운 소식과 산업 트렌드를 전해드립니다."
        height="half"
      />

      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((news) => (
              <article key={news.id} className="bg-brand-gray border border-white/5 hover:border-brand-green/50 transition-all flex flex-col h-full group">
                {news.imageUrl && (
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-transparent transition-all z-10" />
                    <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-brand-green px-2 py-1 bg-brand-green/10 rounded">{news.category}</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar size={12} className="mr-1" />
                      {news.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-green transition-colors line-clamp-2">{news.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">{news.summary}</p>
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <button className="text-sm font-medium hover:text-brand-green transition-colors">Read More &rarr;</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {newsList.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              등록된 게시물이 없습니다.
            </div>
          )}
        </div>
      </section>
    </>
  );
};