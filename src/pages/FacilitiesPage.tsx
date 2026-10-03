import React from 'react';
import { 
  Cpu, Microscope, BookOpen, Trophy, Bus, ShieldCheck, 
  Palette, HeartPulse, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FacilitiesPageProps {
  openAdmissionModal: () => void;
  setCurrentTab: (tab: string) => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ openAdmissionModal, setCurrentTab }) => {
  const facilitiesList = [
    {
      title: 'Smart Tech-Enabled Classrooms',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      description: 'Airy, ergonomically furnished smart classrooms equipped with high-resolution interactive flat panels, multimedia CBSE syllabus animations, and digital chalkboards to transform abstract principles into tangible concepts.',
      specs: ['100+ Total Classrooms', '50 Sq. Meters average room size', 'High-Speed Wi-Fi connectivity', 'Acoustic treatment for sound clarity']
    },
    {
      title: 'Advanced Science Laboratories',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      description: 'Fully certified and spacious experimental laboratories complying with CBSE senior secondary practical requirements. Students engage in empirical discovery under expert supervision.',
      specs: ['Physics Lab: 92 Sq. Meters', 'Chemistry Lab: 83 Sq. Meters', 'Biology Lab: 57 Sq. Meters', 'Mathematics Lab: 51 Sq. Meters']
    },
    {
      title: 'AI, Robotics & Computer Science Labs',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
      description: 'Dual high-tech computer laboratories with 100 Sq. Meters floor area. High-performance networked workstations, Python programming environment, AI kits, 3D printing introduction, and 200 Mbps leased optical fiber internet.',
      specs: ['100+ Desktop Workstations', '1:1 Student to Computer ratio', 'Robotics & Arduino Kits', '200 Mbps Leased Optical Fiber']
    },
    {
      title: 'Central Digital & Physical Library',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
      description: 'A serene sanctum of literature and knowledge harboring over 12,000 titles spanning encyclopedias, fiction, competitive exam reference materials (IIT/NEET), national dailies, and peer-reviewed journals.',
      specs: ['12,000+ Printed Books', 'Subscriptions to 18 Periodicals', 'Digital E-Library workstations', 'Reading lounge for 120 students']
    },
    {
      title: 'Expansive Sports Complex & Athletic Turf',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80',
      description: 'Sprawling over 8,000+ square meters at Dhawapur and dedicated sports courts at Aashiana. Cultivating physical agility, leadership, and national championship participation under NIS trained coaches.',
      specs: ['400m Athletic Running Track', 'Cricket Turf Pitch & Practice Nets', 'Basketball & Volleyball Courts', 'Badminton & Table Tennis Arena']
    },
    {
      title: 'GPS-Monitored School Bus Fleet',
      icon: Bus,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
      description: 'A modern fleet of safe, sanitized school buses covering South Lucknow, Aashiana, Kanpur Road, Mohanlalganj, Telibagh, Alambagh, and surrounding corridors. Monitored via live GPS mobile apps with lady attendants.',
      specs: ['100% GPS Enabled Vehicles', 'CCTV Cameras in all buses', 'Speed Governors (Max 40 km/h)', 'Trained Female Attendants & Drivers']
    }
  ];

  return (
    <div className="w-full bg-[#fafafa] text-slate-800">
      {/* Banner */}
      <div className="bg-[#aa2c38] text-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/20 px-3 py-1 rounded-full border border-white/20">
            World-Class Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Campus Facilities & Resources
          </h1>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Designed to ignite curiosity, sustain physical fitness, and provide a safe, high-tech haven for over 3,500 aspiring scholars.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesList.map((facility, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-xs text-[#aa2c38] flex items-center justify-center shadow-md">
                    <facility.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-[#aa2c38] transition">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    {facility.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {facility.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#aa2c38] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={openAdmissionModal}
                  className="w-full py-2 bg-slate-50 hover:bg-red-50 text-slate-800 hover:text-[#aa2c38] text-xs font-bold rounded-xl border border-slate-200 hover:border-red-200 transition cursor-pointer"
                >
                  Schedule Campus Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
