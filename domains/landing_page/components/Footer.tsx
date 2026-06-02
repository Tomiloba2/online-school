// components/landing/Footer.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-navy-600 text-white">
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <Image
                                src="/OMSlogo.png"
                                alt="One Mission School Logo"
                                width={44}
                                height={44}
                            />
                            <div>
                                <h3 className="text-2xl font-semibold tracking-tight">One Mission School</h3>
                                <p className="text-white/60 text-sm">E-Learning Platform</p>
                            </div>
                        </div>

                        <p className="text-white/70 max-w-md">
                            A structured digital secondary school delivering academic excellence through live classes,
                            rigorous assessments, and full parent visibility.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <Button className="border-white/30 bg-blue-600 text-white hover:bg-white/10">
                                Contact Support
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-6 text-white">Platform</h4>
                        <ul className="space-y-3 text-white/70">
                            <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
                            <li><Link href="#Parents/Guardians" className="hover:text-white transition">Parents/Guardians</Link></li>
                            <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
                            <li><Link href="/academic-calendar" className="hover:text-white transition">Academic Calendar</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold mb-6 text-white">Resources</h4>
                        <ul className="space-y-3 text-white/70">
                            <li><Link href="/student-handbook" className="hover:text-white transition">Student Handbook</Link></li>
                            <li><Link href="/parent-guide" className="hover:text-white transition">Parent Guide</Link></li>
                            <li><Link href="/faqs" className="hover:text-white transition">FAQs</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Company */}
                    <div>
                        <h4 className="font-semibold mb-6 text-white">Company</h4>
                        <ul className="space-y-3 text-white/70">
                            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                            <li><Link href="/ndpr" className="hover:text-white transition">NDPR Compliance</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/60">
                    <div>
                        © {new Date().getFullYear()} One Mission School. All Rights Reserved.
                    </div>

                    <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center md:justify-end">
                        <span>Oyo, Nigeria</span>
                        <span>support@onemissionschool.com</span>
                        <span>+234 803 000 0000</span>
                    </div>

                    <div className="text-xs text-white/50">
                        Built for academic excellence
                    </div>
                </div>
            </div>
        </footer>
    );
}