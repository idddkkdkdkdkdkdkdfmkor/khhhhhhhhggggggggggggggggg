import React from 'react';
import { Award, Trophy, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface SchoolAwardsPageProps {
  openAdmissionModal: () => void;
  setCurrentTab: (tab: string) => void;
}

export const SchoolAwardsPage: React.FC<SchoolAwardsPageProps> = ({ openAdmissionModal, setCurrentTab }) => {
  const awards = [
    {
      year: '2025',
      title: 'Top CBSE School for Holistic Pedagogy (Lucknow)',
      awardedBy: 'North India Education Summit & Leadership Awards',
      desc: 'Recognized for pioneering experiential learning, smart STEM laboratories, and outstanding 100% board examination outcomes.',
      category: 'Academic Excellence'
    },
    {
      year: '2024',
      title: 'Best Green & Eco-Friendly Campus Award',
      awardedBy: 'UP Environmental Education Forum',
      desc: 'Conferred upon Dhawapur Campus for its expansive 7,993 sq.m botanical perimeter, zero-carbon footprint practices, and solar power integration.',
      category: 'Infrastructure & Sustainability'
    },
    {
      year: '2023',
      title: 'Distinguished School Leadership Trophy',
      awardedBy: 'CBSE Regional Sahodaya Complex',
      desc: 'Awarded to Founder Chairman Shri Markandey Tewari and Senior Principal Dr. Charu Khare for exemplary contribution to secondary school education in Uttar Pradesh.',
      category: 'Leadership'
    },
    {
      year: '2023',
      title: 'Inter-School Sports Champions Trophy',
      awardedBy: 'Lucknow District Athletics Association',
      desc: 'Overall athletic team championship won by Vishwanath Academy students across Track & Field, Volleyball, and Badminton categories.',
      category: 'Sports & Games'
    },
    {
      year: '2022',
      title: 'Excellence in Digital Learning & AI Robotics',
      awardedBy: 'National STEM Learning Foundation',
      desc: 'Honoring the high-tech computer science and robotics curriculum implemented from Middle School through Senior Secondary.',
      category: 'Technology & Innovation'
    }
  ];

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            Honors & Accolades
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            School Awards & Recognition
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Celebrating decades of educational eminence, sports dominance, and visionary leadership recognized across Uttar Pradesh and India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-red-50 text-[#aa2c38] text-[11px] font-bold border border-red-200">
                    {award.category}
                  </span>
                  <span className="text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">
                    {award.year}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#aa2c38] flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 leading-snug">
                      {award.title}
                    </h3>
                    <p className="text-xs text-[#aa2c38] font-semibold mt-0.5">
                      Conferred by: {award.awardedBy}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {award.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
