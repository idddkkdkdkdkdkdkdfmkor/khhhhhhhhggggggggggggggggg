import React, { useState } from 'react';
import { X, Lock, User, School, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface ParentsLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParentsLoginModal: React.FC<ParentsLoginModalProps> = ({ isOpen, onClose }) => {
  const [userRole, setUserRole] = useState<'parent' | 'student' | 'teacher'>('parent');
  const [scholarNo, setScholarNo] = useState('');
  const [password, setPassword] = useState('');
  const [branch, setBranch] = useState<'aashiana' | 'dhawapur'>('aashiana');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scholarNo.trim() || !password.trim()) {
      setErrorMessage('Please enter both Scholar/Registration No. and password.');
      return;
    }
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setScholarNo('');
    setPassword('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header Strip with school maroon */}
        <div className="bg-[#aa2c38] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <School className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">VNA e-Campus Portal</h3>
              <p className="text-[11px] text-white/80">Vishwanath Academy Parent & Student Login</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-800">Authentication Successful!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Welcome to Vishwanath Academy e-Portal. Student dashboard for <span className="font-bold text-slate-800">{scholarNo}</span> is ready.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl text-left text-xs space-y-1.5 border border-slate-100">
                <div className="flex justify-between text-slate-600">
                  <span>Student:</span> <strong className="text-slate-800">Aarav Srivastava</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Class:</span> <strong className="text-slate-800">Class X-A (2025-26)</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Campus:</span> <strong className="text-slate-800">{branch === 'aashiana' ? 'Aashiana' : 'Dhawapur'}</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Attendance:</span> <span className="font-bold text-emerald-600">94.8%</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-2.5 bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
              >
                Proceed to Dashboard
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selector Tabs */}
              <div className="grid grid-cols-3 p-1 bg-slate-100 rounded-xl text-xs font-semibold text-slate-600">
                <button
                  type="button"
                  onClick={() => setUserRole('parent')}
                  className={`py-1.5 rounded-lg transition cursor-pointer ${
                    userRole === 'parent' ? 'bg-white text-[#aa2c38] shadow-xs' : 'hover:text-slate-900'
                  }`}
                >
                  Parent
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole('student')}
                  className={`py-1.5 rounded-lg transition cursor-pointer ${
                    userRole === 'student' ? 'bg-white text-[#aa2c38] shadow-xs' : 'hover:text-slate-900'
                  }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole('teacher')}
                  className={`py-1.5 rounded-lg transition cursor-pointer ${
                    userRole === 'teacher' ? 'bg-white text-[#aa2c38] shadow-xs' : 'hover:text-slate-900'
                  }`}
                >
                  Staff
                </button>
              </div>

              {/* Branch Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Select Campus</label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value as 'aashiana' | 'dhawapur')}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38] bg-white"
                >
                  <option value="aashiana">Aashiana Branch (CBSE Aff. 2131278)</option>
                  <option value="dhawapur">Dhawapur Branch (CBSE Aff. 2133890)</option>
                </select>
              </div>

              {/* Scholar / Admission ID */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {userRole === 'teacher' ? 'Staff Employee ID' : 'Scholar / Admission No.'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={scholarNo}
                    onChange={(e) => setScholarNo(e.target.value)}
                    placeholder={userRole === 'teacher' ? 'e.g. VNA-T-104' : 'e.g. VNA-2024-108'}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700">Password / DOB</label>
                  <span className="text-[11px] text-slate-400">(Default: DDMMYYYY)</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password or DOB"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="text-red-600 text-xs bg-red-50 p-2.5 rounded-lg border border-red-200">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 bg-[#aa2c38] hover:bg-[#8c1f2b] disabled:bg-slate-400 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {isLoading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Sign In to e-Campus</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => alert('For portal login credentials, please contact the school administration office at 1800-120-8622 or email vishwanathacademy@gmail.com.')}
                  className="text-[11px] text-[#aa2c38] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  Forgot Scholar No or Password?
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
