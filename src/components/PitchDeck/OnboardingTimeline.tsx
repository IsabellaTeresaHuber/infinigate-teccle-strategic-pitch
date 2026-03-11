import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sliders, CheckCircle, Rocket, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/PitchDeck/SectionHeader';
const stages = [
  {
    day: "Day 1",
    title: "Discovery",
    icon: Search,
    desc: "Joint workshop to audit existing legacy infrastructure (Sophos, Pure, etc.).",
    support: "Infinigate technical pre-sales alignment."
  },
  {
    day: "Day 2-3",
    title: "Configuration",
    icon: Sliders,
    desc: "Cloudflare Connectivity Cloud provisioning & policy definition.",
    support: "Access to elite partner deployment guides."
  },
  {
    day: "Day 4",
    title: "Validation",
    icon: CheckCircle,
    desc: "Zero Trust access testing and performance benchmarking.",
    support: "POC assistance from Infinigate experts."
  },
  {
    day: "Day 5+",
    title: "Go-Live",
    icon: Rocket,
    desc: "Seamless traffic transition with zero downtime for users.",
    support: "Marketing launch support & lead-gen tracking."
  }
];
export function OnboardingTimeline() {
  return (
    <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        badge="Speed to Market"
        title="From Zero to Cloudflare in 5 Days"
        subtitle="Legacy deployments take weeks of shipping and racking. We enable teccle motion to deploy in days."
      />
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border/50 p-8 rounded-4xl shadow-soft group-hover:shadow-glow transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <stage.icon className="w-8 h-8" />
                </div>
                <div className="text-cloudflare font-black text-sm uppercase tracking-widest mb-2">{stage.day}</div>
                <h4 className="text-xl font-bold mb-4">{stage.title}</h4>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{stage.desc}</p>
                <div className="w-full pt-6 border-t border-border/50 text-xs font-bold text-left">
                  <div className="text-muted-foreground uppercase mb-2 tracking-tighter">Infinigate Support:</div>
                  <div className="flex items-center gap-2 text-foreground">
                    <ChevronRight className="w-3 h-3 text-infinigate" />
                    {stage.support}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}