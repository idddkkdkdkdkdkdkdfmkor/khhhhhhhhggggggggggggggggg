import React, { useState } from 'react';
import { Briefcase, CheckCircle2, Send, Upload, FileText, Sparkles, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const CareerPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    postAppliedFor: 'PGT - Physics',
    branch: 'aashiana',
    experience: '3-5 years',
    highestQualification: 'Post Graduate with B.Ed.',
    coverNote: ''
  });

  const openings = [
    { title: 'PGT - Physics & Chemistry', branch: 'Aashiana / Dhawapur', minExp: '3+ Years', type: 'Full-Time' },
    { title: 'TGT - Mathematics & Science', branch: 'Aashiana Branch', minExp: '2+ Years', type: 'Full-Time' },
    { title: 'PRT - All Primary Subjects', branch: 'Dhawapur Branch', minExp: '1+ Years', type: 'Full-Time' },
    { title: 'Computer Science & AI Instructor', branch: 'Aashiana Branch', minExp: '2+ Years', type: 'Full-Time' },
    { title: 'Physical Education & Sports Coach', branch: 'Dhawapur Campus', minExp: '2+ Years', type: 'Full-Time' },
    { title: 'School Counselor & Special Educator', branch: 'Aashiana / Dhawapur', minExp: '2+ Years', type: 'Full-Time' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            Join Our Faculty
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Careers at Vishwanath Academy
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Be part of an inspiring community of educators committed to moulding future leaders. Competitive remuneration, professional growth, and a positive teaching ecosystem.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Open Positions Grid */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
              Current Openings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Vacancies for Academic Session 2026-27
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {openings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-[#aa2c38] text-[10px] font-bold">
                      {job.type}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">Exp: {job.minExp}</span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">{job.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-[#aa2c38]" />
                    <span>{job.branch}</span>
                  </div>
                </div>

                <a
                  href="#application-form"
                  onClick={() => setFormData({ ...formData, postAppliedFor: job.title })}
                  className="text-xs font-bold text-[#aa2c38] hover:underline pt-2 border-t border-slate-100 flex items-center justify-between"
                >
                  <span>Apply for this Role</span>
                  <span>&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm max-w-3xl mx-auto space-y-6">
          <div className="border-b border-slate-100 pb-4 text-center">
            <h3 className="text-xl font-bold text-slate-900">Online Faculty & Staff Application</h3>
            <p className="text-xs text-slate-500 mt-1">Please fill the form below or email your resume directly to vishwanathacademy@gmail.com</p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">Application Received Successfully!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Your profile for <strong>{formData.postAppliedFor}</strong> has been forwarded to the Vishwanath Academy HR screening committee. Shortlisted candidates will receive interview intimation via email or phone.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 bg-[#aa2c38] text-white text-xs font-bold rounded-xl"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Ramesh Kumar"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@gmail.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Mobile Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 9876543210"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Post Applied For *</label>
                  <input
                    type="text"
                    required
                    value={formData.postAppliedFor}
                    onChange={(e) => setFormData({ ...formData, postAppliedFor: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Preferred Campus</label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38] bg-white"
                  >
                    <option value="aashiana">Aashiana Branch</option>
                    <option value="dhawapur">Dhawapur Branch</option>
                    <option value="any">Open to Either Campus</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Highest Qualification</label>
                  <input
                    type="text"
                    required
                    value={formData.highestQualification}
                    onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
                    placeholder="e.g. M.Sc., B.Ed. (CTET Qualified)"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Brief Profile & Teaching Philosophy</label>
                <textarea
                  rows={3}
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  placeholder="Outline your subject proficiency, past school achievements, and why you wish to teach at Vishwanath Academy..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Job Application</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
