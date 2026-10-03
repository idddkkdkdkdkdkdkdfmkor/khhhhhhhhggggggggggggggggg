import React from 'react';
import { Trophy, Palette, BookOpen, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export const LearningBeyondClassroomPage: React.FC = () => {
  const activities = [
    {
      title: 'Sports & Physical Fitness',
      description: 'Athletics, cricket, volleyball, basketball, badminton, table tennis, yoga, and gymnastics training under certified NIS instructors.',
      icon: Trophy,
    },
    {
      title: 'Performing & Visual Arts',
      description: 'Vocal classical, instrumental music (harmonium, tabla, keyboard, guitar), contemporary & classical dance, fine arts, painting, and pottery.',
      icon: Palette,
    },
    {
      title: 'Science & Robotics Club',
      description: 'Hands-on electronic circuits, drone fundamentals, coding workshops, national science congress participation, and annual model exhibitions.',
      icon: Sparkles,
    },
    {
      title: 'Literary & Debating Society',
      description: 'Model United Nations (MUN), bilingual elocution, creative writing, extempore, spelling bee, and school magazine editorial board.',
      icon: BookOpen,
    }
  ];

  return (
    <div className="w-full bg-white text-[#333333]">
      <div className="bg-[#f8fafc] border-b border-slate-200 py-10 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Learning Beyond Classroom
          </h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            Home / About Us / Learning Beyond Classroom
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Holistic Education Beyond Textbooks
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            At Vishwanath Academy, learning is not confined within four walls. We offer students varied avenues to discover their passions, hone leadership qualities, and build lifelong friendships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <div
                key={idx}
                className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 space-y-3 shadow-xs hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 text-[#aa2c38] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{act.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{act.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
