// components/landing/ParentChildLayer.tsx
"use client";

import { motion } from "framer-motion";
import { Users, Eye, Bell, TrendingUp } from "lucide-react";

export default function ParentChildLayer() {
  return (
    <section id="Parents/Guardians" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
              For Parents & Guardians
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-navy-600 leading-tight">
              Stay Connected.<br />Stay in Control.
            </h2>

            <p className="text-xl text-gray-600">
              You don’t just pay the fees — you actively monitor your child’s academic journey in real time.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-green-100 shrink-0 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-navy-600">Real-time Monitoring</h3>
                  <p className="text-gray-600 mt-1">View attendance, live class participation, assessment scores, and assignment feedback.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 shrink-0 flex items-center justify-center">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-navy-600">Multiple Children, One Account</h3>
                  <p className="text-gray-600 mt-1">Switch between your children (JSS2 and SS1 for example) instantly with full data isolation.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 shrink-0 flex items-center justify-center">
                  <Bell className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-navy-600">Smart Notifications</h3>
                  <p className="text-gray-600 mt-1">Get alerted for missed classes, low scores, upcoming exams, and subscription renewals.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-green-100 shrink-0 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-navy-600">Term Report Cards</h3>
                  <p className="text-gray-600 mt-1">Official weighted results with subject breakdowns and performance trends.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-navy-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 hover:bg-navy-700 transition"
                onClick={() => {
                  const event = new CustomEvent('openRoleModal');
                  window.dispatchEvent(event);
                }}
              >
                Start as a Parent
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visual - Parent Dashboard Mock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-navy-600 text-white p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-full"></div>
                  <div>
                    <p className="font-medium">Mrs. Adebayo</p>
                    <p className="text-xs text-white/70">Parent Dashboard</p>
                  </div>
                </div>
                <div className="text-sm bg-white/10 px-3 py-1 rounded-full">2 Children</div>
              </div>

              <div className="p-8 space-y-8">
                {/* Child 1 */}
                <div className="border border-gray-100 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-semibold">Oluwatobiloba Adebayo</p>
                      <p className="text-sm text-gray-500">JSS2 • Gold</p>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-semibold">92%</div>
                      <div className="text-xs text-gray-500">Term Average</div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Child 2 */}
                <div className="border border-gray-100 rounded-2xl p-6 opacity-75">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-semibold">Adeola Adebayo</p>
                      <p className="text-sm text-gray-500">SS1 • Silver</p>
                    </div>
                    <div className="text-right">
                      <div className="text-amber-600 font-semibold">78%</div>
                      <div className="text-xs text-gray-500">Term Average</div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-amber-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notification */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl p-5 border border-gray-100 max-w-65"
            >
              <div className="flex gap-4">
                <div className="text-red-500">⚠️</div>
                <div className="text-sm">
                  <p className="font-medium">Tobi missed Mathematics class today</p>
                  <p className="text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}