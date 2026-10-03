import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, Mail, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { BranchId } from '../types';

interface FooterProps {
  setCurrentTab: (t: string) => void;
  setSelectedBranch?: (b: BranchId) => void;
  openFeeModal: () => void;
  openTcModal: () => void;
  openAdmissionModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentTab,
  setSelectedBranch,
  openFeeModal,
  openTcModal,
  openAdmissionModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: string, branch?: BranchId) => {
    setCurrentTab(tab);
    if (branch && setSelectedBranch) {
      setSelectedBranch(branch);
    }
    scrollToTop();
  };

  return (
    <footer className="w-full bg-[#161922] text-slate-300 text-xs font-normal border-t border-slate-800">
      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: School Identity & App Download */}
          <div className="space-y-4">
            <div onClick={() => handleNav('home')} className="cursor-pointer flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#aa2c38] to-[#8c1f2b] text-white flex items-center justify-center font-extrabold text-lg shadow-md border border-white/20">
                KG
              </div>
              <div>
                <span className="block font-black text-white text-sm tracking-tight leading-none">
                  K.G. SENIOR SECONDARY SCHOOL
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase block mt-1">
                  Sector 21, Gurugram
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed italic">
              “A curious mind is one which takes the world by surprise. Surprise of understanding, surprise of great achievements, and surprise of doing wonders.”
            </p>

            <div className="pt-2 space-y-2">
              <strong className="block text-white font-bold text-xs uppercase tracking-wide">
                Download our App
              </strong>
              <div className="flex items-center gap-2">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:opacity-90 transition"
                >
                  <img
                    src={SCHOOL_INFO.appGooglePlay}
                    alt="Get it on Google Play"
                    className="h-9 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://apple.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:opacity-90 transition"
                >
                  <img
                    src={SCHOOL_INFO.appAppleStore}
                    alt="Download on App Store"
                    className="h-9 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Matches vishwanathacademy.com footer) */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-700">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => alert('K.G. Senior Secondary School Official Prospectus & Information Brochure downloaded.')}
                  className="hover:text-[#ff885e] transition text-left cursor-pointer"
                >
                  School Brochure
                </button>
              </li>
              <li>
                <a
                  href="https://orders.idcraftindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff885e] transition text-left cursor-pointer block"
                >
                  Online Uniform Store (IDCraft)
                </a>
              </li>
              <li>
                <button
                  onClick={openAdmissionModal}
                  className="hover:text-[#ff885e] transition font-semibold text-[#ff885e] text-left cursor-pointer"
                >
                  Admission Enquiry (2026-27)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('results')}
                  className="hover:text-[#ff885e] transition text-left cursor-pointer block"
                >
                  Toppers & Board Results
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('awards')}
                  className="hover:text-[#ff885e] transition text-left cursor-pointer block"
                >
                  School Awards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('career')}
                  className="hover:text-[#ff885e] transition text-left cursor-pointer block"
                >
                  Career & Recruitment
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Live Bus Tracking GPS portal active for authenticated parents. Please log in via Parents Login.')}
                  className="hover:text-[#ff885e] transition text-left cursor-pointer"
                >
                  Live Bus Tracking
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Mobile App installation guide accessed.')}
                  className="hover:text-[#ff885e] transition text-left cursor-pointer"
                >
                  Mobile App Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-slate-400 transition text-[11px] text-left cursor-pointer block"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-slate-400 transition text-[11px] text-left cursor-pointer block"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-slate-400 transition text-[11px] text-left cursor-pointer block"
                >
                  Sitemap
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Senior Wing Details */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-700">
              Senior Secondary Campus
            </h5>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff885e] shrink-0 mt-0.5" />
                <span>Palam Gurgaon Road, Dundahera, Near Hanuman Mandir, Sector 21, Gurugram - 122016</span>
              </div>
              <div className="text-[11px] text-slate-400">
                UDISE+ Code : <strong className="text-slate-200">06180100104</strong> (Gurugram)
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href="tel:01242365126" className="hover:text-white block font-medium">(0124) 2365126</a>
                  <a href="tel:9811523651" className="hover:text-white block font-medium">+91-9811523651</a>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a href="mailto:kgseniorsecondaryschool@gmail.com" className="hover:underline">
                  kgseniorsecondaryschool@gmail.com
                </a>
              </div>

              {/* Branch Social Links matching live site */}
              <div className="pt-2 text-[11px] text-slate-400">
                <span className="font-semibold text-white block mb-1">Connect:</span>
                <div className="flex flex-wrap gap-2 text-slate-300 text-[11px]">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff885e]">Facebook</a>
                  <span>•</span>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff885e]">Twitter</a>
                  <span>•</span>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff885e]">LinkedIn</a>
                  <span>•</span>
                  <a href="https://wa.me/919811523651" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Junior & Foundational Wing */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-700">
              Primary & Foundational Wing
            </h5>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff885e] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Palam Gurgaon Road, Near Kapashera Border, Dundahera, Sector 21, Gurugram, Haryana - 122016.
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                School Level : <strong className="text-slate-200">Nursery to Class V</strong>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href="tel:01242365126" className="hover:text-white block font-medium">
                  (0124) 2365126
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a href="mailto:kgseniorsecondaryschool@gmail.com" className="hover:underline">
                  kgseniorsecondaryschool@gmail.com
                </a>
              </div>

              {/* Branch Social Links matching live site */}
              <div className="pt-2 text-[11px] text-slate-400">
                <span className="font-semibold text-white block mb-1">Office Hours:</span>
                <div className="text-slate-300 text-[11px]">
                  <span>Mon – Sat: 8:30 AM to 1:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip (Exact string from live site) */}
      <div className="bg-[#0e1117] py-4 px-4 border-t border-slate-800 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            Copyright All Right Reserved 2026, K.G. Senior Secondary School
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('disclosure')}
              className="hover:text-white transition"
            >
              CBSE Appendix-IX Disclosure
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full bg-slate-800 hover:bg-[#aa2c38] hover:text-white transition text-slate-300 cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
