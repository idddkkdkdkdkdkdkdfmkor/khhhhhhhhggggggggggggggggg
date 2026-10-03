import React, { useState } from 'react';
import { FEE_STRUCTURE_DATA } from '../data/schoolData';
import { BranchId } from '../types';
import { Calculator, Bus, CheckCircle2, AlertCircle, Download } from 'lucide-react';

interface FeeCalculatorProps {
  initialBranch?: BranchId;
  selectedBranch?: BranchId;
  onApplyClick?: () => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({
  initialBranch,
  selectedBranch,
  onApplyClick,
}) => {
  const [branch, setBranch] = useState<BranchId>(selectedBranch || initialBranch || 'aashiana');
  const [selectedClassIndex, setSelectedClassIndex] = useState(0);
  const [includeTransport, setIncludeTransport] = useState(false);
  const [transportDistance, setTransportDistance] = useState<'0-3' | '3-6' | '6-10' | '10+'>('0-3');

  React.useEffect(() => {
    if (selectedBranch) {
      setBranch(selectedBranch);
    }
  }, [selectedBranch]);

  const filteredFees = FEE_STRUCTURE_DATA.filter((item) => item.branch === branch);
  const activeFeeItem = filteredFees[selectedClassIndex] || filteredFees[0];

  const transportFares = {
    '0-3': 1200,
    '3-6': 1600,
    '6-10': 2000,
    '10+': 2400,
  };

  const monthlyTransport = includeTransport ? transportFares[transportDistance] : 0;
  const annualTransport = monthlyTransport * 11; // 11 academic months

  const totalAnnualEstimated = activeFeeItem 
    ? activeFeeItem.admissionFee + (activeFeeItem.monthlyTuition * 12) + activeFeeItem.examFeeAnnually + annualTransport
    : 0;

  const totalMonthlyOngoing = activeFeeItem 
    ? activeFeeItem.monthlyTuition + monthlyTransport
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Calculator className="w-4 h-4" />
              <span>Transparent Fee Structure 2026-27</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-heading">
              School Fee & Transport Calculator
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              No hidden charges. Verified class-wise fee breakup for Vishwanath Academy.
            </p>
          </div>

          {/* Branch Toggle Pill */}
          <div className="flex bg-blue-900/80 p-1 rounded-xl border border-blue-700/60 self-start sm:self-auto">
            <button
              onClick={() => {
                setBranch('aashiana');
                setSelectedClassIndex(0);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                branch === 'aashiana'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Aashiana Campus
            </button>
            <button
              onClick={() => {
                setBranch('dhawapur');
                setSelectedClassIndex(0);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                branch === 'dhawapur'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Dhawapur Campus
            </button>
          </div>
        </div>
      </div>

      {/* Calculator Body */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Config Panel */}
        <div className="lg:col-span-7 space-y-6">
          {/* Class Selector */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
              1. Select Student Grade / Class:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filteredFees.map((fee, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedClassIndex(idx)}
                  className={`p-2.5 text-xs text-left rounded-xl border transition cursor-pointer ${
                    selectedClassIndex === idx
                      ? 'border-blue-900 bg-blue-50 text-blue-950 font-bold ring-2 ring-blue-900/20'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <span className="block truncate">{fee.classLevel}</span>
                  <span className="text-[10px] text-slate-500 block font-normal">
                    ₹{fee.monthlyTuition}/mo
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Optional Transport Selection */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bus className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-slate-800">
                  School Bus Transportation Service (Optional)
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeTransport}
                  onChange={(e) => setIncludeTransport(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>

            {includeTransport && (
              <div className="pt-2 animate-in fade-in duration-200">
                <span className="text-xs text-slate-600 block mb-2 font-medium">
                  Select Distance from Campus:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['0-3', '3-6', '6-10', '10+'] as const).map((dist) => (
                    <button
                      key={dist}
                      onClick={() => setTransportDistance(dist)}
                      className={`p-2 rounded-lg text-xs border text-center transition cursor-pointer ${
                        transportDistance === dist
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-600'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span>{dist} KM</span>
                      <span className="block text-[10px] opacity-80">
                        ₹{transportFares[dist]}/mo
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Important Rules note */}
          <div className="text-xs text-slate-500 space-y-1 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/60">
            <div className="flex items-center gap-1.5 text-amber-800 font-bold">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Official Fee Guidelines:</span>
            </div>
            <p>• Fees are accepted online, via Cheque, or Cash at the school fee counter.</p>
            <p>• Late fee of ₹10 per day is applicable after the 10th of every scheduled month.</p>
            <p>• Transport facility once opted cannot be withdrawn midway during an ongoing term.</p>
            <p>• Installment structure: {activeFeeItem?.installments}.</p>
          </div>
        </div>

        {/* Right Summary Invoice Panel */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-blue-950 text-white p-6 rounded-2xl flex flex-col justify-between shadow-lg">
          <div>
            <div className="border-b border-blue-800/80 pb-3 mb-4">
              <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider block">
                Estimated Fee Summary (2026-27)
              </span>
              <h4 className="text-xl font-bold font-serif-heading">
                {activeFeeItem?.classLevel}
              </h4>
              <span className="text-xs text-slate-300 capitalize">
                {branch} Campus, Lucknow
              </span>
            </div>

            {/* Breakdown line items */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-blue-900">
                <span className="text-slate-300">Admission Fee (One-Time for New)</span>
                <span className="font-semibold text-white">₹{activeFeeItem?.admissionFee.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-blue-900">
                <span className="text-slate-300">Monthly Tuition Fee</span>
                <span className="font-semibold text-white">₹{activeFeeItem?.monthlyTuition.toLocaleString('en-IN')} / mo</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-blue-900">
                <span className="text-slate-300">Examination & Tech Fee (Annual)</span>
                <span className="font-semibold text-white">₹{activeFeeItem?.examFeeAnnually.toLocaleString('en-IN')}</span>
              </div>
              {includeTransport && (
                <div className="flex justify-between py-1.5 border-b border-blue-900 text-amber-300">
                  <span>GPS School Bus ({transportDistance} KM)</span>
                  <span className="font-semibold">₹{monthlyTransport.toLocaleString('en-IN')} / mo</span>
                </div>
              )}
            </div>

            {/* Total Callout */}
            <div className="mt-6 pt-4 border-t-2 border-amber-500/50 bg-blue-900/40 p-4 rounded-xl">
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs text-slate-300">Monthly Recurring:</span>
                <span className="text-lg font-bold text-amber-400">
                  ₹{totalMonthlyOngoing.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-400">/mo</span>
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-slate-300">Estimated Total Annual Cost:</span>
                <span className="text-xl font-extrabold text-white">
                  ₹{totalAnnualEstimated.toLocaleString('en-IN')}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 block text-right mt-1">
                *Includes one-time admission, 12 months tuition & exam fees
              </span>
            </div>
          </div>

          <div className="pt-6 space-y-2">
            <button
              onClick={onApplyClick}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm rounded-xl transition shadow-md cursor-pointer text-center"
            >
              Apply for {activeFeeItem?.classLevel}
            </button>
            <button
              onClick={() => alert(`Fee structure booklet for ${branch.toUpperCase()} downloaded.`)}
              className="w-full py-2 bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Fee Chart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
