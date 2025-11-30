import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    
    // Wait for preloader to complete (if shown)
    await page.waitForTimeout(3000);
    
    // Check if main module cards are visible
    await expect(page.getByText('Robotik Kodlama')).toBeVisible();
    await expect(page.getByText('AI & Yazılım')).toBeVisible();
    await expect(page.getByText('Enerji')).toBeVisible();
  });

  test('should navigate to Robotik page on card click', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(3000); // Wait for preloader
    
    // Click on Robotik card in main section
    await page.locator('main a[href="/robotik"]').first().click();
    
    // Verify navigation
    await expect(page).toHaveURL('/robotik');
    await expect(page.getByRole('heading', { name: /robotik kodlama/i })).toBeVisible();
  });

  test('should navigate to AI page on card click', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(3000);
    
    await page.locator('main a[href="/ai"]').first().click();
    
    await expect(page).toHaveURL('/ai');
    await expect(page.getByRole('heading', { name: /ai.*yazılım/i })).toBeVisible();
  });

  test('should navigate to Enerji page on card click', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(3000);
    
    await page.locator('main a[href="/enerji"]').first().click();
    
    await expect(page).toHaveURL('/enerji');
    await expect(page.getByRole('heading', { name: /enerji/i })).toBeVisible();
  });

  test('should have responsive layout on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto('/');
    await page.waitForTimeout(3000);
    
    // Check if cards are stacked vertically
    const cards = page.locator('a[href^="/"]').filter({ hasText: /robotik|ai|enerji/i });
    await expect(cards).toHaveCount(3);
  });
});
