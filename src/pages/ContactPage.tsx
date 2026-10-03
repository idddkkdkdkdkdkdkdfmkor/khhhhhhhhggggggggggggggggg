import React, { useState } from 'react';
import { BRANCHES_DATA, SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { BranchId } from '../types';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeMapBranch, setActiveMapBranch] = useState<BranchId>('aashiana');
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'aashiana',
    subject: 'General Enquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.name || !contactData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            Connect With Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact Vishwanath Academy
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Our admissions counsellors and administrative team are here to assist with any questions regarding admissions, transport, or school visits.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Two Campus Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Aashiana Branch */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-xl font-bold text-slate-900">
                Aashiana Campus
              </h3>
              <span className="text-xs bg-red-50 text-[#aa2c38] font-bold px-2.5 py-1 rounded-full border border-red-200">
                Affiliation: 2131278
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#aa2c38] shrink-0 mt-0.5" />
                <span>Sector M-1, Parag Dairy Road, Aashiana, Lucknow, Uttar Pradesh 226012</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="space-x-3">
                  <a href="tel:9695660388" className="font-bold text-slate-800 hover:text-[#aa2c38]">+91-9695660388</a>
                  <a href="tel:9169388348" className="font-bold text-slate-800 hover:text-[#aa2c38]">+91-9169388348</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-600 shrink-0" />
                <a href="mailto:vna.aashiana@gmail.com" className="text-slate-800 hover:underline">vna.aashiana@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-slate-400 shrink-0" />
                <span>Visiting Hours: Mon - Sat (8:30 AM - 2:00 PM)</span>
              </div>
            </div>

            <button
              onClick={() => setActiveMapBranch('aashiana')}
              className={`w-full py-2.5 rounded-xl font-bold text-xs transition cursor-pointer border ${
                activeMapBranch === 'aashiana'
                  ? 'bg-[#aa2c38] text-white border-[#aa2c38]'
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
              }`}
            >
              View Aashiana Map Location
            </button>
          </div>

          {/* Dhawapur Branch */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-xl font-bold text-slate-900">
                Dhawapur Campus
              </h3>
              <span className="text-xs bg-red-50 text-[#aa2c38] font-bold px-2.5 py-1 rounded-full border border-red-200">
                Affiliation: 2133890
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#aa2c38] shrink-0 mt-0.5" />
                <span>Dhawapur, 3 Km From Junabganj Turn On Kanpur - Mohanlalganj Road, Near Memora Airforce Station, Lucknow 226401</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <a href="tel:6393025211" className="font-bold text-slate-800 hover:text-[#aa2c38]">+91-6393025211</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-600 shrink-0" />
                <a href="mailto:vna.dhawapur@gmail.com" className="text-slate-800 hover:underline">vna.dhawapur@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-slate-400 shrink-0" />
                <span>Visiting Hours: Mon - Sat (8:30 AM - 2:00 PM)</span>
              </div>
            </div>

            <button
              onClick={() => setActiveMapBranch('dhawapur')}
              className={`w-full py-2.5 rounded-xl font-bold text-xs transition cursor-pointer border ${
                activeMapBranch === 'dhawapur'
                  ? 'bg-[#aa2c38] text-white border-[#aa2c38]'
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
              }`}
            >
              View Dhawapur Map Location
            </button>
          </div>
        </div>

        {/* Map & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Embed */}
          <div className="lg:col-span-7 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between px-2">
              <span className="font-bold text-sm text-slate-800">
                Interactive Google Map: {activeMapBranch === 'aashiana' ? 'Aashiana Branch' : 'Dhawapur Branch'}
              </span>
              <span className="text-xs text-[#aa2c38] font-semibold">Lucknow, UP</span>
            </div>
            <div className="rounded-xl overflow-hidden h-[380px] bg-slate-100">
              <iframe
                title="Vishwanath Academy Campus Map"
                src={BRANCHES_DATA[activeMapBranch].mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#aa2c38]" />
              <span>Send an Instant Message</span>
            </h3>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-base text-slate-800">Message Received!</h4>
                <p className="text-xs text-slate-600">Our student counselor will contact you within 24 hours.</p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 bg-[#aa2c38] text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    placeholder="Enter parent / student name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      placeholder="+91 Phone"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Select Campus</label>
                    <select
                      value={contactData.branch}
                      onChange={(e) => setContactData({ ...contactData, branch: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38] bg-white"
                    >
                      <option value="aashiana">Aashiana</option>
                      <option value="dhawapur">Dhawapur</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Message / Question</label>
                  <textarea
                    rows={3}
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    placeholder="Ask about admissions, bus transport route, or fees..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#aa2c38]/20 focus:border-[#aa2c38]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
