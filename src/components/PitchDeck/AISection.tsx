import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, CloudLightning, ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeader } from '@/components/PitchDeck/SectionHeader';
import { FeatureCard } from '@/components/PitchDeck/FeatureCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
export function AISection() {
  const aiFeatures = [
    {
      icon: Brain,
      title: "Workers AI",
      description: "Run machine learning models on Cloudflare's global network. Low-latency inference without managing infrastructure."
    },
    {
      icon: Cpu,
      title: "AI Gateway",
      description: "Gain visibility and control over your AI ops. Cache responses, limit costs, and secure LLM interactions."
    },
    {
      icon: Database,
      title: "Vectorize",
      description: "A globally distributed vector database for building full-stack AI applications like RAG and semantic search."
    },
    {
      icon: CloudLightning,
      title: "R2 for AI",
      description: "Zero-egress object storage designed for massive AI data lakes and training sets. Scale without the tax."
    }
  ];
  return (
    <section id="ai-future" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        badge="The Future of Security"
        title="AI-Powered Growth"
        subtitle="The next frontier of cybersecurity is built on AI. Cloudflare provides the primitives for teccle motion to build, secure, and monetize the AI era."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {aiFeatures.map((feature, idx) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={idx}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-4xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-12 text-white border border-white/10 shadow-2xl"
      >
        <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
          <Sparkles className="w-64 h-64 text-cloudflare" />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Why Sell AI with Infinigate?</h3>
            <p className="text-slate-300 text-lg mb-8">
              Move beyond basic connectivity. Provide teccle motion clients with enterprise-grade AI infrastructure that requires zero maintenance and generates high-margin recurring revenue.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-cloudflare" />
                <span className="text-sm font-semibold">Zero Infrastructure</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-cloudflare" />
                <span className="text-sm font-semibold">Recursive Revenue</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Button size="lg" className="bg-gradient-brand hover:scale-105 transition-transform h-14 px-8 text-lg font-bold shadow-glow" asChild>
              <a href="#contact">
                Join PowerUP & Start Selling AI <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}