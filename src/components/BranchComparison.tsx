import React from 'react';
import { BRANCHES_DATA } from '../data/schoolData';
import { BranchId } from '../types';
import { MapPin, Phone, Mail, Award, CheckCircle, ArrowRight, Compass, Shield } from 'lucide-react';

interface BranchComparisonProps {
  selectedBranch: BranchId;
  setSelectedBranch: (b: BranchId) => void;
  onExploreBranch: (b: BranchId) => void;
  onApplyBranch: (b: BranchId) => void;
}

export const BranchComparison: React.FC<BranchComparisonProps> = ({
  selectedBranch,
  setSelectedBranch,
  onExploreBranch,
  onApplyBranch,
}) => {
  const aashiana = BRANCHES_DATA.aashiana;
  const dhawapur = BRANCHES_DATA.dhawapur;

  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            Two Premier Campuses in Lucknow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-serif-heading mt-3">
            Choose Your Closest Vishwanath Academy Campus
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Both branches follow the rigorous CBSE curriculum, maintaining identical academic standards, qualified educators, and state-of-the-art laboratory and athletic amenities.
          </p>
        </div>

        {/* Campuses Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Aashiana Campus Card */}
          <div 
            className={`rounded-2xl overflow-hidden transition-all duration-300 border-2 bg-white flex flex-col justify-between shadow-lg ${
              selectedBranch === 'aashiana' 
                ? 'border-amber-500 ring-4 ring-amber-400/20' 
                : 'border-slate-200 hover:border-blue-400'
            }`}
          >
            <div>
              {/* Image banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={aashiana.bannerImage}
                  alt={aashiana.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>
                <div className="absolute top-4 left-4 bg-blue-900/90 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
                  Affiliation No: {aashiana.affiliationNo}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold font-serif-heading">{aashiana.name}</h3>
                  <p className="text-xs text-amber-300 font-medium">{aashiana.tagline}</p>
                </div>
              </div>

              {/* Details & Highlights */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{aashiana.fullAddress}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Principal</span>
                    <span className="font-semibold text-slate-900">{aashiana.principalName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Campus Area</span>
                    <span className="font-semibold text-slate-900">{aashiana.campusArea}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">School Timings</span>
                    <span className="font-semibold text-slate-900">{aashiana.timings}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Key Focus</span>
                    <span className="font-semibold text-slate-900">Robotics, AI & Academic Top Scores</span>
                  </div>
                </div>

                {/* Key Features checklist */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Campus Facilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {aashiana.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact numbers */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span className="font-semibold">{aashiana.phones[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>{aashiana.emails[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex gap-3">
              <button
                onClick={() => {
                  setSelectedBranch('aashiana');
                  onApplyBranch('aashiana');
                }}
                className="flex-1 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs sm:text-sm rounded-xl transition text-center shadow-md cursor-pointer"
              >
                Apply to Aashiana
              </button>
              <button
                onClick={() => {
                  setSelectedBranch('aashiana');
                  onExploreBranch('aashiana');
                }}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm rounded-xl transition cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Dhawapur Campus Card */}
          <div 
            className={`rounded-2xl overflow-hidden transition-all duration-300 border-2 bg-white flex flex-col justify-between shadow-lg ${
              selectedBranch === 'dhawapur' 
                ? 'border-amber-500 ring-4 ring-amber-400/20' 
                : 'border-slate-200 hover:border-blue-400'
            }`}
          >
            <div>
              {/* Image banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dhawapur.bannerImage}
                  alt={dhawapur.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>
                <div className="absolute top-4 left-4 bg-emerald-900/90 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/30">
                  Affiliation No: {dhawapur.affiliationNo}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold font-serif-heading">{dhawapur.name}</h3>
                  <p className="text-xs text-amber-300 font-medium">{dhawapur.tagline}</p>
                </div>
              </div>

              {/* Details & Highlights */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{dhawapur.fullAddress}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Principal</span>
                    <span className="font-semibold text-slate-900">{dhawapur.principalName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Campus Area</span>
                    <span className="font-semibold text-slate-900">{dhawapur.campusArea}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">School Timings</span>
                    <span className="font-semibold text-slate-900">{dhawapur.timings}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Key Focus</span>
                    <span className="font-semibold text-slate-900">Expansive Sports Arena & Science Labs</span>
                  </div>
                </div>

                {/* Key Features checklist */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Campus Facilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {dhawapur.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact numbers */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span className="font-semibold">{dhawapur.phones[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>{dhawapur.emails[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex gap-3">
              <button
                onClick={() => {
                  setSelectedBranch('dhawapur');
                  onApplyBranch('dhawapur');
                }}
                className="flex-1 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl transition text-center shadow-md cursor-pointer"
              >
                Apply to Dhawapur
              </button>
              <button
                onClick={() => {
                  setSelectedBranch('dhawapur');
                  onExploreBranch('dhawapur');
                }}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm rounded-xl transition cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
