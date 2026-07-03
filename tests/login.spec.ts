import { test, expect } from '../fixtures/pages';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
});

test('secure area message is visible after login', async ({ page }) => {
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});

test('logout link is visible after login', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});