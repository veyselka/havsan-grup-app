'use client';

import { HTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ANIMATION_VARIANTS } from '@/lib/constants';

export interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
}

export function FadeIn({
  className,
  delay = 0,
  duration = 0.5,
  children,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={ANIMATION_VARIANTS.fadeIn}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface SlideUpProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
}

export function SlideUp({
  className,
  delay = 0,
  duration = 0.5,
  children,
  ...props
}: SlideUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={ANIMATION_VARIANTS.slideUp}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface ScaleInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
}

export function ScaleIn({
  className,
  delay = 0,
  duration = 0.5,
  children,
  ...props
}: ScaleInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={ANIMATION_VARIANTS.scaleIn}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerContainerProps {
  className?: string;
  staggerDelay?: number;
  children: React.ReactNode;
}

export function StaggerContainer({
  className,
  staggerDelay = 0.1,
  children,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
