import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, ShieldCheck, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const stats = [
  { label: "Dedicated Staff", value: "110+", icon: Users },
  { label: "Headquarters", value: "Frankfurt & Nabburg", icon: MapPin },
  { label: "Security Standard", value: "ISO 27001 Certified", icon: ShieldCheck },
  { label: "Network Uptime", value: "99.99%", icon: Zap },
];
const partners = ["Microsoft Gold", "Dell Technologies", "Sophos", "Commvault", "Pure Storage"];
export function AboutTeccle() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infinigate/10 text-infinigate text-xs font-bold uppercase tracking-widest">
            <Award className="w-3 h-3" /> Partner Excellence
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Engineering Excellence <br />
            <span className="text-infinigate">meets Global Security</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            teccle motion GmbH is a premier German IT service provider, combining deep technical roots in Frankfurt and Nabburg with a forward-thinking approach to cloud security and managed services.
          </p>
          <div className="flex flex-wrap gap-3">
            {partners.map((partner) => (
              <Badge key={partner} variant="secondary" className="px-4 py-1.5 text-sm font-medium border border-border/50">
                {partner}
              </Badge>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-none bg-secondary/40 backdrop-blur-sm hover:bg-secondary/60 transition-colors">
                <CardContent className="p-8">
                  <stat.icon className="w-8 h-8 text-infinigate mb-4" />
                  <div className="text-3xl font-black mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}