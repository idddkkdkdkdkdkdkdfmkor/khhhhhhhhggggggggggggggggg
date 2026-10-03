import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { BookOpen, CheckCircle2, Award, GraduationCap } from 'lucide-react';

interface CurriculumPageProps {
  openAdmissionModal: () => void;
}

export const CurriculumPage: React.FC<CurriculumPageProps> = ({ openAdmissionModal }) => {
  return (
    <div className="w-full bg-white text-[#333333]">
      <div className="bg-[#f8fafc] border-b border-slate-200 py-10 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Curriculum & Academic Structure
          </h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            Home / Academics / Curriculum
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            CBSE Academic Framework
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Vishwanath Academy strictly follows the curriculum set by the Central Board of Secondary Education (CBSE), New Delhi, synchronized with the progressive directives of the National Education Policy (NEP) 2020.
          </p>
        </div>

        {/* Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-[#ff885e] uppercase tracking-wider block">Foundational Stage</span>
            <h3 className="text-lg font-bold text-slate-900">Pre-Primary to Class II</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Focus on sensory discovery, early phonics, joyful numeracy, motor coordination, and interactive play.
            </p>
          </div>

          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-[#aa2c38] uppercase tracking-wider block">Preparatory & Middle Stage</span>
            <h3 className="text-lg font-bold text-slate-900">Class III to Class VIII</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Subject depth in Mathematics, Science, Social Sciences, English, Hindi and Sanskrit with laboratory experiments.
            </p>
          </div>

          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Secondary & Sr. Secondary</span>
            <h3 className="text-lg font-bold text-slate-900">Class IX to Class XII</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Specialized streams in Science (PCM/PCB) and Commerce with career counselling and competitive entrance foundation.
            </p>
          </div>
        </div>

        <div className="pt-4">
          <button
            onClick={openAdmissionModal}
            className="px-6 py-3 bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-xs sm:text-sm rounded-full shadow-md transition cursor-pointer"
          >
            Apply for Admission 2026-27
          </button>
        </div>
      </div>
    </div>
  );
};
