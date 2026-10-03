import React, { useState } from 'react';
import { FeeCalculator } from '../components/FeeCalculator';
import { FEE_STRUCTURE_DATA, SCHOOL_INFO } from '../data/schoolData';
import { BranchId } from '../types';
import { 
  Sparkles, CheckCircle2, AlertCircle, FileText, Download, 
  HelpCircle, Calendar, ArrowRight, UserCheck 
} from 'lucide-react';

interface AdmissionsPageProps {
  openAdmissionModal: () => void;
  selectedBranch: BranchId;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ openAdmissionModal, selectedBranch }) => {
  const [feeBranchView, setFeeBranchView] = useState<BranchId>(selectedBranch);

  const ageCriteria = [
    { classLevel: 'Playgroup (PG)', ageRequired: '2 Years 6 Months as on 31st March' },
    { classLevel: 'Nursery', ageRequired: '3 Years to 4 Years as on 31st March' },
    { classLevel: 'LKG (Lower KG)', ageRequired: '4 Years to 5 Years as on 31st March' },
    { classLevel: 'UKG (Upper KG)', ageRequired: '5 Years to 6 Years as on 31st March' },
    { classLevel: 'Class I', ageRequired: '6 Years to 7 Years as on 31st March' },
    { classLevel: 'Classes II to IX', ageRequired: 'Based on previous class passing & Transfer Certificate' },
    { classLevel: 'Class XI', ageRequired: 'Based on CBSE/ICSE/State Board Class X score' },
  ];

  const documentsRequired = [
    'Original Transfer Certificate (TC) from previous recognized school (countersigned if from outside Lucknow district)',
    'Photocopy of previous class Marksheet / Report Card (duly attested)',
    'Permanent Education Number (PEN) from previous school U-DISE record',
    'Self-attested Municipal Birth Certificate for Pre-Primary to Class I',
    'Two recent passport-sized color photographs of the student',
    'One passport-sized photograph of each parent / legal guardian',
    'Photocopy of Aadhaar Card of student and parents',
    'Caste Certificate (if applying under SC/ST/OBC category)',
  ];

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            Admissions Session 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Begin Your Child's Bright Future
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Admissions open for Playgroup, Nursery to Class IX, and Class XI (Science & Commerce) across Aashiana and Dhawapur Campuses.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={openAdmissionModal}
              className="px-8 py-3.5 bg-white text-[#aa2c38] hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-full shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#aa2c38]" />
              <span>Fill Online Registration Form</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Step-by-Step Admission Procedure */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Admission Procedure & Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#aa2c38] text-white flex items-center justify-center font-bold text-xs">
                1
              </span>
              <h4 className="font-bold text-sm text-slate-900">Inquiry & Registration</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit online application form or obtain admission brochure directly from campus office.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#aa2c38] text-white flex items-center justify-center font-bold text-xs">
                2
              </span>
              <h4 className="font-bold text-sm text-slate-900">Interaction / Assessment</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Informal interaction for pre-primary; basic diagnostic aptitude assessment for classes I to IX & XI.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#aa2c38] text-white flex items-center justify-center font-bold text-xs">
                3
              </span>
              <h4 className="font-bold text-sm text-slate-900">Document Verification</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verification of TC, previous report cards, birth certificate, and student Aadhaar card.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#aa2c38] text-white flex items-center justify-center font-bold text-xs">
                4
              </span>
              <h4 className="font-bold text-sm text-slate-900">Fee Deposit & Scholar ID</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deposit fee in easy installments to generate Scholar Number and welcome kit.
              </p>
            </div>
          </div>
        </div>

        {/* Age Criteria & Mandatory Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Age Eligibility */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#aa2c38]" />
              <span>Age Criteria (As on 31st March 2026)</span>
            </h3>
            <div className="space-y-2">
              {ageCriteria.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <span className="font-bold text-slate-800">{item.classLevel}</span>
                  <span className="text-slate-600 font-medium text-right">{item.ageRequired}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mandatory Documents */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#aa2c38]" />
              <span>Mandatory Documents Required</span>
            </h3>
            <div className="space-y-2">
              {documentsRequired.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#aa2c38] shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Fee Calculator Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Official Fee Structure & Estimator
              </h2>
              <p className="text-xs text-slate-500">
                Transparent CBSE composite annual fee schedule payable in quarterly installments.
              </p>
            </div>

            {/* Campus Selector for Fees */}
            <div className="flex p-1 bg-slate-200 rounded-xl text-xs font-bold text-slate-700">
              <button
                onClick={() => setFeeBranchView('aashiana')}
                className={`px-4 py-2 rounded-lg transition cursor-pointer ${
                  feeBranchView === 'aashiana' ? 'bg-[#aa2c38] text-white shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Aashiana Campus
              </button>
              <button
                onClick={() => setFeeBranchView('dhawapur')}
                className={`px-4 py-2 rounded-lg transition cursor-pointer ${
                  feeBranchView === 'dhawapur' ? 'bg-[#aa2c38] text-white shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Dhawapur Campus
              </button>
            </div>
          </div>

          <FeeCalculator selectedBranch={feeBranchView} />
        </div>
      </div>
    </div>
  );
};
