import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FEE_STRUCTURE_DATA, BRANCHES_DATA } from '../data/schoolData';
import { BranchId } from '../types';
import { Calculator, AlertCircle, Download, CheckCircle2 } from 'lucide-react';

interface FeeStructureBranchPageProps {
  openAdmissionModal: () => void;
  openFeeModal: () => void;
}

export const FeeStructureBranchPage: React.FC<FeeStructureBranchPageProps> = ({
  openAdmissionModal,
  openFeeModal,
}) => {
  const { branchId } = useParams<{ branchId?: string }>();
  const activeBranch: BranchId = (branchId === 'dhawapur') ? 'dhawapur' : 'aashiana';
  const branchInfo = BRANCHES_DATA[activeBranch];

  const filteredFees = FEE_STRUCTURE_DATA.filter((f) => f.branch === activeBranch);

  return (
    <div className="w-full bg-white text-[#333333]">
      {/* Banner */}
      <div className="bg-[#f8fafc] border-b border-slate-200 py-10 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Fee Structure - {branchInfo.name}
          </h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            Home / Fees Structure / {branchInfo.name}
          </p>

          <div className="pt-4 flex justify-center gap-3">
            <Link
              to="/fees-structure/aashiana"
              className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                activeBranch === 'aashiana' ? 'bg-[#aa2c38] text-white shadow-xs' : 'bg-slate-200 text-slate-700'
              }`}
            >
              Aashiana Branch
            </Link>
            <Link
              to="/fees-structure/dhawapur"
              className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                activeBranch === 'dhawapur' ? 'bg-[#aa2c38] text-white shadow-xs' : 'bg-slate-200 text-slate-700'
              }`}
            >
              Dhawapur Branch
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Fee Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-4">
          <div className="bg-[#aa2c38] text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">
                Approved Fee Slabs for Academic Session 2026-27
              </h2>
              <p className="text-xs text-slate-200 mt-0.5">
                {branchInfo.fullAddress} • CBSE Affiliation No: {branchInfo.affiliationNo}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={openFeeModal}
                className="px-4 py-2 bg-[#ff885e] hover:bg-[#e06e44] text-white font-bold text-xs rounded-xl transition cursor-pointer"
              >
                Pay Fee Online
              </button>
              <button
                onClick={openAdmissionModal}
                className="px-4 py-2 bg-white text-[#aa2c38] font-bold text-xs rounded-xl transition cursor-pointer"
              >
                Enquiry Now
              </button>
            </div>
          </div>

          <div className="overflow-x-auto p-4 sm:p-6">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <th className="p-3.5 font-bold">Class / Grade</th>
                  <th className="p-3.5 font-bold">Admission Fee (One-Time)</th>
                  <th className="p-3.5 font-bold">Monthly Tuition Fee</th>
                  <th className="p-3.5 font-bold">Annual Examination Fee</th>
                  <th className="p-3.5 font-bold">Total Composite Annual Fee</th>
                  <th className="p-3.5 font-bold">Installments</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredFees.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="p-3.5 font-bold text-slate-900">{fee.classLevel}</td>
                    <td className="p-3.5 text-slate-700">₹{fee.admissionFee.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 font-bold text-[#aa2c38]">₹{fee.monthlyTuition.toLocaleString('en-IN')} / mo</td>
                    <td className="p-3.5 text-slate-700">₹{fee.examFeeAnnually.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 font-extrabold text-slate-900">₹{fee.compositeAnnualFee.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 text-slate-600">{fee.installments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rules & Guidelines */}
        <div className="bg-[#f8fafc] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#ff885e]" />
            <span>Important Fee Regulations & Payment Rules</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
            <li>1. Fee must be deposited on or before the 10th of every scheduled installment month. Late fee fine of ₹10 per day is levied thereafter.</li>
            <li>2. School bus transport facility once opted cannot be withdrawn midway during an ongoing academic term.</li>
            <li>3. Cheque bounce attracts penalty charges of ₹400 per bounce. In case of lost fee card, a duplicate fee card fee of ₹100 applies.</li>
            <li>4. All fees once deposited are strictly non-refundable and non-transferable under any circumstances.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
