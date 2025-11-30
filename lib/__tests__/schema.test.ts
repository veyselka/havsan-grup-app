import { z } from 'zod';
import { contactFormSchema, robotikFormSchema } from '@/lib/validation';

describe('Form Validation Schemas', () => {
  describe('contactFormSchema', () => {
    it('validates valid contact form data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '05551234567',
        message: 'This is a test message with enough characters',
        businessUnit: 'robotik' as const,
      };

      const result = contactFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('rejects invalid email', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'invalid-email',
        message: 'Test message',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('email');
      }
    });

    it('rejects short name', () => {
      const invalidData = {
        name: 'J',
        email: 'john@example.com',
        message: 'Test message',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('rejects short message', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Short',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('message');
      }
    });

    it('accepts optional phone and businessUnit', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message with enough characters',
      };

      const result = contactFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });

  describe('robotikFormSchema', () => {
    it('validates valid robotik form data', () => {
      const validData = {
        parentName: 'Jane Doe',
        childName: 'Alice Doe',
        phone: '05551234567',
        age: '10',
      };

      const result = robotikFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('rejects invalid age (too young)', () => {
      const invalidData = {
        parentName: 'Jane Doe',
        childName: 'Alice Doe',
        phone: '05551234567',
        age: '5',
      };

      const result = robotikFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('rejects invalid age (too old)', () => {
      const invalidData = {
        parentName: 'Jane Doe',
        childName: 'Alice Doe',
        phone: '05551234567',
        age: '19',
      };

      const result = robotikFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('rejects short phone number', () => {
      const invalidData = {
        parentName: 'Jane Doe',
        childName: 'Alice Doe',
        phone: '123',
        age: '10',
      };

      const result = robotikFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('rejects short parent name', () => {
      const invalidData = {
        parentName: 'J',
        childName: 'Alice Doe',
        phone: '05551234567',
        age: '10',
      };

      const result = robotikFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('rejects short child name', () => {
      const invalidData = {
        parentName: 'Jane Doe',
        childName: 'A',
        phone: '05551234567',
        age: '10',
      };

      const result = robotikFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
});
