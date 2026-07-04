import { test, expect } from '../fixtures/pages';

const invalidLoginCases = [
  { username: 'tomsmith', password: 'wrongpassword', expectedError: 'Your password is invalid!' },
  { username: 'wronguser', password: 'SuperSecretPassword!', expectedError: 'Your username is invalid!' },
  { username: '', password: '', expectedError: 'Your username is invalid!' },
];

for (const { username, password, expectedError } of invalidLoginCases) {
  test(`shows error for username="${username}" password="${password}"`, async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login(username, password);

    await expect(page.getByText(expectedError)).toBeVisible();
  });
}