import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should display navbar on all pages', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByText('HAVSAN')).toBeVisible();
  });

  test('should navigate through all main pages via navbar', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);

    const nav = page.getByRole('navigation');

    // Navigate to Robotik
    await nav.getByRole('link', { name: 'Robotik', exact: true }).click();
    await expect(page).toHaveURL('/robotik');

    // Navigate to AI
    await nav.getByRole('link', { name: 'AI & Yazılım' }).click();
    await expect(page).toHaveURL('/ai');

    // Navigate to Enerji
    await nav.getByRole('link', { name: 'Enerji', exact: true }).click();
    await expect(page).toHaveURL('/enerji');

    // Navigate to Hakkımızda
    await nav.getByRole('link', { name: 'Hakkımızda' }).click();
    await expect(page).toHaveURL('/hakkimizda');

    // Navigate to İletişim
    await nav.getByRole('link', { name: 'İletişim' }).click();
    await expect(page).toHaveURL('/iletisim');

    // Navigate back to home
    await nav.getByRole('link', { name: 'Ana Sayfa' }).click();
    await expect(page).toHaveURL('/');
  });

  test('should show mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Mobile menu button should be visible
    const menuButton = page.getByRole('button', { name: /menüyü aç/i });
    await expect(menuButton).toBeVisible();

    // Click to open menu
    await menuButton.click();
    
    // Menu items should be visible in mobile menu
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu.getByRole('link', { name: 'Robotik' })).toBeVisible();
    await expect(mobileMenu.getByRole('link', { name: 'AI & Yazılım' })).toBeVisible();
  });

  test('should have footer on all pages', async ({ page }) => {
    const pages = ['/', '/robotik', '/ai', '/enerji', '/hakkimizda', '/iletisim'];
    
    for (const url of pages) {
      await page.goto(url);
      await expect(page.getByRole('contentinfo')).toBeVisible();
      await expect(page.getByText(/HAVSAN GRUP/i)).toBeVisible();
    }
  });

  test('should navigate using footer links', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Click footer link
    await page.getByRole('contentinfo').getByRole('link', { name: 'Gizlilik Politikası' }).click();
    await expect(page).toHaveURL('/privacy');
    
    await page.goBack();
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    await page.getByRole('contentinfo').getByRole('link', { name: 'Kullanım Şartları' }).click();
    await expect(page).toHaveURL('/terms');
  });
});
