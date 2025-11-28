import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Container({
  className,
  size = 'lg',
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        {
          'max-w-3xl': size === 'sm',
          'max-w-5xl': size === 'md',
          'max-w-7xl': size === 'lg',
          'max-w-[1400px]': size === 'xl',
          'max-w-full': size === 'full',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'sm' | 'md' | 'lg';
  background?: 'white' | 'gray' | 'transparent';
}

export function Section({
  className,
  spacing = 'md',
  background = 'transparent',
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'w-full',
        {
          'py-8 md:py-12': spacing === 'sm',
          'py-12 md:py-16 lg:py-20': spacing === 'md',
          'py-16 md:py-24 lg:py-32': spacing === 'lg',
          'bg-white': background === 'white',
          'bg-gray-50': background === 'gray',
          'bg-transparent': background === 'transparent',
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
