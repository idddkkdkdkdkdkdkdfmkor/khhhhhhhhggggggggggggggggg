import React from 'react';
import { SCHOOL_INFO, LEADERSHIP_TEAM } from '../data/schoolData';
import { CheckCircle2, Eye, Compass, Award } from 'lucide-react';

interface AboutUsPageProps {
  openAdmissionModal: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ openAdmissionModal }) => {
  return (
    <div className="w-full bg-white text-[#333333]">
      {/* Banner Breadcrumb */}
      <div className="bg-[#f8fafc] border-b border-slate-200 py-10 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            About Us
          </h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            Home / About Us
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Welcome to <span className="text-[#aa2c38]">Vishwanath Academy</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Established on <strong>April 24, 2006</strong>, Vishwanath Academy was founded under <strong>The Vishwanath Group</strong> and registered under the <strong>Vishwanath Academy of Sciences</strong>.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Over the last 18+ years, the institution has flourished into two premier CBSE affiliated co-educational senior secondary campuses in Lucknow: <strong>Aashiana Branch</strong> (Sector M-1, Parag Dairy Road) and <strong>Dhawapur Branch</strong> (Kanpur - Mohanlalganj Road, near Memora Airforce Station).
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We focus our dedication towards evoking a passion for learning and developing the requisite set of attitudes, skills and knowledge that enable our learners to maximize their potential towards becoming positive, responsible and well informed global citizens.
            </p>
            <div className="pt-3">
              <button
                onClick={openAdmissionModal}
                className="px-6 py-3 bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-xs sm:text-sm rounded-full shadow-md transition cursor-pointer"
              >
                Admission Enquiry 2026-27
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src={SCHOOL_INFO.whyImage}
                alt="Vishwanath Academy Campus"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-[#aa2c38] flex items-center justify-center mb-2">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              “We aspire to walk our learners down the road which leads them to develop, a thirst for knowledge such that its discovery leads to the enrichment of life for them as individuals and the community at large”.
            </p>
            <ul className="space-y-2 text-xs text-slate-600 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Stimulating intellectual curiosity and creative expression</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Nurturing social accountability, national pride, and resilience</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Adopting modern technological and scientific frameworks</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#ff885e] flex items-center justify-center mb-2">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To provide students with a stimulating and safe environment in order to train them in problem solving, scientific inquiry, moral fortitude, and leadership excellence across academics and sports.
            </p>
            <ul className="space-y-2 text-xs text-slate-600 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff885e] shrink-0" />
                <span>NEP 2020 aligned experiential and project-based pedagogy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff885e] shrink-0" />
                <span>Equal emphasis on athletics, arts, and competitive entrance preparation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff885e] shrink-0" />
                <span>Inclusive admissions without discrimination of caste, creed or background</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Management Preview */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Leadership & Governance
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              The visionaries driving academic excellence at Vishwanath Academy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm text-center"
              >
                <div className="h-64 w-full overflow-hidden bg-slate-50">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="text-base font-bold text-slate-900">{leader.name}</h4>
                  <p className="text-xs text-[#aa2c38] font-semibold">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
