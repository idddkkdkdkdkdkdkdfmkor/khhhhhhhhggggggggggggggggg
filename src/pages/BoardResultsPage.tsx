import React from 'react';
import { Trophy, Award, CheckCircle2, ArrowRight, Star, TrendingUp } from 'lucide-react';
import { MANDATORY_PUBLIC_DISCLOSURE } from '../data/schoolData';

interface BoardResultsPageProps {
  openAdmissionModal: () => void;
  setCurrentTab: (tab: string) => void;
}

export const BoardResultsPage: React.FC<BoardResultsPageProps> = ({ openAdmissionModal, setCurrentTab }) => {
  const toppers = [
    {
      name: 'Priyanshu Verma',
      classLevel: 'Class XII (Science - PCM)',
      score: '98.4%',
      branch: 'Aashiana Branch',
      highlight: 'Centum 100/100 in Physics & Chemistry',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Aditi Srivastava',
      classLevel: 'Class XII (Commerce with IP)',
      score: '97.8%',
      branch: 'Aashiana Branch',
      highlight: 'Centum 100/100 in Accountancy & Informatics',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Utkarsh Singh',
      classLevel: 'Class X (CBSE Board)',
      score: '97.6%',
      branch: 'Dhawapur Branch',
      highlight: 'Perfect 100 in Mathematics & Science',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Shreya Shukla',
      classLevel: 'Class XII (Science - PCB)',
      score: '96.8%',
      branch: 'Dhawapur Branch',
      highlight: 'State Rank in Biology & NEET Qualifier',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Ananya Mishra',
      classLevel: 'Class X (CBSE Board)',
      score: '96.4%',
      branch: 'Aashiana Branch',
      highlight: 'Consistent School Scholar',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Kshitij Pandey',
      classLevel: 'Class XII (Humanities)',
      score: '96.2%',
      branch: 'Aashiana Branch',
      highlight: 'CUET 100th Percentile in History',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    }
  ];

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            Academic Eminence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            CBSE Board Exam Results & Toppers
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Consistent 100% CBSE Board pass rate, state ranks, and remarkable percentile achievements in Class X & XII examinations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Statistics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#aa2c38]">100%</span>
            <p className="text-xs font-bold text-slate-700 mt-1 uppercase">CBSE Pass Rate</p>
            <p className="text-[11px] text-slate-400">Class X & XII Boards</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#aa2c38]">98.4%</span>
            <p className="text-xs font-bold text-slate-700 mt-1 uppercase">Highest Score</p>
            <p className="text-[11px] text-slate-400">Science Stream</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#aa2c38]">42+</span>
            <p className="text-xs font-bold text-slate-700 mt-1 uppercase">Above 90% Marks</p>
            <p className="text-[11px] text-slate-400">Distinction Achievers</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#aa2c38]">3000+</span>
            <p className="text-xs font-bold text-slate-700 mt-1 uppercase">VNA Alumni</p>
            <p className="text-[11px] text-slate-400">In IITs, NITs, AIIMS, DU</p>
          </div>
        </div>

        {/* Board Toppers Gallery */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
              Merit Roll
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Outstanding Board Performers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppers.map((student, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#aa2c38] shadow-sm shrink-0"
                    />
                    <div>
                      <h3 className="font-bold text-base text-slate-900 group-hover:text-[#aa2c38] transition">
                        {student.name}
                      </h3>
                      <p className="text-xs text-slate-600">{student.classLevel}</p>
                      <p className="text-[11px] text-[#aa2c38] font-semibold">{student.branch}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{student.highlight}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Board Percentage:</span>
                  <span className="px-3 py-1 rounded-full bg-red-50 text-[#aa2c38] font-black text-sm border border-red-200">
                    {student.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Year CBSE Official Result Table */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#aa2c38]" />
              <span>CBSE Last 3-Year Official Board Result Summary</span>
            </h3>
            <span className="text-xs text-slate-400">Appendix-IX Certified</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-700 uppercase font-semibold">
                <tr>
                  <th className="p-3">Academic Session</th>
                  <th className="p-3">Class X Reg.</th>
                  <th className="p-3">Class X Passed</th>
                  <th className="p-3 text-center">Class X Pass %</th>
                  <th className="p-3">Class XII Reg.</th>
                  <th className="p-3">Class XII Passed</th>
                  <th className="p-3 text-center">Class XII Pass %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {MANDATORY_PUBLIC_DISCLOSURE.boardResults.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-3 font-bold text-slate-900">{row.year}</td>
                    <td className="p-3">{row.classX_registered}</td>
                    <td className="p-3 font-semibold text-emerald-600">{row.classX_passed}</td>
                    <td className="p-3 text-center font-bold text-emerald-600">{row.classX_percent}</td>
                    <td className="p-3">{row.classXII_registered}</td>
                    <td className="p-3 font-semibold text-emerald-600">{row.classXII_passed}</td>
                    <td className="p-3 text-center font-bold text-emerald-600">{row.classXII_percent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
