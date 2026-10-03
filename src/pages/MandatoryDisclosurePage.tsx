import React from 'react';
import { MANDATORY_PUBLIC_DISCLOSURE, SCHOOL_INFO } from '../data/schoolData';
import { ShieldCheck, FileText, Download, Award, CheckCircle2, ExternalLink } from 'lucide-react';

export const MandatoryDisclosurePage: React.FC = () => {
  const { generalInfo, documents, infrastructure, boardResults } = MANDATORY_PUBLIC_DISCLOSURE;

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            CBSE OASIS & SARAS Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Mandatory Public Disclosure (Appendix - IX)
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            In compliance with Central Board of Secondary Education (CBSE) circulars, comprehensive school credentials, building approvals, and safety certificates are published.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section A: General Information */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-[#aa2c38] text-white p-4">
            <h2 className="text-base font-bold">
              A : GENERAL INFORMATION
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                  <th className="p-3 w-16">SL NO.</th>
                  <th className="p-3 w-1/3">INFORMATION</th>
                  <th className="p-3">DETAILS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {generalInfo.map((info, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="p-3 font-bold text-slate-500">{idx + 1}</td>
                    <td className="p-3 font-bold text-slate-800">{info.label}</td>
                    <td className="p-3 text-slate-700">{info.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section B : Documents & Information */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-[#aa2c38] text-white p-4">
            <h2 className="text-base font-bold">
              B : DOCUMENTS AND INFORMATION
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                  <th className="p-3 w-16">SL NO.</th>
                  <th className="p-3">DOCUMENTS / INFORMATION</th>
                  <th className="p-3 w-48">STATUS / CERTIFICATION</th>
                  <th className="p-3 w-32 text-center">VERIFICATION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {documents.map((doc, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="p-3 font-bold text-slate-500">{idx + 1}</td>
                    <td className="p-3 font-medium text-slate-800">{doc.name}</td>
                    <td className="p-3 text-slate-600 font-semibold">{doc.status}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => alert(`CBSE Public Disclosure Document [${doc.docId}] verified and authenticated.`)}
                        className="px-3 py-1 bg-red-50 text-[#aa2c38] hover:bg-[#aa2c38] hover:text-white rounded-md text-[11px] font-bold border border-red-200 transition cursor-pointer"
                      >
                        View Certificate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section C : Infrastructure Details */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-[#aa2c38] text-white p-4">
            <h2 className="text-base font-bold">
              C : SCHOOL INFRASTRUCTURE & LAB DETAILS
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                  <th className="p-3 w-16">SL NO.</th>
                  <th className="p-3 w-1/3">INFRASTRUCTURE PARAMETER</th>
                  <th className="p-3">VERIFIED DIMENSION / STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {infrastructure.map((infra, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="p-3 font-bold text-slate-500">{idx + 1}</td>
                    <td className="p-3 font-bold text-slate-800">{infra.label}</td>
                    <td className="p-3 text-slate-700 font-medium">{infra.value}</td>
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
