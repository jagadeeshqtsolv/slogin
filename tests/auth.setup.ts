import { test as setup } from '@playwright/test';
import { loginToSalesforce } from '../support/salesforce-auth';

// Auto-generated — regenerated whenever the project's Salesforce Login settings change.
// Do not hand-edit; changes will be lost.
const AUTH_FILE = '.auth/salesforce.json';

setup('authenticate with Salesforce', async ({ page }) => {
  const privateKey = Buffer.from(
    process.env.SF_AUTH_PRIVATE_KEY_B64 ?? '',
    'base64',
  ).toString('utf8');

  await loginToSalesforce(page, {
    clientId: process.env.SF_AUTH_CLIENT_ID ?? '',
    username: process.env.SF_AUTH_USERNAME ?? '',
    privateKey,
    loginUrl: process.env.SF_AUTH_LOGIN_URL || undefined,
    sandbox: process.env.SF_AUTH_IS_SANDBOX === 'true',
  });

  await page.context().storageState({ path: AUTH_FILE });
});
