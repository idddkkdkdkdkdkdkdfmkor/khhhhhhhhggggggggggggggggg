import React from 'react';
import { SCHOOL_INFO, LEADERSHIP_TEAM } from '../data/schoolData';
import { Award, Compass, Eye, ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight, BookOpen, Users } from 'lucide-react';

interface AboutPageProps {
  openAdmissionModal: () => void;
  setCurrentTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openAdmissionModal, setCurrentTab }) => {
  return (
    <div className="w-full bg-white text-slate-800">
      {/* Banner */}
      <div className="relative bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            About K.G. Senior Secondary School
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Nurturing Tomorrow's Visionaries Since 1990
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Under the visionary aegis of {SCHOOL_INFO.founder}, creating an educational ecosystem steeped in value-based learning and character building.
          </p>
        </div>
      </div>

      {/* Genesis & History */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#aa2c38] bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Our Genesis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              A Legacy of Educational Eminence in Gurugram
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Established in <strong className="text-slate-900">1990</strong>, K.G. Senior Secondary School was founded under the aegis of <strong>{SCHOOL_INFO.societyName}</strong> to cater to students across Sector 21, Dundahera, and the Delhi-Gurgaon border corridor.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              What began as a committed vision to provide high-quality English-medium schooling has now burgeoned into recognized Senior Secondary (Science, Commerce, Humanities) and Primary Foundational wings with UDISE code <strong>06180100104</strong>.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We stand firm on the principle that true education transcends rote learning: it must chisel character, awaken artistic sensitivity, spark scientific inquiry, and build resilient citizens.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-2xl font-black text-[#aa2c38] block">1990</span>
                <span className="text-xs font-bold text-slate-800">Foundation Year</span>
                <span className="text-[11px] text-slate-500 block">35+ Years of Service</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-2xl font-black text-[#aa2c38] block">100%</span>
                <span className="text-xs font-bold text-slate-800">Board Pass Rate</span>
                <span className="text-[11px] text-slate-500 block">Class X & XII Results</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src={SCHOOL_INFO.whyImage}
                alt="K.G. Senior Secondary School Campus"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <p className="font-bold text-base">“Knowledge, Character, Excellence”</p>
                  <p className="text-xs text-amber-200">तमसो मा ज्योतिर्गमय - Lead us from darkness to light</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#fafafa] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff885e]">
              Core Foundations
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Vision & Mission Statements
            </h2>
            <p className="text-slate-600 text-sm">
              Anchoring 21st-century pedagogy in timeless Indian ethical values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#aa2c38] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                To create a vibrant center of holistic learning that empowers students to discover their inner potential, instills universal ethical values, and equips them with critical thinking, digital fluency, and leadership attributes to serve our nation and the global community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff885e] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                To provide safe, state-of-the-art learning environments across our campuses; recruit and develop compassionate educators; execute CBSE and NEP 2020 experiential learning curricula; and foster an inclusive culture where every learner develops a thirst for discovery and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#aa2c38]">
            Guiding Lights
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Messages from Our Leadership
          </h2>
          <p className="text-slate-600 text-sm">
            “Art of Teaching is the Art of Assisting Discovery.”
          </p>
        </div>

        <div className="space-y-8">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover object-top border-2 border-[#aa2c38] shadow-md shrink-0"
              />
              <div className="space-y-3 flex-1 text-center md:text-left">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-xs font-bold text-[#aa2c38]">{leader.role}</p>
                  <p className="text-xs text-slate-500">{leader.group}</p>
                </div>
                <blockquote className="text-xs sm:text-sm text-slate-600 italic bg-slate-50 p-4 rounded-xl border-l-4 border-[#aa2c38] leading-relaxed">
                  “{leader.message}”
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 bg-[#161922] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold">Join Vishwanath Academy Family</h3>
            <p className="text-xs text-slate-300">Admissions open for session 2026-27 at Aashiana & Dhawapur.</p>
          </div>
          <button
            onClick={openAdmissionModal}
            className="px-8 py-3 bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-xs rounded-full shadow-lg transition cursor-pointer"
          >
            Apply Online Now
          </button>
        </div>
      </section>
    </div>
  );
};
