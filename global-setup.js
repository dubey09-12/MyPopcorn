import { chromium } from '@playwright/test';
import { LoginPage } from './pages/Login.js';

export default async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.signIn();

  await context.storageState({ path: 'auth.json' });
  await browser.close();
};
