import { ComponentProps } from 'react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

type IconName = keyof typeof Icons;

interface IconProps extends Omit<ComponentProps<'svg'>, 'ref'> {
  name: IconName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Icon({ name, size = 'md', className, ...props }: IconProps) {
  const LucideIcon = Icons[name] as React.ComponentType<
    ComponentProps<'svg'>
  >;

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return (
    <LucideIcon
      className={cn(
        {
          'h-4 w-4': size === 'sm',
          'h-5 w-5': size === 'md',
          'h-6 w-6': size === 'lg',
          'h-8 w-8': size === 'xl',
        },
        className
      )}
      {...props}
    />
  );
}
