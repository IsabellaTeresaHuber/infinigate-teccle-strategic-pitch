import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function CTABanner() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-4xl bg-gradient-brand p-12 md:p-20 text-center overflow-hidden shadow-glow-lg"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-64 h-64 border-8 border-white rounded-full" />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md mb-4">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Ready to transform <br /> teccle motion?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/90 font-medium">
              Book your exclusive demo and start your journey as an elite Cloudflare partner. 
              Gain access to the PowerUP program and lead the market with AI security.
            </p>
            <div className="pt-8">
              <Button 
                size="lg" 
                variant="secondary" 
                className="h-16 px-10 rounded-2xl text-xl font-bold bg-white text-cloudflare hover:bg-slate-50 shadow-2xl transition-all hover:scale-105"
                asChild
              >
                <a href="#contact">
                  Join PowerUP & Start Selling AI <ArrowRight className="ml-2 w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}