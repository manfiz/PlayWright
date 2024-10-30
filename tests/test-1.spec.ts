import { test, expect } from '@playwright/test';

test('test recording', async ({ page }) => {
  
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle("First and reliable")
  
  const getByRole('link', { name: 'Get started' })

});