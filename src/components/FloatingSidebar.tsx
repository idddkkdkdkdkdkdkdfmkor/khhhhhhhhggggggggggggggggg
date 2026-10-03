import React from 'react';
import { UserPlus, CreditCard, Briefcase, Phone, FileCheck } from 'lucide-react';

interface FloatingSidebarProps {
  openAdmissionModal: () => void;
  openFeeModal: () => void;
  openTcModal: () => void;
  setCurrentTab?: (t: string) => void;
}

export const FloatingSidebar: React.FC<FloatingSidebarProps> = ({
  openAdmissionModal,
  openFeeModal,
  openTcModal,
  setCurrentTab,
}) => {
  const handleNav = (tab: string) => {
    if (setCurrentTab) {
      setCurrentTab(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick Actions" className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1.5 shadow-2xl">
      {/* 1. Admission Enquiry */}
      <button
        onClick={openAdmissionModal}
        className="group flex items-center justify-end bg-[#aa2c38] hover:bg-[#8c1f2b] text-white p-2.5 rounded-l-xl transition shadow-md cursor-pointer overflow-hidden border-l-2 border-white/20"
        title="Admission Enquiry"
      >
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden text-xs font-bold pr-0 group-hover:pr-2">
          Admission Enquiry
        </span>
        <UserPlus className="w-5 h-5 shrink-0" />
      </button>

      {/* 2. Fees Structure */}
      <button
        onClick={openFeeModal}
        className="group flex items-center justify-end bg-[#ff885e] hover:bg-[#e06e44] text-white p-2.5 rounded-l-xl transition shadow-md cursor-pointer overflow-hidden border-l-2 border-white/20"
        title="Fees Structure"
      >
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden text-xs font-bold pr-0 group-hover:pr-2">
          Fee Calculator & Payment
        </span>
        <CreditCard className="w-5 h-5 shrink-0" />
      </button>

      {/* 3. Download TC */}
      <button
        onClick={openTcModal}
        className="group flex items-center justify-end bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-l-xl transition shadow-md cursor-pointer overflow-hidden border-l-2 border-white/20"
        title="Download TC"
      >
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden text-xs font-bold pr-0 group-hover:pr-2">
          Download TC
        </span>
        <FileCheck className="w-5 h-5 shrink-0" />
      </button>

      {/* 4. Career */}
      <button
        onClick={() => handleNav('career')}
        className="group flex items-center justify-end bg-[#5f2a5d] hover:bg-[#471f45] text-white p-2.5 rounded-l-xl transition shadow-md cursor-pointer overflow-hidden border-l-2 border-white/20"
        title="Career"
      >
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden text-xs font-bold pr-0 group-hover:pr-2">
          Career Openings
        </span>
        <Briefcase className="w-5 h-5 shrink-0" />
      </button>

      {/* 5. Contact Us */}
      <button
        onClick={() => handleNav('contact')}
        className="group flex items-center justify-end bg-[#161922] hover:bg-black text-white p-2.5 rounded-l-xl transition shadow-md cursor-pointer overflow-hidden border-l-2 border-white/20"
        title="Contact Us"
      >
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden text-xs font-bold pr-0 group-hover:pr-2">
          Contact Campuses
        </span>
        <Phone className="w-5 h-5 shrink-0" />
      </button>
    </aside>
  );
};
