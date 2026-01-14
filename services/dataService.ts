import { NewsItem, ProductItem, ContactInquiry } from '../types';
import { INITIAL_NEWS, INITIAL_PRODUCTS } from '../constants';

const NEWS_KEY = 'ongreen_news';
const PRODUCTS_KEY = 'ongreen_products';
const INQUIRIES_KEY = 'ongreen_inquiries';

export const dataService = {
  // News
  getNews: (): NewsItem[] => {
    const data = localStorage.getItem(NEWS_KEY);
    return data ? JSON.parse(data) : INITIAL_NEWS;
  },
  saveNews: (news: NewsItem[]) => {
    localStorage.setItem(NEWS_KEY, JSON.stringify(news));
  },
  addNews: (item: NewsItem) => {
    const current = dataService.getNews();
    const updated = [item, ...current];
    dataService.saveNews(updated);
  },
  deleteNews: (id: string) => {
    const current = dataService.getNews();
    const updated = current.filter(n => n.id !== id);
    dataService.saveNews(updated);
  },

  // Products
  getProducts: (): ProductItem[] => {
    const data = localStorage.getItem(PRODUCTS_KEY);
    return data ? JSON.parse(data) : INITIAL_PRODUCTS;
  },
  saveProducts: (products: ProductItem[]) => {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  },

  // Inquiries
  getInquiries: (): ContactInquiry[] => {
    const data = localStorage.getItem(INQUIRIES_KEY);
    return data ? JSON.parse(data) : [];
  },
  addInquiry: (inquiry: ContactInquiry) => {
    const current = dataService.getInquiries();
    const updated = [inquiry, ...current];
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(updated));
  }
};