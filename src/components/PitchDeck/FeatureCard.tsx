import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}
export function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full border-border/50 bg-card hover:bg-accent/5 transition-colors duration-300 shadow-soft hover:shadow-glow">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 text-white shadow-lg">
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="text-xl font-bold tracking-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}