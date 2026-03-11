import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, ArrowLeft, Filter, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', 'Logistics', 'Marketing', 'Wellness', 'Corporate'];

  const posts = [
    {
      id: 1,
      title: 'Navigating Cross-Border Trade in 2024',
      category: 'Logistics',
      author: 'John Kamau',
      date: 'March 15, 2024',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/service-logistics-2541e754-1773216296343.webp',
      excerpt: 'How new digital infrastructure is simplifying trade across the East African Community.'
    },
    {
      id: 2,
      title: 'The Rise of Personalization in Digital Ads',
      category: 'Marketing',
      author: 'Elena Kipruto',
      date: 'March 12, 2024',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/service-digital-marketing-1417a89e-1773216307439.webp',
      excerpt: 'Why hyper-local targeting is the secret weapon for Kenyan brands this year.'
    },
    {
      id: 3,
      title: 'Mental Health in the Modern Workplace',
      category: 'Wellness',
      author: 'David Omondi',
      date: 'March 08, 2024',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/service-health-wellness-c5276f1c-1773216296564.webp',
      excerpt: 'Strategies for leadership to support employee well-being beyond basic benefits.'
    },
    {
       id: 4,
       title: 'Sustainability in Modern Supply Chains',
       category: 'Logistics',
       author: 'John Kamau',
       date: 'Feb 28, 2024',
       image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1e4dbade-f95d-45c4-a17f-bc68e4d07a88/hero-bg-8fc67095-1773216307574.webp',
       excerpt: 'The move towards green logistics and what it means for the bottom line.'
    }
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            badge="Insights"
            title="The Move Different Blog"
            description="Deep dives into industry trends, corporate strategy, and wellness innovation."
            center
          />

          <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-6 max-w-6xl mx-auto bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100">
            <div className="relative w-full lg:w-2/5">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-14 pr-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none font-medium"
              />
            </div>
            <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                className="flex flex-col group h-full bg-white rounded-[2.5rem] border border-slate-50 shadow-sm"
              >
                <div className="relative aspect-video overflow-hidden rounded-[2.5rem] p-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-[2rem]"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 pt-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                    <Calendar size={16} /> {post.date}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <button className="text-slate-900 font-bold flex items-center gap-2">
                      Read More <ArrowRight size={18} />
                    </button>
                    <div className="flex items-center gap-2">
                      <Share2 size={18} className="text-slate-400" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 flex justify-center items-center gap-4">
            <button className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">1</button>
            <button className="w-12 h-12 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;