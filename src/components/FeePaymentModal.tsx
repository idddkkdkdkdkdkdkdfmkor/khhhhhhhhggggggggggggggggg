import React, { useState } from 'react';
import { X, CreditCard, CheckCircle2, ShieldCheck, Download, AlertCircle, Receipt, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FeePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeePaymentModal: React.FC<FeePaymentModalProps> = ({ isOpen, onClose }) => {
  const [admissionNo, setAdmissionNo] = useState('');
  const [studentFound, setStudentFound] = useState(false);
  const [selectedQuarter, setSelectedQuarter] = useState('Quarter 2 (Jul - Sep)');
  const [paymentDone, setPaymentDone] = useState(false);
  const [paymentRef, setPaymentRef] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const mockStudents: Record<string, any> = {
    'VNA-101': {
      name: 'Aditya Tiwari',
      class: 'Class IX - Section A',
      branch: 'Aashiana Campus',
      fatherName: 'Rajesh Tiwari',
      dues: 12900,
      breakdown: { tuition: 8600, transport: 3200, labAndExam: 1100 },
    },
    'VNA-102': {
      name: 'Sneha Pandey',
      class: 'Class V - Section B',
      branch: 'Dhawapur Campus',
      fatherName: 'Vikas Pandey',
      dues: 8800,
      breakdown: { tuition: 6000, transport: 2000, labAndExam: 800 },
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!admissionNo.trim()) return;
    setStudentFound(true);
  };

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentRef('TXN' + Math.floor(10000000 + Math.random() * 90000000));
      setPaymentDone(true);
    }, 1200);
  };

  const currentStudent = mockStudents[admissionNo.toUpperCase()] || {
    name: 'Aarav Verma',
    class: 'Class VII - Section C',
    branch: 'Aashiana Campus',
    fatherName: 'Sunil Verma',
    dues: 11400,
    breakdown: { tuition: 7600, transport: 2800, labAndExam: 1000 },
  };

  const handleReset = () => {
    setAdmissionNo('');
    setStudentFound(false);
    setPaymentDone(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-emerald-400/30">
                  Secure Gateway
                </span>
                <span className="text-xs text-slate-300 font-medium">ERP Parent Portal</span>
              </div>
              <h3 className="text-lg font-bold font-serif-heading">
                Online School Fee Payment
              </h3>
            </div>
          </div>
          <button onClick={handleReset} className="text-slate-400 hover:text-white p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {paymentDone ? (
            /* Receipt screen */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 font-serif-heading">
                  Fee Payment Successful!
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Transaction receipt generated and SMS sent to registered parent mobile.
                </p>
              </div>

              {/* Receipt Preview Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-2 text-xs">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Transaction ID:</span>
                  <span className="font-mono font-bold text-slate-900">{paymentRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Student Name:</span>
                  <span className="font-semibold text-slate-900">{currentStudent.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Class & Section:</span>
                  <span className="font-semibold text-slate-900">{currentStudent.class}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Campus:</span>
                  <span className="font-semibold text-slate-900">{currentStudent.branch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Fee Period:</span>
                  <span className="font-semibold text-slate-900">{selectedQuarter}</span>
                </div>
                <div className="flex justify-between border-t pt-2 text-sm font-bold">
                  <span className="text-slate-800">Total Amount Paid:</span>
                  <span className="text-emerald-700">₹{currentStudent.dues.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={() => alert(`Official School E-Receipt #${paymentRef} downloaded.`)}
                  className="px-4 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download E-Receipt</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs rounded-xl cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : !studentFound ? (
            /* Student Lookup Step */
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Enter Student Admission / Scholar No. *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. VNA-101 or VNA-2024-789"
                  value={admissionNo}
                  onChange={(e) => setAdmissionNo(e.target.value)}
                  className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 uppercase font-mono"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Tip: Try entering <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-900 font-bold">VNA-101</code> or any number to test the demo portal.
                </span>
              </div>

              <div className="bg-blue-50/70 p-3.5 rounded-xl border border-blue-200/60 text-xs text-blue-900 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <p>
                  Zero convenience fee on UPI & RuPay debit cards. Authorized 256-bit SSL encrypted transaction with {SCHOOL_INFO.name}.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl transition shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Fetch Fee Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* Student Details & Fee Checkout Step */
            <div className="space-y-4">
              {/* Student Header */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{currentStudent.name}</h4>
                  <p className="text-slate-500">{currentStudent.class} • {currentStudent.branch}</p>
                  <p className="text-slate-500 text-[11px]">Father: {currentStudent.fatherName}</p>
                </div>
                <button
                  onClick={() => setStudentFound(false)}
                  className="text-xs text-blue-900 underline font-semibold"
                >
                  Change
                </button>
              </div>

              {/* Installment selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Select Billing Quarter:
                </label>
                <select
                  value={selectedQuarter}
                  onChange={(e) => setSelectedQuarter(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-xl border border-slate-300"
                >
                  <option value="Quarter 1 (Apr - Jun)">Quarter 1 (Apr - Jun)</option>
                  <option value="Quarter 2 (Jul - Sep)">Quarter 2 (Jul - Sep) - Current</option>
                  <option value="Quarter 3 (Oct - Dec)">Quarter 3 (Oct - Dec)</option>
                  <option value="Quarter 4 (Jan - Mar)">Quarter 4 (Jan - Mar)</option>
                </select>
              </div>

              {/* Breakdown */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between text-slate-600">
                  <span>Tuition Fee</span>
                  <span className="font-semibold text-slate-900">₹{currentStudent.breakdown.tuition.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>GPS Transport Fee</span>
                  <span className="font-semibold text-slate-900">₹{currentStudent.breakdown.transport.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Laboratory & Examination Fee</span>
                  <span className="font-semibold text-slate-900">₹{currentStudent.breakdown.labAndExam.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-blue-950 border-t pt-2">
                  <span>Payable Amount:</span>
                  <span className="text-emerald-700 font-extrabold">₹{currentStudent.dues.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Pay Button */}
              <button
                onClick={handlePay}
                disabled={isProcessing}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-extrabold text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processing Secure Payment...</span>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>Pay ₹{currentStudent.dues.toLocaleString('en-IN')} via UPI / Netbanking</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
