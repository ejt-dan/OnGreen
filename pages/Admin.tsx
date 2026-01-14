import React, { useState, useEffect } from 'react';
import { dataService } from '../services/dataService';
import { NewsItem, ProductItem, ContactInquiry } from '../types';
import { Plus, Trash2, Edit2, LogOut, Package, FileText, MessageSquare } from 'lucide-react';

export const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'news' | 'inquiries'>('news');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  
  // Edit/Create State
  const [isEditing, setIsEditing] = useState(false);
  const [currentNews, setCurrentNews] = useState<Partial<NewsItem>>({});

  useEffect(() => {
    // Check if previously logged in (simplified session)
    const session = sessionStorage.getItem('ongreen_admin');
    if (session === 'true') {
      setIsLoggedIn(true);
      refreshData();
    }
  }, []);

  const refreshData = () => {
    setNews(dataService.getNews());
    setInquiries(dataService.getInquiries());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin1234') { // Simple password for demo
      setIsLoggedIn(true);
      sessionStorage.setItem('ongreen_admin', 'true');
      refreshData();
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('ongreen_admin');
  };

  // News CRUD
  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentNews.title || !currentNews.summary) return;

    const newItem: NewsItem = {
      id: currentNews.id || Date.now().toString(),
      title: currentNews.title || '',
      summary: currentNews.summary || '',
      category: currentNews.category || 'News',
      date: currentNews.date || new Date().toISOString().split('T')[0],
      content: currentNews.content || '',
      imageUrl: currentNews.imageUrl || 'https://picsum.photos/800/600',
    };

    if (currentNews.id) {
       // Update existing
       const updated = news.map(n => n.id === currentNews.id ? newItem : n);
       dataService.saveNews(updated);
    } else {
       // Create new
       dataService.addNews(newItem);
    }
    
    setIsEditing(false);
    setCurrentNews({});
    refreshData();
  };

  const handleDeleteNews = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dataService.deleteNews(id);
      refreshData();
    }
  };

  const startEdit = (item: NewsItem) => {
    setCurrentNews(item);
    setIsEditing(true);
  };

  const startCreate = () => {
    setCurrentNews({});
    setIsEditing(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center px-4">
        <div className="bg-brand-gray p-8 rounded-sm max-w-md w-full border border-white/10">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Password (admin1234)" 
              className="w-full bg-black border border-white/20 p-3 rounded focus:border-brand-green outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="w-full bg-brand-green text-white p-3 rounded font-bold hover:bg-brand-lightGreen">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <div className="w-4 h-4 bg-brand-green rounded-full"></div>
            Admin Dashboard
          </h1>
          <button onClick={handleLogout} className="flex items-center text-gray-400 hover:text-white">
            <LogOut size={18} className="mr-2" /> Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button 
            onClick={() => setActiveTab('news')}
            className={`flex items-center px-6 py-3 rounded-sm font-medium transition-colors ${activeTab === 'news' ? 'bg-brand-green text-white' : 'bg-brand-gray text-gray-400'}`}
          >
            <FileText size={18} className="mr-2" /> News Management
          </button>
          <button 
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center px-6 py-3 rounded-sm font-medium transition-colors ${activeTab === 'inquiries' ? 'bg-brand-green text-white' : 'bg-brand-gray text-gray-400'}`}
          >
            <MessageSquare size={18} className="mr-2" /> Inquiries <span className="ml-2 bg-white text-brand-green text-xs rounded-full px-2">{inquiries.length}</span>
          </button>
        </div>

        {/* Content Area */}
        {activeTab === 'news' && (
          <div>
            {!isEditing ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">News List</h3>
                  <button onClick={startCreate} className="bg-brand-green hover:bg-brand-lightGreen px-4 py-2 rounded flex items-center gap-2 text-sm font-bold">
                    <Plus size={16} /> Add New
                  </button>
                </div>
                <div className="bg-brand-gray rounded border border-white/5 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-white/5 text-xs uppercase text-gray-400">
                      <tr>
                        <th className="p-4">Date</th>
                        <th className="p-4">Title</th>
                        <th className="p-4">Category</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {news.map((item) => (
                        <tr key={item.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-4 text-gray-400 text-sm">{item.date}</td>
                          <td className="p-4 font-medium">{item.title}</td>
                          <td className="p-4"><span className="text-xs bg-brand-green/20 text-brand-green px-2 py-1 rounded">{item.category}</span></td>
                          <td className="p-4 text-right space-x-2">
                            <button onClick={() => startEdit(item)} className="text-blue-400 hover:text-white p-1"><Edit2 size={16} /></button>
                            <button onClick={() => handleDeleteNews(item.id)} className="text-red-400 hover:text-white p-1"><Trash2 size={16} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <div className="bg-brand-gray p-8 rounded border border-white/10 animate-fadeIn">
                <h3 className="text-xl font-bold mb-6">{currentNews.id ? 'Edit News' : 'Create News'}</h3>
                <form onSubmit={handleSaveNews} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Title</label>
                      <input 
                        className="w-full bg-black border border-white/20 p-3 rounded focus:border-brand-green outline-none" 
                        value={currentNews.title || ''} 
                        onChange={e => setCurrentNews({...currentNews, title: e.target.value})} 
                        required
                      />
                    </div>
                     <div>
                      <label className="block text-sm text-gray-400 mb-2">Category</label>
                      <input 
                        className="w-full bg-black border border-white/20 p-3 rounded focus:border-brand-green outline-none" 
                        value={currentNews.category || ''} 
                        onChange={e => setCurrentNews({...currentNews, category: e.target.value})} 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Summary</label>
                    <textarea 
                      className="w-full bg-black border border-white/20 p-3 rounded focus:border-brand-green outline-none h-24 resize-none" 
                      value={currentNews.summary || ''} 
                      onChange={e => setCurrentNews({...currentNews, summary: e.target.value})} 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Content (Full Text)</label>
                    <textarea 
                      className="w-full bg-black border border-white/20 p-3 rounded focus:border-brand-green outline-none h-40" 
                      value={currentNews.content || ''} 
                      onChange={e => setCurrentNews({...currentNews, content: e.target.value})} 
                    />
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="bg-brand-green hover:bg-brand-lightGreen px-6 py-2 rounded font-bold">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)} className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded">Cancel</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {activeTab === 'inquiries' && (
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Inquiries</h3>
             <div className="bg-brand-gray rounded border border-white/5 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-white/5 text-xs uppercase text-gray-400">
                    <tr>
                      <th className="p-4">Date</th>
                      <th className="p-4">Name</th>
                      <th className="p-4">Company</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {inquiries.length > 0 ? inquiries.map((item) => (
                      <tr key={item.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 text-gray-400 text-sm whitespace-nowrap">{item.date}</td>
                        <td className="p-4 font-medium whitespace-nowrap">{item.name}</td>
                        <td className="p-4 text-sm text-gray-300">{item.company}</td>
                        <td className="p-4 text-sm text-gray-300">{item.email}</td>
                        <td className="p-4 text-sm text-gray-400 max-w-xs truncate" title={item.message}>{item.message}</td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-gray-500">No inquiries found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};