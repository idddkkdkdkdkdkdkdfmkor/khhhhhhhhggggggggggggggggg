import React, { useState } from 'react';
import { NOTICES_DATA } from '../data/schoolData';
import { Notice } from '../types';
import { Bell, Search, Filter, Calendar, Download, Printer, X, FileText, ArrowRight } from 'lucide-react';

export const NoticeBoardPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeNotice, setActiveNotice] = useState<Notice | null>(null);

  const categories = ['All', 'Circular', 'Holiday', 'Examination', 'Academic'];

  const filteredNotices = NOTICES_DATA.filter((notice) => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          notice.date.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            Official Announcements
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            School Notice Board & Circulars
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Stay abreast of all verified circulars, examination date sheets, holiday declarations, and school events for Aashiana and Dhawapur branches.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search circulars, date sheets, holidays..."
              className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#aa2c38] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredNotices.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveNotice(item)}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#aa2c38] transition p-5 flex flex-col justify-between group cursor-pointer space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#aa2c38]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {item.isNew && (
                      <span className="px-2 py-0.5 rounded-full bg-red-100 text-[#aa2c38] text-[10px] font-extrabold uppercase animate-pulse">
                        NEW
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
                      {item.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#aa2c38] transition leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.content}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#aa2c38]">
                <span>View Full Circular</span>
                <span className="group-hover:translate-x-1 transition">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
            <Bell className="w-10 h-10 text-slate-300 mx-auto" />
            <h4 className="font-bold text-slate-700">No notices found matching your query</h4>
            <p className="text-xs text-slate-500">Try searching for other keywords like "Holiday", "Exam", or "PTM".</p>
          </div>
        )}
      </div>

      {/* Notice Detail Modal */}
      {activeNotice && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-[#aa2c38] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  {activeNotice.category} Notice
                </span>
                <h3 className="text-base font-bold mt-0.5">
                  Published: {activeNotice.date}
                </h3>
              </div>
              <button
                onClick={() => setActiveNotice(null)}
                className="text-white/80 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <h4 className="text-base font-bold text-slate-900 leading-snug border-b border-slate-100 pb-3">
                {activeNotice.title}
              </h4>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 whitespace-pre-line">
                {activeNotice.content}
              </p>
              <div className="text-[11px] text-slate-500 italic">
                Issued by Office of the Senior Principal, Vishwanath Academy (CBSE Affiliated).
              </div>
            </div>

            <div className="bg-slate-50 px-6 py-3 flex items-center justify-between">
              <button
                onClick={() => alert(`Downloading circular: ${activeNotice.title}`)}
                className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save PDF</span>
              </button>
              <button
                onClick={() => setActiveNotice(null)}
                className="px-4 py-1.5 bg-[#aa2c38] text-white text-xs font-bold rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
