// components/landing/InstitutionalCore.tsx
"use client";

import { motion } from "framer-motion";
import { Calendar, Video, BookOpen, Award } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Automated Timetabling",
    description: "Follow a real school timetable. Live classes are scheduled and validated against your class arm’s official periods.",
    color: "blue",
  },
  {
    icon: Video,
    title: "Live Interactive Classes",
    description: "Teacher-led lessons via Google Meet with automatic attendance tracking and cloud recordings for review.",
    color: "green",
  },
  {
    icon: BookOpen,
    title: "VOD Library & Study Materials",
    description: "Full access to recorded curriculum lessons and downloadable materials organized by subject and term.",
    color: "navy",
  },
  {
    icon: Award,
    title: "CBT Assessments & Term Results",
    description: "Auto-graded Computer-Based Tests, mid-term exams, and official term report cards with weighted scoring.",
    color: "amber",
  },
];

export default function InstitutionalCore() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-navy-600">
            Built Like a Real School
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Not just another learning app — a complete digital secondary school with structure, accountability, and academic integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-100 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors
                ${feature.color === 'blue' && 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'}
                ${feature.color === 'green' && 'bg-green-100 text-green-600 group-hover:bg-green-200'}
                ${feature.color === 'navy' && 'bg-navy-100 text-navy-600 group-hover:bg-navy-200'}
                ${feature.color === 'amber' && 'bg-amber-100 text-amber-600 group-hover:bg-amber-200'}
              `}>
                <feature.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-semibold text-navy-600 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-8 h-1 w-12 bg-linear-to-r from-blue-600 to-transparent rounded-full group-hover:w-20 transition-all" />
            </motion.div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <div className="text-green-600">✓</div>
            <span>Term-based Enrollment</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-green-600">✓</div>
            <span>Admin-Controlled Academic Calendar</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-green-600">✓</div>
            <span>Official Report Cards</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-green-600">✓</div>
            <span>Parent Monitoring Portal</span>
          </div>
        </div>
      </div>
    </section>
  );
}