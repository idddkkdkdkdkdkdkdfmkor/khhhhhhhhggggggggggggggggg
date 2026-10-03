import React, { useState } from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { SCHOOL_INFO, NOTICES_DATA, LEADERSHIP_TEAM } from '../data/schoolData';
import { BranchId, Notice } from '../types';
import { 
  ArrowRight, Play, ExternalLink, Calendar, 
  ChevronRight, Award, GraduationCap, Building2, CheckCircle2, X,
  Trophy, BookOpen, Star, Sparkles, MapPin, Phone
} from 'lucide-react';

interface HomePageProps {
  setCurrentTab: (t: string) => void;
  selectedBranch: BranchId;
  setSelectedBranch: (b: BranchId) => void;
  openFeeModal: () => void;
  openTcModal: () => void;
  openAdmissionModal: () => void;
  onOpenLightbox?: (item: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentTab,
  selectedBranch,
  setSelectedBranch,
  openFeeModal,
  openTcModal,
  openAdmissionModal,
  onOpenLightbox,
}) => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [newsTab, setNewsTab] = useState<'aashiana' | 'dhawapur'>('aashiana');
  const [selectedLeaderModal, setSelectedLeaderModal] = useState<any | null>(null);

  const videoCards = [
    {
      title: 'Senior Secondary Wing',
      tagline: 'Classes VI to XII (Science, Commerce, Arts), Sector 21 Gurugram',
      youtubeId: 'YQczJujBrbs',
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Junior & Primary Wing',
      tagline: 'Pre-Primary to Class V, Near Kapashera Border, Dundahera',
      youtubeId: 's8DMBZLVzw4',
      thumbnail: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    }
  ];

  // Authentic Toppers data
  const toppersData = [
    {
      name: 'Priyanshu Verma',
      classLevel: 'Class XII (Science - PCM)',
      percent: '98.4%',
      branch: 'Senior Wing (Sector 21)',
      rank: 'School Topper',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Aditi Srivastava',
      classLevel: 'Class XII (Commerce with IP)',
      percent: '97.8%',
      branch: 'Senior Wing (Sector 21)',
      rank: 'Commerce Stream Rank 1',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Utkarsh Singh',
      classLevel: 'Class X (Board Exam)',
      percent: '97.6%',
      branch: 'Senior Wing (Dundahera)',
      rank: 'Board Topper',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Shreya Shukla',
      classLevel: 'Class XII (Science - PCB)',
      percent: '96.8%',
      branch: 'Senior Wing (Sector 21)',
      rank: 'Biology Stream Rank 1',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    }
  ];

  // News and Events per campus
  const newsEventsAashiana = [
    {
      id: 'e1',
      title: 'Annual Sports Meet & Athletic Championship 2026',
      date: 'February 16, 2026',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80',
      desc: 'Students demonstrated vibrant athletic discipline, track races, and volleyball games with local sports dignitaries in attendance.',
    },
    {
      id: 'e2',
      title: 'Science & Practical Innovation Exhibition 2026',
      date: 'January 28, 2026',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
      desc: 'Working models on robotics, renewable energy, and electronic circuits presented by senior secondary scholars.',
    },
    {
      id: 'e3',
      title: 'Inter-House Cultural Drama and Music Festival',
      date: 'December 24, 2025',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      desc: 'Celebrating cultural heritage, group songs, patriotic plays, and dance performances by our student houses.',
    }
  ];

  const newsEventsDhawapur = [
    {
      id: 'e4',
      title: 'Eco-Green Plantation Drive & Environmental Awareness',
      date: 'February 10, 2026',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      desc: 'Students and faculty planted saplings and participated in clean environmental rallies across Dundahera.',
    },
    {
      id: 'e5',
      title: 'Inter-School Volleyball & Badminton Tournament',
      date: 'January 14, 2026',
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
      desc: 'Annual championship on school sports grounds with enthusiastic participation across junior and senior wings.',
    },
    {
      id: 'e6',
      title: 'Merit Scholarship Felicitation Ceremony',
      date: 'November 18, 2025',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      desc: 'Honoring top academic performers and granting fee waivers to deserving meritorious students.',
    }
  ];

  return (
    <div className="w-full bg-white text-[#333333]">
      {/* 1. Main Hero Carousel (Exact Revolution Slider from live site) */}
      <HeroSlider onApplyClick={openAdmissionModal} />

      {/* 2. Floating 4 Quick Feature Action Cards (Exact 4 boxes from live site) */}
      <div className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {/* Card 1: Apply for Scholarship */}
          <div
            onClick={openAdmissionModal}
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl border border-slate-100 hover:border-[#aa2c38]/40 transition duration-300 text-center cursor-pointer group flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center">
              <img
                src={SCHOOL_INFO.scholarshipIcon}
                alt="Scholarship News"
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition duration-300"
              />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#aa2c38] transition leading-snug">
              Apply for Scholarship
            </h3>
            <span className="text-[11px] text-slate-400 mt-1 inline-flex items-center gap-1 group-hover:text-[#aa2c38]">
              Bright Child Scheme &rarr;
            </span>
          </div>

          {/* Card 2: Curriculum */}
          <div
            onClick={() => setCurrentTab('academics')}
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl border border-slate-100 hover:border-[#aa2c38]/40 transition duration-300 text-center cursor-pointer group flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center">
              <img
                src={SCHOOL_INFO.curriculumIcon}
                alt="Curriculum"
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition duration-300"
              />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#aa2c38] transition leading-snug">
              Curriculum
            </h3>
            <span className="text-[11px] text-slate-400 mt-1 inline-flex items-center gap-1 group-hover:text-[#aa2c38]">
              NEP 2020 Aligned &rarr;
            </span>
          </div>

          {/* Card 3: Notice Board */}
          <div
            onClick={() => setCurrentTab('notice-board')}
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl border border-slate-100 hover:border-[#aa2c38]/40 transition duration-300 text-center cursor-pointer group flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center">
              <img
                src={SCHOOL_INFO.noticeBoardIcon}
                alt="Notice Board"
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition duration-300"
              />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#aa2c38] transition leading-snug">
              Notice Board
            </h3>
            <span className="text-[11px] text-slate-400 mt-1 inline-flex items-center gap-1 group-hover:text-[#aa2c38]">
              Circulars & Datesheets &rarr;
            </span>
          </div>

          {/* Card 4: Syllabus / Latest News */}
          <div
            onClick={() => setCurrentTab('academics')}
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl border border-slate-100 hover:border-[#aa2c38]/40 transition duration-300 text-center cursor-pointer group flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center">
              <img
                src={SCHOOL_INFO.syllabusIcon}
                alt="Syllabus"
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition duration-300"
              />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#aa2c38] transition leading-snug">
              Syllabus & Books
            </h3>
            <span className="text-[11px] text-slate-400 mt-1 inline-flex items-center gap-1 group-hover:text-[#aa2c38]">
              Academic Year 2026-27 &rarr;
            </span>
          </div>
        </div>
      </div>

      {/* 3. "Why K.G. Senior Secondary School?" Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src={SCHOOL_INFO.whyImage}
                  alt="Why K.G. Senior Secondary School"
                  className="w-full h-auto object-cover hover:scale-102 transition duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl shadow-md border border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#aa2c38] uppercase tracking-wider">
                      Recognized Senior Secondary
                    </h4>
                    <p className="text-xs text-slate-600 font-medium">Sector 21 & Dundahera, Gurugram</p>
                  </div>
                  <span className="px-3 py-1 bg-[#aa2c38] text-white text-[11px] font-bold rounded-full">
                    Estd. 1990
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col Text Content (Authentic copy from live site) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
                  Excellence in Education
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-slate-900 tracking-tight">
                  Why <strong className="font-bold text-[#aa2c38]">K.G. Senior Secondary School?</strong>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
                We at K.G. Senior Secondary School, focus our dedication towards evoking a passion for learning and developing the requisite set of attitudes, skills and knowledge that enable our learners to maximize their potential towards becoming positive, responsible and well informed participants in our democratic and rapidly progressing global community. It is with this ambition that we work towards developing an environment which fosters social accountability, national pride and a curiosity to trigger the mood for self-learning through self-initiation.
              </p>

              <blockquote className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-[#aa2c38] text-slate-700 italic text-xs sm:text-sm leading-relaxed">
                “We aspire to walk our learners down the road which leads them to develop, a thirst for knowledge such that its discovery leads to the enrichment of life for them as individuals and the community at large”.
              </blockquote>

              {/* 4 Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#aa2c38] shrink-0" />
                  <span>Holistic NEP 2020 Curriculum</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#aa2c38] shrink-0" />
                  <span>Hi-Tech Science & AI Labs</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#aa2c38] shrink-0" />
                  <span>7,993 sqm Open Sports Arena</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#aa2c38] shrink-0" />
                  <span>GPS & CCTV Tracked Bus Fleet</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => setCurrentTab('about')}
                  className="px-6 py-2.5 bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-xs rounded-full shadow-md transition cursor-pointer flex items-center gap-2"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={openAdmissionModal}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-full transition cursor-pointer"
                >
                  Admission Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Apply for Admission" Section (Authentic copy & illustration from live site) */}
      <section className="py-14 sm:py-20 bg-[#fafafa] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Col Image */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src={SCHOOL_INFO.admissionImage}
                alt="Apply for Admission"
                className="max-h-[380px] w-auto object-contain drop-shadow-md"
              />
            </div>

            {/* Right Col Text Content & Button */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#aa2c38] uppercase tracking-widest">
                  Academic Session 2026-27
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                  Apply for Admission
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={openAdmissionModal}
                  className="px-8 py-3.5 bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-sm rounded-full shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={openAdmissionModal}
                  className="px-8 py-3.5 bg-[#ff885e] hover:bg-[#e06e44] text-white font-bold text-sm rounded-full shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Enquiry Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "Our Strength" Counters Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-slate-900">
              Our <strong className="font-bold text-[#aa2c38]">Strength</strong>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Empowering Minds, Building Futures: Educating the Leaders of Tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 pt-8">
            {/* Students */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#aa2c38]">
                2500+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 uppercase tracking-wide">
                Students
              </div>
            </div>

            {/* Branches */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#aa2c38]">
                2
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 uppercase tracking-wide">
                Branches
              </div>
            </div>

            {/* Result */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#aa2c38]">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 uppercase tracking-wide">
                Result
              </div>
            </div>

            {/* 10th Passed */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#aa2c38]">
                1600+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 uppercase tracking-wide">
                10th Passed (Till Date)
              </div>
            </div>

            {/* 12th Passed */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition col-span-2 sm:col-span-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#aa2c38]">
                1400+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 uppercase tracking-wide">
                12th Passed (Till Date)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "Notice Board" Section */}
      <section className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-bold text-[#ff885e] uppercase tracking-wider">
                  Important Circulars & Updates
                </span>
                <h2 className="text-2xl font-normal text-slate-900 mt-0.5">
                  Notice <strong className="font-bold text-[#aa2c38]">Board</strong>
                </h2>
              </div>
              <button
                onClick={() => setCurrentTab('notice-board')}
                className="px-4 py-1.5 rounded-full bg-[#aa2c38] hover:bg-[#8c1f2b] text-white text-xs font-bold transition cursor-pointer"
              >
                View All Notices
              </button>
            </div>

            {/* Grid of Notices matching vishwanathacademy.com dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {NOTICES_DATA.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedNotice(item)}
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#aa2c38] hover:bg-red-50/20 transition cursor-pointer flex flex-col justify-between group space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#aa2c38] uppercase tracking-wider">
                        {item.date}
                      </span>
                      {item.isNew && (
                        <span className="px-2 py-0.5 rounded-full bg-red-100 text-[#aa2c38] text-[10px] font-extrabold uppercase animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#aa2c38] transition line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-semibold text-[#aa2c38]">
                    <span>Read Details</span>
                    <span className="group-hover:translate-x-1 transition">&rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. "Our Management" Section (Exact photos & quote from live site) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
              Visionary Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Our Management
            </h2>
            <p className="text-slate-600 italic text-sm sm:text-base font-medium">
              “Art of Teaching is the Art of Assisting Discovery.”
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Under the inspirational guidance of our founders, K.G. Senior Secondary School provides students with an intellectually stimulating and morally upright learning sanctuary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((leader, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedLeaderModal(leader)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition duration-300 text-center flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-50 relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center p-4">
                      <span className="text-white text-xs font-semibold px-3 py-1 rounded-full bg-[#aa2c38]">
                        Read Vision Message
                      </span>
                    </div>
                  </div>
                  <div className="p-5 space-y-1">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#aa2c38] transition">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-[#aa2c38] font-semibold">
                      {leader.role}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {leader.group}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "Youtube Video" Section (Authentic heading from live site) */}
      <section className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
              Campus Video Tours
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Youtube <strong className="text-[#aa2c38]">Video</strong>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Explore Our School’s Videos and Discover the Passion, Creativity, and Excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoCards.map((video, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm space-y-3"
              >
                <div 
                  onClick={() => setActiveVideoModal(video.youtubeId)}
                  className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer group"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#aa2c38] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <Play className="w-7 h-7 fill-white text-white ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {video.title}
                    </h3>
                    <p className="text-xs text-slate-500">{video.tagline}</p>
                  </div>
                  <button
                    onClick={() => setActiveVideoModal(video.youtubeId)}
                    className="text-xs font-bold text-[#aa2c38] hover:underline cursor-pointer"
                  >
                    Watch Video &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. "Our Toppers" Section (Authentic heading from live site) */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
              Merit & Distinction
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Our <strong className="text-[#aa2c38]">Toppers</strong>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Celebrating Academic Brilliance in CBSE Class X & XII Board Examinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toppersData.map((topper, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition p-5 text-center space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-[#aa2c38] shadow-md">
                    <img
                      src={topper.image}
                      alt={topper.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute top-0 right-0 bg-[#aa2c38] text-white p-1 rounded-bl-lg">
                      <Trophy className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#aa2c38] transition">
                      {topper.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-600">{topper.classLevel}</p>
                    <p className="text-[11px] text-[#aa2c38] font-semibold">{topper.branch}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">{topper.rank}</span>
                  <span className="px-3 py-1 rounded-full bg-red-50 text-[#aa2c38] font-extrabold text-sm border border-red-200">
                    {topper.percent}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => setCurrentTab('results')}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-full shadow-md transition cursor-pointer inline-flex items-center gap-2"
            >
              <span>View Complete Board Exam Results</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. "News & Events" Section with Campus Tabs */}
      <section className="py-16 sm:py-24 bg-[#fbfbfb] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
                Life at K.G. Senior Secondary School
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                News & <strong className="text-[#aa2c38]">Events</strong>
              </h2>
            </div>

            {/* Campus Tab switcher */}
            <div className="flex p-1 bg-slate-200/80 rounded-xl text-xs font-bold text-slate-700 self-start md:self-auto">
              <button
                onClick={() => setNewsTab('aashiana')}
                className={`px-4 py-2 rounded-lg transition cursor-pointer ${
                  newsTab === 'aashiana' ? 'bg-[#aa2c38] text-white shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Senior Wing (Sector 21)
              </button>
              <button
                onClick={() => setNewsTab('dhawapur')}
                className={`px-4 py-2 rounded-lg transition cursor-pointer ${
                  newsTab === 'dhawapur' ? 'bg-[#aa2c38] text-white shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Junior Wing (Dundahera)
              </button>
            </div>
          </div>

          {/* Cards for active branch news */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(newsTab === 'aashiana' ? newsEventsAashiana : newsEventsDhawapur).map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#aa2c38]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#aa2c38] transition leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2">
                  <button
                    onClick={() => setCurrentTab('gallery')}
                    className="text-xs font-bold text-[#aa2c38] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Event Gallery</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Mobile App Download Section (Matches authentic quote from live site) */}
      <section className="py-14 sm:py-16 bg-[#161922] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Stay Connected Anywhere
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-slate-200 leading-relaxed italic">
                “A curious mind is one which takes the world by surprise. Surprise of understanding, surprise of great achievements, and surprise of doing wonders.”
              </h2>
              <p className="text-xs text-slate-400">
                Download the official K.G. Senior Secondary School Mobile ERP App for real-time attendance, homework assignments, and instant school notices.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition"
              >
                <img
                  src={SCHOOL_INFO.appGooglePlay}
                  alt="Download on Google Play"
                  className="h-12 w-auto object-contain drop-shadow-md"
                />
              </a>
              <a
                href="https://apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition"
              >
                <img
                  src={SCHOOL_INFO.appAppleStore}
                  alt="Download on App Store"
                  className="h-12 w-auto object-contain drop-shadow-md"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-black rounded-2xl overflow-hidden max-w-3xl w-full relative shadow-2xl">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-3 right-3 text-white/80 hover:text-white p-1 z-10 cursor-pointer bg-black/50 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoModal}?autoplay=1`}
                title="K.G. Senior Secondary School Video Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* Single Notice Detail Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-[#aa2c38] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  {selectedNotice.category}
                </span>
                <h3 className="text-base font-bold mt-0.5">
                  {selectedNotice.date}
                </h3>
              </div>
              <button
                onClick={() => setSelectedNotice(null)}
                className="text-white/80 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <h4 className="text-base font-bold text-slate-900 leading-snug">
                {selectedNotice.title}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {selectedNotice.content}
              </p>
            </div>
            <div className="bg-slate-50 px-6 py-3 flex justify-between items-center">
              <span className="text-[11px] text-slate-500">Official Notice - K.G. Senior Secondary School</span>
              <button
                onClick={() => setSelectedNotice(null)}
                className="px-4 py-1.5 bg-[#aa2c38] text-white text-xs font-bold rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Leader Vision Message Modal */}
      {selectedLeaderModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-[#aa2c38] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  {selectedLeaderModal.role}
                </span>
                <h3 className="text-base font-bold mt-0.5">
                  {selectedLeaderModal.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLeaderModal(null)}
                className="text-white/80 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={selectedLeaderModal.image}
                  alt={selectedLeaderModal.name}
                  className="w-20 h-20 rounded-xl object-cover object-top border-2 border-[#aa2c38] shadow-sm shrink-0"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{selectedLeaderModal.name}</h4>
                  <p className="text-xs text-[#aa2c38] font-semibold">{selectedLeaderModal.role}</p>
                  <p className="text-xs text-slate-500">{selectedLeaderModal.group}</p>
                </div>
              </div>
              <blockquote className="p-4 bg-slate-50 rounded-xl border-l-4 border-[#aa2c38] text-slate-700 text-xs sm:text-sm italic leading-relaxed">
                “{selectedLeaderModal.message}”
              </blockquote>
            </div>
            <div className="bg-slate-50 px-6 py-3 flex justify-end">
              <button
                onClick={() => setSelectedLeaderModal(null)}
                className="px-4 py-1.5 bg-slate-800 text-white text-xs font-semibold rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
