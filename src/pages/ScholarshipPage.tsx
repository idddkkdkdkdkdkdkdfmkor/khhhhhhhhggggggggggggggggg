import React from 'react';
import { Award, CheckCircle2, ArrowRight, Sparkles, BookOpen, Star, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface ScholarshipPageProps {
  openAdmissionModal: () => void;
  setCurrentTab: (tab: string) => void;
}

export const ScholarshipPage: React.FC<ScholarshipPageProps> = ({ openAdmissionModal, setCurrentTab }) => {
  const scholarships = [
    {
      title: 'Bright Child Merit Scholarship',
      waiver: 'Up to 100% Tuition Fee Waiver',
      eligibility: 'Students securing 90%+ in previous annual exam or CBSE Board Class X.',
      criteria: 'Applicable for Classes IX to XII at both Aashiana and Dhawapur campuses.',
      badge: 'Prestigious Merit',
    },
    {
      title: 'Sports Star Excellence Scholarship',
      waiver: '50% to 75% Tuition Fee Waiver',
      eligibility: 'Medalists and participants at State / National CBSE Inter-School meets.',
      criteria: 'Available for track athletes, badminton, cricket, and volleyball players.',
      badge: 'Athletics & Games',
    },
    {
      title: 'Defense & Martyrs Ward Grant',
      waiver: 'Special 25% Concession',
      eligibility: 'Wards of Indian Armed Forces, Paramilitary, and Police martyrs.',
      criteria: 'Valid across all wings from Nursery to Class XII.',
      badge: 'National Honor',
    },
    {
      title: 'Sibling & Girl Child Empowerment Grant',
      waiver: '15% Sibling Discount',
      eligibility: 'Second sibling enrolled at Vishwanath Academy or single girl child.',
      criteria: 'Granted upon verification of family enrollment records.',
      badge: 'Family Support',
    }
  ];

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            Empowerment Through Education
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Students with Scholarship
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Vishwanath Academy's Bright Child Scholarship Scheme rewards talent, dedication, and academic brilliance, ensuring financial constraints never hinder a deserving child.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Intro Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center">
          <div className="w-20 h-20 rounded-2xl bg-red-50 text-[#aa2c38] flex items-center justify-center shrink-0">
            <img
              src={SCHOOL_INFO.scholarshipIcon}
              alt="Scholarship"
              className="w-14 h-14 object-contain"
            />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              The Bright Child Scholarship Program
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every year, Vishwanath Academy honors outstanding students with substantial fee waivers. Our mission is to discover high-potential young minds, nurture their cognitive instincts, and propel them to state and national leadership.
            </p>
          </div>
        </div>

        {/* Scholarship Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scholarships.map((sch, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-red-50 text-[#aa2c38] text-[11px] font-bold border border-red-200">
                    {sch.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    {sch.waiver}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">{sch.title}</h3>

                <div className="space-y-2 text-xs text-slate-600 pt-1">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#aa2c38] shrink-0 mt-0.5" />
                    <span><strong>Eligibility:</strong> {sch.eligibility}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#aa2c38] shrink-0 mt-0.5" />
                    <span><strong>Applicability:</strong> {sch.criteria}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={openAdmissionModal}
                  className="px-4 py-2 bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Apply for Scholarship</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Process */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-base text-slate-900">How to Avail Scholarship:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#aa2c38] text-white flex items-center justify-center font-bold text-xs">1</span>
              <h4 className="font-bold text-slate-900">Fill Admission Form</h4>
              <p className="text-slate-600">Register through the online portal or visit campus admissions office.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#aa2c38] text-white flex items-center justify-center font-bold text-xs">2</span>
              <h4 className="font-bold text-slate-900">Submit Academic Proof</h4>
              <p className="text-slate-600">Upload previous class report card, Board mark sheet, or sports certificate.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#aa2c38] text-white flex items-center justify-center font-bold text-xs">3</span>
              <h4 className="font-bold text-slate-900">Scholarship Award</h4>
              <p className="text-slate-600">The committee evaluates the profile and applies tuition fee concession directly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
