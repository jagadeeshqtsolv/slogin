import { loginToSalesforce } from './salesforce-auth';
import type { Page } from '@playwright/test';

// Auto-generated — regenerated whenever Setup → Auth → Salesforce Login roles change.
// Do not hand-edit; changes will be lost.
const ROLE_USERNAME: Record<string, string> = {
  "admin": process.env.SF_AUTH_ROLE_ADMIN_USERNAME ?? '',
  "sales": process.env.SF_AUTH_ROLE_SALES_USERNAME ?? '',
};

/**
 * Switches the Salesforce user logged in on `page` to the named role — same page, same
 * browser context, no new session. `role` must match a role name configured in
 * Setup → Auth → Salesforce Login.
 */
export async function loginAsSalesforceRole(page: Page, role: string): Promise<void> {
  const username = ROLE_USERNAME[role];
  if (!username) {
    throw new Error(`loginAsSalesforceRole: unknown role "${role}" — check Setup → Auth → Salesforce Login.`);
  }

  const privateKey = Buffer.from(process.env.SF_AUTH_PRIVATE_KEY_B64 ?? '', 'base64').toString('utf8');

  await loginToSalesforce(page, {
    clientId: process.env.SF_AUTH_CLIENT_ID ?? '',
    username,
    privateKey,
    loginUrl: process.env.SF_AUTH_LOGIN_URL || undefined,
    sandbox: process.env.SF_AUTH_IS_SANDBOX === 'true',
  });
}
