// components/landing/FAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is One Mission School?",
    answer: "One Mission School (OMS) is a structured full-fledged digital secondary school for JSS1 to SS3 students in Nigeria. We replicate the academic rigor of a physical school with term-based enrollment, live classes, official assessments, and report cards."
  },
  {
    question: "How does the academic calendar work?",
    answer: "We follow the standard Nigerian academic calendar. There is one Academic Session per year (e.g., 2025/2026), divided into three Terms. All content, classes, and grades are strictly scoped to a specific session and term."
  },
  {
    question: "Can my child join at any time?",
    answer: "Enrollment is managed by the Admin and is only open during active terms. However, the Free Tier is always available for students to explore the platform while waiting for formal enrollment."
  },
  {
    question: "What are the subscription plans?",
    answer: "We offer four plans: Free (limited), Live (live classes + recordings), VOD (video library + materials), and Hybrid (full access). All paid plans are term-based and must be renewed each term."
  },
  {
    question: "Is the Hybrid plan worth it?",
    answer: "Yes. The Hybrid plan is our most popular option as it gives complete access to both live classes and the full VOD library, plus all assessments and parent monitoring tools."
  },
  {
    question: "How do live classes work?",
    answer: "Teachers schedule classes based on the official timetable. Once approved by Admin, a Google Meet link is generated. Students join directly from the dashboard. Attendance is automatically recorded."
  },
  {
    question: "Can parents monitor their child’s progress?",
    answer: "Absolutely. Parents have a dedicated dashboard to view attendance, scores, assignments, and term results. You can also receive notifications for missed classes or low performance."
  },
  {
    question: "Do parents need a separate account?",
    answer: "Yes. Parents create their own account and link it to their child’s account. One parent account can manage multiple children with full data isolation."
  },
  {
    question: "What devices can we use?",
    answer: "The platform is fully responsive and works excellently on smartphones, tablets, and laptops. We recommend using a laptop or tablet for live classes and assessments."
  },
  {
    question: "Are assessments auto-graded?",
    answer: "Yes. Class Tests and Mid-Term Exams are auto-graded. Term Exams may have manual components depending on the subject. All results contribute to the official term report card."
  },
  {
    question: "What happens at the end of a term?",
    answer: "The Admin marks the term as completed, results are computed and released, and the next term becomes active. All previous records remain accessible in the Past Terms section."
  },
  {
    question: "Can I switch plans mid-term?",
    answer: "Yes. You can upgrade from Live to Hybrid (or VOD to Hybrid) at any time with prorated billing. Downgrades take effect at the start of the next term."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-navy-600">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about One Mission School
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-lg text-navy-700 pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="mailto:support@onemissionschool.com" className="text-blue-600 hover:underline font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}