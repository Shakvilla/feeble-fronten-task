import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Homepage', () => {
    test('should have comprehensive SEO metadata', async ({ page }) => {
        await page.goto('/');

        // Verify title
        await expect(page).toHaveTitle(/Coup - iMessage Automation/);

        // Verify meta description
        const description = await page.locator('meta[name="description"]');
        await expect(description).toHaveAttribute('content', /Coup lets you/);

        // Verify canonical URL
        const canonical = await page.locator('link[rel="canonical"]');
        await expect(canonical).toHaveAttribute('href', /feeble-frontend-task.vercel.app/);
    });

    test('should contain key sections', async ({ page }) => {
        await page.goto('/');

        // Hero Section
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
        await expect(page.getByText('iMessage Automation for Teams')).toBeVisible();

        // Navbar interaction
        const navbar = page.locator('nav').first();
        await expect(navbar).toBeVisible();

        // Check for CTA buttons
        await expect(page.getByRole('button', { name: /Download for Mac/i })).toBeVisible();
    });

    test('should pass accessibility check', async ({ page }) => {
        await page.goto('/');

        // Run Axe accessibility scan
        const accessibilityScanResults = await new AxeBuilder({ page })
            .exclude('#__next-build-watcher') // Exclude Next.js dev overlay if present
            .analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('mobile menu should work on smaller screens', async ({ page }) => {
        // Use mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');

        // Hamburger menu should be visible
        const hamburger = page.getByRole('button', { name: /open menu/i }); // Assuming aria-label
        await expect(hamburger).toBeVisible();

        // Click to open
        await hamburger.click();

        // Menu items should appear
        await expect(page.getByText('Use Case')).toBeVisible();
    });
});
