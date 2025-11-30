import { BUSINESS_UNITS, CONTACT_INFO } from '@/lib/constants';

describe('Constants', () => {
  describe('BUSINESS_UNITS', () => {
    it('contains robotik business unit', () => {
      expect(BUSINESS_UNITS.robotik).toBeDefined();
      expect(BUSINESS_UNITS.robotik.name).toBe('Robotik Kodlama');
      expect(BUSINESS_UNITS.robotik.color).toBe('#4285F4');
    });

    it('contains ai business unit', () => {
      expect(BUSINESS_UNITS.ai).toBeDefined();
      expect(BUSINESS_UNITS.ai.name).toBe('AI & Yazılım');
      expect(BUSINESS_UNITS.ai.color).toBe('#4E85EB');
    });

    it('contains enerji business unit', () => {
      expect(BUSINESS_UNITS.enerji).toBeDefined();
      expect(BUSINESS_UNITS.enerji.name).toBe('Enerji Çözümleri');
      expect(BUSINESS_UNITS.enerji.color).toBe('#F3C242');
    });

    it('has description for each business unit', () => {
      Object.values(BUSINESS_UNITS).forEach(unit => {
        expect(unit.description).toBeDefined();
        expect(typeof unit.description).toBe('string');
        expect(unit.description.length).toBeGreaterThan(0);
      });
    });

    it('has unique colors for each business unit', () => {
      const colors = Object.values(BUSINESS_UNITS).map(unit => unit.color);
      const uniqueColors = new Set(colors);
      expect(uniqueColors.size).toBe(colors.length);
    });
  });

  describe('CONTACT_INFO', () => {
    it('contains email', () => {
      expect(CONTACT_INFO.email).toBeDefined();
      expect(CONTACT_INFO.email).toContain('@');
    });

    it('contains phone', () => {
      expect(CONTACT_INFO.phone).toBeDefined();
      expect(typeof CONTACT_INFO.phone).toBe('string');
    });

    it('contains address', () => {
      expect(CONTACT_INFO.address).toBeDefined();
      expect(typeof CONTACT_INFO.address).toBe('string');
    });

    it('contains social media links', () => {
      expect(CONTACT_INFO.socialMedia).toBeDefined();
      expect(CONTACT_INFO.socialMedia.linkedin).toBeDefined();
      expect(CONTACT_INFO.socialMedia.instagram).toBeDefined();
    });
  });
});
