import React, { useState } from 'react';
import { Bell, ArrowRight, Calendar, X, FileText, Download } from 'lucide-react';
import { NOTICES_DATA } from '../data/schoolData';
import { Notice } from '../types';

export const NoticeTicker: React.FC = () => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [allNoticesModal, setAllNoticesModal] = useState(false);

  return (
    <>
      {/* Marquee Banner */}
      <div className="bg-blue-900 border-y border-amber-500/40 text-white py-2 px-4 shadow-sm flex items-center overflow-hidden">
        <div className="flex items-center gap-2 bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded text-xs shrink-0 z-10 shadow-xs">
          <Bell className="w-3.5 h-3.5 animate-bounce" />
          <span className="uppercase tracking-wider">Latest Circulars</span>
        </div>

        <div className="overflow-hidden whitespace-nowrap w-full ml-4 relative flex items-center">
          <div className="animate-marquee flex items-center gap-8 text-xs sm:text-sm">
            {NOTICES_DATA.map((notice) => (
              <button
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className="flex items-center gap-2 hover:text-amber-300 transition cursor-pointer text-left"
              >
                {notice.isNew && (
                  <span className="bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                    NEW
                  </span>
                )}
                <span className="font-semibold text-slate-200">{notice.title}</span>
                <span className="text-slate-400 text-xs">({notice.date})</span>
                <span className="text-amber-400 mx-2">•</span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setAllNoticesModal(true)}
          className="shrink-0 text-xs font-semibold text-amber-300 hover:text-white underline ml-4 pl-3 border-l border-blue-800 cursor-pointer hidden md:block"
        >
          View All Notices
        </button>
      </div>

      {/* Single Notice Detail Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-blue-950 text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                  <FileText className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Official Notice • {selectedNotice.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mt-0.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedNotice.date}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedNotice(null)}
                className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {selectedNotice.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-100">
                {selectedNotice.content}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-xs text-slate-500">
                  Issued by: Principal & Examination Controller, Vishwanath Academy
                </span>
                <button
                  onClick={() => alert('Official Circular PDF downloaded')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Circular</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-50 px-6 py-3 flex justify-end">
              <button
                onClick={() => setSelectedNotice(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* All Notices Modal */}
      {allNoticesModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-blue-950 text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-lg font-serif-heading">
                  Official School Notices & Circulars
                </h3>
              </div>
              <button
                onClick={() => setAllNoticesModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-3 divide-y divide-slate-100">
              {NOTICES_DATA.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setAllNoticesModal(false);
                    setSelectedNotice(item);
                  }}
                  className="pt-3 first:pt-0 cursor-pointer hover:bg-slate-50 p-2.5 rounded-lg transition"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500">{item.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800 hover:text-blue-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-1 mt-1">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 px-6 py-3 flex justify-end border-t border-slate-200">
              <button
                onClick={() => setAllNoticesModal(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
