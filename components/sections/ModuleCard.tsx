'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  title: string;
  description: string;
  href: string;
  colors: {
    primary: string;
    bg: string;
    text?: string;
  };
  icon?: React.ReactNode;
  isExpanded?: boolean;
  onHover?: (isHovering: boolean) => void;
}

export function ModuleCard({
  title,
  description,
  href,
  colors,
  icon,
  isExpanded = false,
  onHover,
}: ModuleCardProps) {
  return (
    <Link href={href}>
      <motion.div
        className={cn(
          'group relative flex h-screen min-h-[600px] cursor-pointer flex-col items-center justify-center overflow-hidden border-r border-gray-200 p-8 transition-all duration-500 last:border-r-0',
          'hover:shadow-2xl'
        )}
        style={{
          backgroundColor: colors.bg,
        }}
        onHoverStart={() => onHover?.(true)}
        onHoverEnd={() => onHover?.(false)}
        whileHover={{ scale: 1.02 }}
      >
        {/* Background Gradient Overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
          style={{
            background: `radial-gradient(circle at center, ${colors.primary}, transparent)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon */}
          {icon && (
            <motion.div
              className="mb-6 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
              style={{ color: colors.primary }}
            >
              {icon}
            </motion.div>
          )}

          {/* Title */}
          <motion.h2
            className={cn(
              'mb-4 text-4xl font-bold transition-all duration-300 md:text-5xl lg:text-6xl',
              'group-hover:scale-105'
            )}
            style={{ color: colors.text || colors.primary }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="max-w-md text-lg text-gray-600 opacity-0 transition-all duration-300 group-hover:opacity-100 md:text-xl"
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
          >
            {description}
          </motion.p>

          {/* CTA Arrow */}
          <motion.div
            className="mt-8 flex h-12 w-12 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
            style={{ backgroundColor: colors.primary }}
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>

        {/* Saturation Effect on Hover */}
        <div className="absolute inset-0 transition-all duration-500 group-hover:saturate-150" />
      </motion.div>
    </Link>
  );
}
