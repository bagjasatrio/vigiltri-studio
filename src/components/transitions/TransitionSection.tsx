import React from 'react';
import { motion } from 'framer-motion';

interface TransitionSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const TransitionSection: React.FC<TransitionSectionProps> = ({
  id,
  className = '',
  children,
  delay = 0,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

