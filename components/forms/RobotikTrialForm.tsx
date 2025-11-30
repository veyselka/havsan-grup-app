'use client';

import { useState } from 'react';
import { Button, Input } from '@/components/ui';
import { useToast } from '@/components/ui/Toast';

interface RobotikTrialFormProps {
  onSuccess?: () => void;
}

export function RobotikTrialForm({ onSuccess }: RobotikTrialFormProps) {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    age: '',
    website: '', // Honeypot field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Honeypot spam protection
    if (formData.website) {
      // Bot detected, silently reject
      setIsSubmitting(false);
      showToast(
        'Formunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
        'success'
      );
      setFormData({
        parentName: '',
        childName: '',
        phone: '',
        age: '',
        website: '',
      });
      onSuccess?.();
      return;
    }

    try {
      // Formspree endpoint kullan (ücretsiz)
      const response = await fetch('https://formspree.io/f/xkgldjlg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parentName: formData.parentName,
          childName: formData.childName,
          phone: formData.phone,
          age: formData.age,
          _subject: 'Yeni Robotik Kodlama Deneme Dersi Talebi',
        }),
      });

      if (response.ok) {
        showToast(
          'Formunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
          'success'
        );
        setFormData({
          parentName: '',
          childName: '',
          phone: '',
          age: '',
          website: '',
        });
        onSuccess?.();
      } else {
        showToast(
          result.message || 'Bir hata oluştu. Lütfen tekrar deneyiniz.',
          'error'
        );
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Bir hata oluştu. Lütfen tekrar deneyiniz.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Ücretsiz deneme dersi kayıt formu">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          opacity: 0,
        }}
        aria-hidden="true"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Veli Adı Soyadı"
          type="text"
          placeholder="Adınız ve soyadınız"
          value={formData.parentName}
          onChange={(e) =>
            setFormData({ ...formData, parentName: e.target.value })
          }
          required
        />
        <Input
          label="Çocuğun Adı Soyadı"
          type="text"
          placeholder="Çocuğunuzun adı ve soyadı"
          value={formData.childName}
          onChange={(e) =>
            setFormData({ ...formData, childName: e.target.value })
          }
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Telefon"
          type="tel"
          placeholder="0555 123 45 67"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          required
        />
        <Input
          label="Yaş"
          type="number"
          placeholder="Çocuğunuzun yaşı"
          min="6"
          max="18"
          value={formData.age}
          onChange={(e) =>
            setFormData({ ...formData, age: e.target.value })
          }
          required
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-robotik-primary hover:bg-robotik-primary/90"
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
      </Button>
    </form>
  );
}
