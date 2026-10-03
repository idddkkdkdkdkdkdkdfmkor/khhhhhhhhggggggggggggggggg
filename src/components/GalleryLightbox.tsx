import React from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onNext,
  onPrev,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Nav buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/80 transition z-50"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/80 transition z-50"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image container */}
      <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
        />
        <div className="mt-4 text-center text-white space-y-1 max-w-2xl px-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs">
            <Tag className="w-3 h-3" />
            <span>{item.category}</span>
          </div>
          <h4 className="text-lg font-bold font-serif-heading">{item.title}</h4>
          <p className="text-slate-300 text-xs sm:text-sm">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
