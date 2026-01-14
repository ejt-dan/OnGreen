import { NewsItem, ProductItem, SiteConfig } from './types';

export const CONFIG: SiteConfig = {
  companyName: "OnGreen (온그린)",
  address: "서울특별시 강남구 테헤란로 123, 온그린 타워 15층",
  phone: "02-1234-5678",
  email: "contact@ongreen.co.kr",
  socials: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    blog: "https://blog.naver.com"
  }
};

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: '1',
    title: '온그린, 차세대 초정밀 GPS 모듈 OG-200 출시',
    summary: '기존 대비 200% 향상된 정확도와 저전력 설계를 갖춘 혁신적인 위치 추적 모듈을 선보입니다.',
    date: '2023-10-15',
    category: 'Product News',
    content: '온그린이 새롭게 선보이는 OG-200은 자율주행 및 드론 산업에 최적화된 솔루션입니다...',
    imageUrl: 'https://picsum.photos/800/600?grayscale'
  },
  {
    id: '2',
    title: '2024 스마트 물류 엑스포 참가 안내',
    summary: '국내 최대 규모의 물류 산업 전시회에서 온그린의 통합 관제 솔루션을 경험해보세요.',
    date: '2023-09-20',
    category: 'Event',
    content: '코엑스에서 열리는 이번 엑스포에서 부스 A-12를 방문하시면 데모를 시연해 드립니다.',
    imageUrl: 'https://picsum.photos/800/601?grayscale'
  },
  {
    id: '3',
    title: '온그린, 글로벌 IoT 기업과 기술 제휴 체결',
    summary: '해외 시장 진출을 위한 전략적 파트너십을 통해 글로벌 위치 정보 서비스 시장을 선도합니다.',
    date: '2023-08-05',
    category: 'Press Release',
    content: '이번 제휴를 통해 북미 및 유럽 시장에 온그린의 솔루션을 공급하게 되었습니다.',
    imageUrl: 'https://picsum.photos/800/602?grayscale'
  }
];

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'p1',
    name: 'OG-Tracker Pro',
    category: 'Hardware',
    description: '산업용 자산 추적을 위한 고내구성 GPS 트래커. IP68 방수방진 지원.',
    specs: ['Battery: 5000mAh', 'Network: LTE-M / NB-IoT', 'Accuracy: < 2m'],
    imageUrl: 'https://picsum.photos/600/400?grayscale'
  },
  {
    id: 'p2',
    name: 'OnGreen Fleet Manager',
    category: 'Software',
    description: '실시간 차량 관제 및 경로 최적화 웹 솔루션. AI 기반 분석 제공.',
    specs: ['Real-time Dashboard', 'Driver Behavior Analysis', 'API Integration'],
    imageUrl: 'https://picsum.photos/600/401?grayscale'
  },
  {
    id: 'p3',
    name: 'OG-Tag Slim',
    category: 'Hardware',
    description: '소형 화물 및 귀중품 관리를 위한 초박형 위치 추적 태그.',
    specs: ['Thickness: 3mm', 'BLE 5.2', 'Battery Life: 1 Year'],
    imageUrl: 'https://picsum.photos/600/402?grayscale'
  }
];