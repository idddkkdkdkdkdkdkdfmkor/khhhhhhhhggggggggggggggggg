import React from 'react';
import { LEADERSHIP_TEAM } from '../data/schoolData';
import { Award, Mail, Phone, BookOpen, GraduationCap, Sparkles } from 'lucide-react';

interface OurTeamPageProps {
  openAdmissionModal: () => void;
  setCurrentTab: (tab: string) => void;
}

export const OurTeamPage: React.FC<OurTeamPageProps> = ({ openAdmissionModal, setCurrentTab }) => {
  const facultyDepartments = [
    {
      dept: 'Science & STEM Wing',
      head: 'Dr. R.K. Mishra (Ph.D., Physics)',
      members: ['Ms. Shalini Gupta (M.Sc. Chemistry)', 'Mr. Amitav Sen (M.Sc. Biology, B.Ed.)', 'Mr. Vivek Yadav (Robotics & AI Lead)']
    },
    {
      dept: 'Mathematics & Computing',
      head: 'Mr. S.P. Verma (M.Sc. Maths, Gold Medalist)',
      members: ['Ms. Neha Sharma (MCA, IP & Computer Science)', 'Mr. Rajesh Dixit (B.Sc., B.Ed.)', 'Ms. Priya Rastogi (Primary Math Coach)']
    },
    {
      dept: 'Commerce & Humanities',
      head: 'Ms. Anuradha Tandon (M.Com, M.Phil)',
      members: ['Mr. Deepak Shukla (M.A. Economics)', 'Ms. Vandana Singh (M.A. English Literature)', 'Mr. K.N. Tiwari (M.A. History & Pol. Sc.)']
    },
    {
      dept: 'Sports & Physical Education',
      head: 'Coach R.S. Rawat (NIS Certified)',
      members: ['Ms. Sunita Yadav (Volleyball Coach)', 'Mr. Anuj Pandey (Cricket Head)', 'Ms. Pooja Pal (Yoga & Fitness Instructor)']
    }
  ];

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            Our Mentors & Educators
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Dynamic Team & Faculty
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            “Art of Teaching is the Art of Assisting Discovery.” Meet the visionary administrators and passionate educators guiding our learners.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Leadership & Principals */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
              Executive Administration
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Management & Academic Principals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition p-5 text-center space-y-3"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-3 border-[#aa2c38] shadow-md">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">{leader.name}</h3>
                  <p className="text-xs font-bold text-[#aa2c38]">{leader.role}</p>
                  <p className="text-[11px] text-slate-500">{leader.group}</p>
                </div>
                <p className="text-xs text-slate-600 italic line-clamp-3 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  “{leader.message}”
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Departments */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#ff885e] uppercase tracking-widest">
              Subject Wings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Department Heads & Senior Faculty
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facultyDepartments.map((dept, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#aa2c38] flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">{dept.dept}</h3>
                    <p className="text-xs text-[#aa2c38] font-medium">Head: {dept.head}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Core Faculty Members:
                  </span>
                  <div className="space-y-1.5">
                    {dept.members.map((member, mIdx) => (
                      <div key={mIdx} className="text-xs text-slate-700 p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#aa2c38]" />
                        <span>{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
