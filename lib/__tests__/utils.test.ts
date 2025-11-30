import { cn } from '@/lib/utils';

describe('Utils Functions', () => {
  describe('cn (classNames merger)', () => {
    it('merges class names correctly', () => {
      const result = cn('text-red-500', 'bg-blue-500');
      expect(result).toContain('text-red-500');
      expect(result).toContain('bg-blue-500');
    });

    it('handles conditional classes', () => {
      const result = cn('base-class', true && 'true-class', false && 'false-class');
      expect(result).toContain('base-class');
      expect(result).toContain('true-class');
      expect(result).not.toContain('false-class');
    });

    it('handles undefined and null values', () => {
      const result = cn('text-sm', undefined, null, 'font-bold');
      expect(result).toContain('text-sm');
      expect(result).toContain('font-bold');
    });

    it('merges tailwind classes correctly (no conflicts)', () => {
      const result = cn('px-4 py-2', 'px-6');
      // Should override px-4 with px-6
      expect(result).toContain('px-6');
      expect(result).toContain('py-2');
    });

    it('handles empty input', () => {
      const result = cn();
      expect(result).toBe('');
    });

    it('handles array of classes', () => {
      const result = cn(['text-sm', 'font-bold']);
      expect(result).toContain('text-sm');
      expect(result).toContain('font-bold');
    });

    it('handles object notation', () => {
      const result = cn({
        'text-red-500': true,
        'bg-blue-500': false,
        'font-bold': true,
      });
      expect(result).toContain('text-red-500');
      expect(result).toContain('font-bold');
      expect(result).not.toContain('bg-blue-500');
    });
  });
});
