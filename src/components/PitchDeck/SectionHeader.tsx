import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
interface SectionHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  align?: 'left' | 'center';
}
export function SectionHeader({ title, subtitle, badge, align = 'center' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-3xl mb-12 sm:mb-16 ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      {badge && (
        <Badge variant="outline" className="mb-4 border-cloudflare/30 text-cloudflare px-3 py-1 bg-cloudflare/5 uppercase tracking-wider">
          {badge}
        </Badge>
      )}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}