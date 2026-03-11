import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldAlert, Cpu, TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/PitchDeck/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
const trends = [
  {
    icon: ShieldAlert,
    title: "AI-Driven Threats",
    desc: "Polymorphic malware and automated phishing are increasing in complexity by over 300% annually.",
    stat: "+300%",
    color: "text-red-500"
  },
  {
    icon: Cpu,
    title: "Zero Trust Mandate",
    desc: "80% of enterprises are pivoting away from legacy VPNs to identity-centric security architectures.",
    stat: "80%",
    color: "text-cloudflare"
  },
  {
    icon: TrendingUp,
    title: "Consolidation Trend",
    desc: "CFOs are demanding vendor consolidation—moving from 15+ security tools to unified platforms.",
    stat: "12:1",
    color: "text-blue-500"
  }
];
export function MarketTrends() {
  return (
    <section id="trends" className="bg-slate-950 text-white py-24 md:py-32 scroll-mt-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(227,6,19,0.1),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Market Intelligence"
          title="The Landscape is Shifting"
          subtitle="Legacy hardware and perimeter-based security are no longer sufficient against modern, AI-powered adversaries."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {trends.map((trend, idx) => (
            <motion.div
              key={trend.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full">
                <CardContent className="p-8">
                  <div className={`text-4xl font-black mb-4 ${trend.color}`}>{trend.stat}</div>
                  <div className="flex items-center gap-3 mb-4">
                    <trend.icon className="w-6 h-6 text-white/70" />
                    <h4 className="text-xl font-bold">{trend.title}</h4>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{trend.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl bg-gradient-brand text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:rotate-12 transition-transform">
            <AlertTriangle className="w-32 h-32" />
          </div>
          <h3 className="text-2xl md:text-4xl font-black mb-4 relative z-10">Don't let legacy tech hold you back.</h3>
          <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8 relative z-10">
            teccle motion can lead this transition, moving from low-margin hardware to high-value strategic security services.
          </p>
          <button className="bg-white text-infinigate font-black py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-2xl">
            View AI Selling Guide
          </button>
        </motion.div>
      </div>
    </section>
  );
}