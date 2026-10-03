import React, { useState } from 'react';
import { BookOpen, GraduationCap, Award, CheckCircle, FileText, Calendar, Users, Cpu, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AcademicsPageProps {
  openAdmissionModal: () => void;
  setCurrentTab: (tab: string) => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ openAdmissionModal, setCurrentTab }) => {
  const [activeStream, setActiveStream] = useState<'pcm' | 'pcb' | 'comm' | 'arts'>('pcm');

  const streams = {
    pcm: {
      name: 'Science Stream (PCM - Engineering & Technology)',
      subjects: ['Physics (Core & Practical)', 'Chemistry (Core & Practical)', 'Mathematics', 'English Core', 'Computer Science (Python) / Physical Education'],
      careers: ['IIT JEE Advanced & Mains', 'Architecture (NATA/JEE Paper 2)', 'Artificial Intelligence & Robotics', 'Merchant Navy & Defence NDA'],
      description: 'Rigorous analytical training led by senior subject faculties with comprehensive laboratory experimental hours and entrance preparation alignment.'
    },
    pcb: {
      name: 'Science Stream (PCB - Medical & Life Sciences)',
      subjects: ['Physics (Core & Practical)', 'Chemistry (Core & Practical)', 'Biology (Core & Practical)', 'English Core', 'Physical Education / Biotechnology'],
      careers: ['NEET-UG & MBBS/BDS', 'Biotechnology & Genetics', 'Pharmacy & Clinical Research', 'Veterinary & Agricultural Sciences'],
      description: 'Hands-on microscopic analysis, botanical specimen study, and physiological inquiry with dedicated NEET preparation support.'
    },
    comm: {
      name: 'Commerce Stream (Finance, Business & Economics)',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'English Core', 'Applied Mathematics / Informatics Practices (IP)'],
      careers: ['Chartered Accountancy (CA)', 'Company Secretary (CS)', 'CUET Top Commerce Colleges (SRCC)', 'Investment Banking & FinTech'],
      description: 'Real-world business case studies, virtual stock trading simulations, and balance sheet mastery prepare students for high finance.'
    },
    arts: {
      name: 'Humanities & Social Sciences',
      subjects: ['History', 'Political Science', 'Economics / Psychology', 'English Core', 'Sociology / Physical Education'],
      careers: ['UPSC Civil Services', 'Corporate Law (CLAT)', 'Journalism & Mass Media', 'Public Policy & Diplomacy'],
      description: 'Cultivating critical inquiry, dialectical discourse, essay writing, and constitutional awareness for future leaders and legal luminaries.'
    }
  };

  const houseSystem = [
    { name: 'Tagore House', color: 'bg-amber-500 text-slate-950', motto: 'Creativity, Literature & Arts', icon: '🎨' },
    { name: 'Raman House', color: 'bg-blue-600 text-white', motto: 'Scientific Inquiry & Innovation', icon: '🔬' },
    { name: 'Ashoka House', color: 'bg-emerald-600 text-white', motto: 'Valour, Discipline & Leadership', icon: '🛡️' },
    { name: 'Shivaji House', color: 'bg-[#aa2c38] text-white', motto: 'Courage, Resilience & Integrity', icon: '⚔️' },
  ];

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            CBSE Curriculum & Pedagogy
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Academic Excellence & Intellectual Inquiry
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Affiliated to CBSE, New Delhi. Aligning deep foundational knowledge with experiential learning, continuous assessment, and competitive entrance readiness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Academic Stages (Wings) */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
              Wing Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Four Progressive Academic Stages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition">
              <span className="w-10 h-10 rounded-xl bg-red-50 text-[#aa2c38] flex items-center justify-center font-bold text-sm">
                01
              </span>
              <h3 className="font-bold text-base text-slate-900">Foundational Stage</h3>
              <p className="text-xs font-semibold text-[#aa2c38]">Playgroup to Class II</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Play-way activity learning, phonics, fine motor development, splash pool playpen, and interactive Montessori-inspired storytelling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition">
              <span className="w-10 h-10 rounded-xl bg-red-50 text-[#aa2c38] flex items-center justify-center font-bold text-sm">
                02
              </span>
              <h3 className="font-bold text-base text-slate-900">Preparatory Stage</h3>
              <p className="text-xs font-semibold text-[#aa2c38]">Class III to V</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conceptual literacy, mathematical reasoning, environmental science discovery, creative arts, and foundational computer literacy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition">
              <span className="w-10 h-10 rounded-xl bg-red-50 text-[#aa2c38] flex items-center justify-center font-bold text-sm">
                03
              </span>
              <h3 className="font-bold text-base text-slate-900">Middle School Stage</h3>
              <p className="text-xs font-semibold text-[#aa2c38]">Class VI to VIII</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Subject-specialized classrooms, science laboratories, coding and AI robotics, third language, and inter-school debate forums.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition">
              <span className="w-10 h-10 rounded-xl bg-red-50 text-[#aa2c38] flex items-center justify-center font-bold text-sm">
                04
              </span>
              <h3 className="font-bold text-base text-slate-900">Secondary & Senior Sec.</h3>
              <p className="text-xs font-semibold text-[#aa2c38]">Class IX to XII (CBSE)</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                CBSE Board curriculum mastery, state-of-the-art Science/Commerce/Humanities streams, and structured JEE, NEET & CUET guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Senior Secondary Stream Selection Tab */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
                Classes XI & XII Curriculum
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Senior Secondary Stream Offerings
              </h3>
            </div>

            {/* Stream Selector Buttons */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-bold text-slate-600">
              <button
                onClick={() => setActiveStream('pcm')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  activeStream === 'pcm' ? 'bg-[#aa2c38] text-white shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Science (PCM)
              </button>
              <button
                onClick={() => setActiveStream('pcb')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  activeStream === 'pcb' ? 'bg-[#aa2c38] text-white shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Science (PCB)
              </button>
              <button
                onClick={() => setActiveStream('comm')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  activeStream === 'comm' ? 'bg-[#aa2c38] text-white shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Commerce
              </button>
              <button
                onClick={() => setActiveStream('arts')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  activeStream === 'arts' ? 'bg-[#aa2c38] text-white shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Humanities
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900">{streams[activeStream].name}</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{streams[activeStream].description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#aa2c38] uppercase tracking-wider block">
                  Subject Combinations:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {streams[activeStream].subjects.map((sub, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#aa2c38] shrink-0" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#ff885e] uppercase tracking-wider block">
                  Aligned Career Pathways:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {streams[activeStream].careers.map((car, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-[#ff885e] shrink-0" />
                      <span>{car}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Four Houses System */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
              Co-Curricular Brotherhood
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              The Four Houses System
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {houseSystem.map((house, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-center">
                <div className="text-3xl mb-2">{house.icon}</div>
                <h3 className="font-bold text-base text-slate-900">{house.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${house.color}`}>
                  {house.motto}
                </span>
                <p className="text-xs text-slate-500 pt-1">
                  Instilling teamwork, sportsmanship, and inter-house debates across campuses.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
