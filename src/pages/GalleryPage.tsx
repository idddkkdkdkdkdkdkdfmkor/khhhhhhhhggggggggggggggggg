import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import { Sparkles, Tag, Maximize2 } from 'lucide-react';

interface GalleryPageProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Academics', 'Labs', 'Sports', 'Events', 'Campus', 'Art'];

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full bg-slate-50">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
            Visual Archive
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-heading">
            Vishwanath Academy Photo Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Witness the vibrant campus life, athletic achievements, science exhibitions, and annual celebrations across our Lucknow branches.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-950 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-72 bg-white border border-slate-200"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition"></div>

              {/* Hover Zoom icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <h3 className="text-base font-bold mt-1.5 font-serif-heading line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
