import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Printer, Download, User, Calendar, MapPin, Phone, Mail, BookOpen } from 'lucide-react';
import { BranchId } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBranch?: BranchId;
}

export const AdmissionFormModal: React.FC<AdmissionFormModalProps> = ({
  isOpen,
  onClose,
  defaultBranch = 'aashiana',
}) => {
  const [branch, setBranch] = useState<BranchId>(defaultBranch);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: 'Male',
    appliedClass: 'Nursery',
    stream: 'Science (PCM)',
    fatherName: '',
    motherName: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: '',
    lastClassPercentage: '',
    transportRequired: true,
  });

  const [submittedAppId, setSubmittedAppId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone || !formData.dob) {
      alert('Please fill out student name, date of birth, and contact number.');
      return;
    }
    // Generate official application ID
    const randomId = 'VNA-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedAppId(randomId);
  };

  const handleReset = () => {
    setSubmittedAppId(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 my-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs shadow-md">
              VNA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  Session 2026-27
                </span>
                <span className="text-xs text-amber-200 font-medium">Online Portal</span>
              </div>
              <h3 className="text-lg font-bold font-serif-heading text-white">
                Student Admission Registration Form
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {submittedAppId ? (
            /* Submission Success View */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900 font-serif-heading">
                  Admission Enquiry Registered!
                </h4>
                <p className="text-slate-600 text-sm mt-1 max-w-md mx-auto">
                  Thank you for applying to <span className="font-semibold">{SCHOOL_INFO.name}</span>. 
                  Our admissions counsellor will call you within 24 business hours for student interaction/test schedule.
                </p>
              </div>

              {/* Application Details Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Application Number:</span>
                  <span className="font-mono font-bold text-blue-950 text-sm">{submittedAppId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Candidate Name:</span>
                  <span className="font-semibold text-slate-900">{formData.studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applied Class:</span>
                  <span className="font-semibold text-slate-900">{formData.appliedClass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Campus:</span>
                  <span className="font-semibold text-amber-700 uppercase">{branch} Branch, Lucknow</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Parent Contact:</span>
                  <span className="font-semibold text-slate-900">{formData.phone}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  onClick={() => alert(`Registration Acknowledgement Slip #${submittedAppId} downloaded successfully.`)}
                  className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Registration Slip</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs rounded-xl cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Admission Registration Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Campus Choice */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                  Select Desired Campus *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setBranch('aashiana')}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      branch === 'aashiana'
                        ? 'border-blue-950 bg-blue-50/80 ring-2 ring-blue-950/20'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-bold text-xs text-blue-950 block">Aashiana Campus</span>
                    <span className="text-[11px] text-slate-500 block">Sector M-1, Parag Dairy Road</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBranch('dhawapur')}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      branch === 'dhawapur'
                        ? 'border-blue-950 bg-blue-50/80 ring-2 ring-blue-950/20'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-bold text-xs text-blue-950 block">Dhawapur Campus</span>
                    <span className="text-[11px] text-slate-500 block">Kanpur-Mohanlalganj Rd, Memora</span>
                  </button>
                </div>
              </div>

              {/* Student Personal Info */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block border-b pb-1">
                  1. Student Particulars
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">
                      Candidate Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">
                      Gender *
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-blue-900"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">
                      Admission Sought For Class *
                    </label>
                    <select
                      value={formData.appliedClass}
                      onChange={(e) => setFormData({ ...formData, appliedClass: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-blue-900"
                    >
                      <option value="Playgroup">Playgroup (Age 2.5+)</option>
                      <option value="Nursery">Nursery (Age 3+)</option>
                      <option value="LKG">LKG (Age 4+)</option>
                      <option value="UKG">UKG (Age 5+)</option>
                      <option value="Class I">Class I</option>
                      <option value="Class II">Class II</option>
                      <option value="Class III">Class III</option>
                      <option value="Class IV">Class IV</option>
                      <option value="Class V">Class V</option>
                      <option value="Class VI">Class VI</option>
                      <option value="Class VII">Class VII</option>
                      <option value="Class VIII">Class VIII</option>
                      <option value="Class IX">Class IX</option>
                      <option value="Class XI">Class XI (Senior Secondary)</option>
                    </select>
                  </div>
                </div>

                {formData.appliedClass === 'Class XI' && (
                  <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                    <label className="block text-xs text-amber-900 font-bold mb-1">
                      Stream Choice for Class XI *
                    </label>
                    <select
                      value={formData.stream}
                      onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                      className="w-full text-xs p-2 rounded-lg border border-amber-300 bg-white"
                    >
                      <option value="Science (PCM)">Science (PCM - Physics, Chemistry, Maths, English, CS/PE)</option>
                      <option value="Science (PCB)">Science (PCB - Physics, Chemistry, Biology, English, PE/Biotech)</option>
                      <option value="Commerce with Maths">Commerce with Maths & Economics</option>
                      <option value="Commerce with IP">Commerce with Informatics Practices</option>
                      <option value="Humanities">Humanities / Arts</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Parents Contact Details */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block border-b pb-1">
                  2. Parents & Communication Details
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">
                      Father's Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Father's full name"
                      value={formData.fatherName}
                      onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">
                      Mother's Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Mother's full name"
                      value={formData.motherName}
                      onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">
                      Primary Contact Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-blue-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-700 font-semibold mb-1">
                    Residential Address in Lucknow *
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="House number, colony, landmark, PIN code"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-blue-900"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="transportCheck"
                    checked={formData.transportRequired}
                    onChange={(e) => setFormData({ ...formData, transportRequired: e.target.checked })}
                    className="rounded border-slate-300 text-blue-900 focus:ring-blue-900"
                  />
                  <label htmlFor="transportCheck" className="text-xs text-slate-700">
                    Require School Bus GPS Transportation Service
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  * All submissions are kept strictly confidential.
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-red-800 to-amber-600 hover:from-red-900 hover:to-amber-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition transform active:scale-95 cursor-pointer"
                >
                  Submit Admission Registration
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
