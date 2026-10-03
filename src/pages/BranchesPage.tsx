import React, { useState } from 'react';
import { BRANCHES_DATA } from '../data/schoolData';
import { BranchId } from '../types';
import { 
  MapPin, Phone, Mail, Clock, Award, CheckCircle, 
  Sparkles, ExternalLink, ShieldCheck, Bus, Compass, ArrowRight
} from 'lucide-react';

interface BranchesPageProps {
  selectedBranch: BranchId;
  setSelectedBranch: (b: BranchId) => void;
  openAdmissionModal: () => void;
  setCurrentTab: (tab: string) => void;
}

export const BranchesPage: React.FC<BranchesPageProps> = ({
  selectedBranch,
  setSelectedBranch,
  openAdmissionModal,
  setCurrentTab,
}) => {
  const [activeTab, setActiveTab] = useState<BranchId>(selectedBranch);

  const activeBranchData = BRANCHES_DATA[activeTab];

  const handleBranchSwitch = (b: BranchId) => {
    setActiveTab(b);
    setSelectedBranch(b);
  };

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            Campuses & Branches
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Two Thriving Academic Campuses in Lucknow
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Explore our state-of-the-art infrastructure across Aashiana and Dhawapur. Identical CBSE excellence, tailored to your geographic convenience.
          </p>

          {/* Branch Switcher Tabs */}
          <div className="pt-6 flex justify-center gap-3">
            <button
              onClick={() => handleBranchSwitch('aashiana')}
              className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition cursor-pointer shadow-md ${
                activeTab === 'aashiana'
                  ? 'bg-white text-[#aa2c38] ring-4 ring-white/30'
                  : 'bg-black/30 text-white hover:bg-black/50'
              }`}
            >
              Aashiana Campus (City Center)
            </button>
            <button
              onClick={() => handleBranchSwitch('dhawapur')}
              className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition cursor-pointer shadow-md ${
                activeTab === 'dhawapur'
                  ? 'bg-white text-[#aa2c38] ring-4 ring-white/30'
                  : 'bg-black/30 text-white hover:bg-black/50'
              }`}
            >
              Dhawapur Campus (Lush Green Grounds)
            </button>
          </div>
        </div>
      </div>

      {/* Main Campus Profile Details */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Campus Overview & Visual */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative">
              <img
                src={activeTab === 'aashiana' ? 'https://vishwanathacademy.com/wp-content/uploads/2023/09/ashiyana.jpg' : 'https://vishwanathacademy.com/wp-content/uploads/2023/09/dhawapur_home_page.png'}
                alt={activeBranchData.name}
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl shadow-md border border-slate-200 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">
                  CBSE Affiliation No: {activeBranchData.affiliationNo}
                </span>
              </div>
            </div>

            {/* Principal Quote */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-5 items-center">
              <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-[#aa2c38] shrink-0">
                <img
                  src={activeTab === 'aashiana' ? 'https://vishwanathacademy.com/wp-content/uploads/2023/09/Charu_Khare_pic.jpg' : 'https://vishwanathacademy.com/wp-content/uploads/2023/09/Chhaya_Joshi_pic.jpg'}
                  alt={activeBranchData.principalName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-bold text-slate-900 text-sm">{activeBranchData.principalName}</h4>
                <p className="text-xs font-semibold text-[#aa2c38]">{activeBranchData.principalQualification}</p>
                <p className="text-xs text-slate-600 italic leading-relaxed pt-1">
                  “{activeBranchData.principalMessage}”
                </p>
              </div>
            </div>

            {/* Key Campus Infrastructure Specifications */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#aa2c38]" />
                <span>Campus Features & Facilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeBranchData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-[#aa2c38] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Details, Map & Helpline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Campus Facts */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-3">
                Official Campus Credentials
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Campus Area:</span>
                  <strong className="text-slate-800">{activeBranchData.campusArea}</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">CBSE Affiliation:</span>
                  <strong className="text-slate-800">{activeBranchData.affiliationNo}</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">CBSE School Code:</span>
                  <strong className="text-slate-800">{activeBranchData.schoolCode}</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Classrooms Count:</span>
                  <strong className="text-slate-800">{activeBranchData.classroomsCount}+ Rooms</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">School Timings:</span>
                  <strong className="text-slate-800 text-right">{activeBranchData.timings}</strong>
                </div>
              </div>

              {/* Direct Admission CTA */}
              <button
                onClick={openAdmissionModal}
                className="w-full py-3 bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Register for {activeBranchData.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Address & Direct Helpline */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-3">
                Location & Helpline
              </h3>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#aa2c38] shrink-0 mt-0.5" />
                  <span>{activeBranchData.fullAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div className="space-x-2">
                    {activeBranchData.phones.map((phone, idx) => (
                      <a key={idx} href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="font-bold text-slate-800 hover:text-[#aa2c38]">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                  <a href={`mailto:${activeBranchData.emails[0]}`} className="text-slate-800 hover:underline">
                    {activeBranchData.emails[0]}
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-64 bg-slate-100">
              <iframe
                title={`${activeBranchData.name} Google Map`}
                src={activeBranchData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
