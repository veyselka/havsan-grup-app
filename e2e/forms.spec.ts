import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iletisim');
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.getByLabel(/ad soyad/i)).toBeVisible();
    await expect(page.getByLabel(/e-posta/i)).toBeVisible();
    await expect(page.getByLabel(/mesajınız/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /gönder/i })).toBeVisible();
  });

  test('should show validation errors for empty form', async ({ page }) => {
    await page.getByRole('button', { name: /gönder/i }).click();
    
    // HTML5 validation should prevent submission
    const nameInput = page.getByLabel(/ad soyad/i);
    await expect(nameInput).toBeFocused();
  });

  test('should submit form with valid data', async ({ page }) => {
    // Fill form
    await page.getByLabel(/ad soyad/i).fill('Test User');
    await page.getByLabel(/e-posta/i).fill('test@example.com');
    await page.getByLabel(/telefon/i).fill('05551234567');
    await page.getByLabel(/mesajınız/i).fill('Bu bir test mesajıdır. Form gönderimi test ediliyor.');

    // Submit form
    await page.getByRole('button', { name: /gönder/i }).click();

    // Wait for toast notification or success message
    await expect(page.getByText(/başarıyla gönderildi|success/i)).toBeVisible({ timeout: 5000 });
  });

  test('should show error for invalid email', async ({ page }) => {
    await page.getByLabel(/ad soyad/i).fill('Test User');
    await page.getByLabel(/e-posta/i).fill('invalid-email');
    await page.getByLabel(/mesajınız/i).fill('Test message with enough characters');

    await page.getByRole('button', { name: /gönder/i }).click();

    // HTML5 validation should show error
    const emailInput = page.getByLabel(/e-posta/i);
    const validationMessage = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(validationMessage).toBeTruthy();
  });
});

test.describe('Robotik Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/robotik');
    await page.waitForTimeout(1000); // Wait for page load
    
    // Open trial form modal by clicking the hero button
    await page.getByRole('button', { name: /ücretsiz deneme dersi/i }).click();
    
    // Wait for modal to appear
    await page.waitForTimeout(500);
  });

  test('should display robotik trial form', async ({ page }) => {
    // Modal should be visible
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText(/öğrenci bilgileri/i)).toBeVisible();
  });

  test('should submit robotik form with valid data', async ({ page }) => {
    // Locate form inputs in modal
    await page.getByPlaceholder(/veli.*adı/i).fill('Ahmet Yılmaz');
    await page.getByPlaceholder(/çocuk.*adı/i).fill('Mehmet Yılmaz');
    await page.getByPlaceholder(/telefon/i).fill('05551234567');
    await page.getByPlaceholder(/yaş/i).fill('10');

    // Submit
    await page.getByRole('button', { name: /gönder|kayıt ol/i }).click();

    // Verify success
    await expect(page.getByText(/başarıyla|success/i)).toBeVisible({ timeout: 5000 });
  });

  test('should validate age range (6-18)', async ({ page }) => {
    await page.getByPlaceholder(/veli.*adı/i).fill('Test Parent');
    await page.getByPlaceholder(/çocuk.*adı/i).fill('Test Child');
    await page.getByPlaceholder(/telefon/i).fill('05551234567');
    
    // Try age below minimum
    await page.getByPlaceholder(/yaş/i).fill('5');
    await page.getByRole('button', { name: /gönder|kayıt ol/i }).click();
    
    // Should show error
    await expect(page.getByText(/6-18|yaş/i)).toBeVisible({ timeout: 3000 });
  });
});
