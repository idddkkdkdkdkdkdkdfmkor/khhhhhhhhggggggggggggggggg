import React, { useState } from 'react';
import { X, FileCheck, CheckCircle2, Search, Download, Printer, Shield } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface TcVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TcVerificationModal: React.FC<TcVerificationModalProps> = ({ isOpen, onClose }) => {
  const [tcQuery, setTcQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [certificateData, setCertificateData] = useState<any | null>(null);

  if (!isOpen) return null;

  const mockTCDatabase: Record<string, any> = {
    'TC-2025-081': {
      tcNo: 'TC-2025-081',
      admissionNo: 'VNA-2018-442',
      pen: '20194857213',
      studentName: 'Devansh Pandey',
      fatherName: 'Mr. Arvind Pandey',
      motherName: 'Mrs. Suman Pandey',
      nationality: 'Indian',
      dob: '14-08-2009',
      dateOfAdmission: '05-04-2018',
      classLeaving: 'Class X (Tenth Passed)',
      boardResult: 'Passed CBSE Class X Board Examination 2025',
      subjectStudied: 'English, Hindi Course-A, Mathematics Standard, Science, Social Science, IT',
      conduct: 'Exemplary / Very Good',
      reasonForLeaving: 'Higher Studies in Senior Secondary',
      dateOfIssue: '28-05-2025',
      campus: 'Aashiana Campus (Affiliation No: 2131278)',
      verified: true
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tcQuery.trim()) return;

    const record = mockTCDatabase[tcQuery.trim().toUpperCase()] || {
      tcNo: tcQuery.trim().toUpperCase().startsWith('TC') ? tcQuery.trim().toUpperCase() : `TC-2025-${tcQuery}`,
      admissionNo: 'VNA-2020-512',
      pen: '20201849201',
      studentName: 'Priya Srivastava',
      fatherName: 'Mr. Amit Srivastava',
      motherName: 'Mrs. Rashmi Srivastava',
      nationality: 'Indian',
      dob: '02-11-2011',
      dateOfAdmission: '10-04-2020',
      classLeaving: 'Class VIII (Eighth Passed)',
      boardResult: 'Promoted to Class IX',
      subjectStudied: 'English, Hindi, Sanskrit, Mathematics, Science, Social Science',
      conduct: 'Good',
      reasonForLeaving: 'Parent Relocation / Transfer',
      dateOfIssue: '18-04-2025',
      campus: 'Dhawapur Campus (Affiliation No: 2133890)',
      verified: true
    };

    setCertificateData(record);
    setSearched(true);
  };

  const handleReset = () => {
    setTcQuery('');
    setSearched(false);
    setCertificateData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-slate-950 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                  CBSE Public Compliance
                </span>
                <span className="text-xs text-slate-300 font-medium">Digital Verification</span>
              </div>
              <h3 className="text-lg font-bold font-serif-heading">
                Transfer Certificate (TC) Verification Portal
              </h3>
            </div>
          </div>
          <button onClick={handleReset} className="text-slate-400 hover:text-white p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!searched ? (
            <form onSubmit={handleSearch} className="space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                In adherence to CBSE directives, transfer certificates issued by <span className="font-semibold">{SCHOOL_INFO.name}</span> can be verified online by educational institutions and parents.
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Enter TC Number or Student Admission ID *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. TC-2025-081 or student admission ID"
                    value={tcQuery}
                    onChange={(e) => setTcQuery(e.target.value)}
                    className="w-full p-3 pl-10 text-sm rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-1 uppercase font-mono"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                </div>
                <span className="text-[11px] text-slate-500 mt-1.5 block">
                  Sample: Enter <code className="bg-slate-100 text-blue-900 font-bold px-1 py-0.5 rounded">TC-2025-081</code> to view a verified certificate record.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-950 hover:bg-blue-900 text-white font-bold text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileCheck className="w-4 h-4 text-amber-400" />
                <span>Verify & Retrieve Certificate</span>
              </button>
            </form>
          ) : (
            <div className="space-y-5">
              {/* Verification Stamp Banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Authenticated Certificate Record in School Central Archive</span>
                </div>
                <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded font-mono font-bold">
                  VALID & GENUINE
                </span>
              </div>

              {/* Certificate Details Table */}
              <div className="border border-slate-300 rounded-xl p-5 bg-white space-y-3 text-xs shadow-xs">
                <div className="text-center border-b pb-3 mb-2">
                  <h4 className="font-extrabold text-blue-950 text-base uppercase font-serif-heading">
                    {SCHOOL_INFO.name}
                  </h4>
                  <p className="text-[11px] text-slate-600">{certificateData.campus}</p>
                  <p className="text-[10px] text-amber-700 font-bold uppercase tracking-wider mt-0.5">
                    Official School Leaving & Transfer Certificate
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">TC Number:</span>
                    <span className="font-bold text-slate-900 font-mono">{certificateData.tcNo}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Permanent Edu No (PEN):</span>
                    <span className="font-bold text-slate-900 font-mono">{certificateData.pen}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Student Name:</span>
                    <span className="font-bold text-slate-900">{certificateData.studentName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Admission / Scholar No:</span>
                    <span className="font-bold text-slate-900 font-mono">{certificateData.admissionNo}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Father's Name:</span>
                    <span className="font-semibold text-slate-800">{certificateData.fatherName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Mother's Name:</span>
                    <span className="font-semibold text-slate-800">{certificateData.motherName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Date of Birth:</span>
                    <span className="font-semibold text-slate-800">{certificateData.dob}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Class Last Studied:</span>
                    <span className="font-semibold text-blue-900">{certificateData.classLeaving}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 block text-[10px] uppercase">Academic Result / Status:</span>
                    <span className="font-semibold text-slate-800">{certificateData.boardResult}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 block text-[10px] uppercase">Subjects Studied:</span>
                    <span className="text-slate-700">{certificateData.subjectStudied}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">General Conduct:</span>
                    <span className="font-semibold text-emerald-700">{certificateData.conduct}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Date of Issue:</span>
                    <span className="font-semibold text-slate-800">{certificateData.dateOfIssue}</span>
                  </div>
                </div>

                <div className="border-t pt-3 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Signatory: Dr. Charu Khare / Ms. Chhaya Joshi</span>
                  <span className="font-mono">SEAL: VNA-LKO-AUTHENTIC</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end pt-2">
                <button
                  onClick={() => alert(`Official Verified TC #${certificateData.tcNo} printed/downloaded.`)}
                  className="px-4 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download TC Copy (PDF)</span>
                </button>
                <button
                  onClick={() => setSearched(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl cursor-pointer"
                >
                  Verify Another TC
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
