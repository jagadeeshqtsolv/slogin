import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('Create Lead with mandatory fields and verify default status and redirect', { tag: ["@smoke","@regression","@P0","@case-fd26b202-a77a-43fe-9534-008de0b51905","@req-1d83d26d-5669-47c4-94f5-ad2682e22bc0"] }, async ({ page, salesforceLoginPage, homePage, leadNewPage, leadRecordPage }) => {
  await test.step('Navigate to URL — Open Salesforce environment URL', async () => {
    await page.goto('https://orgfarm-cdb7bbd1fc-dev-ed.develop.my.salesforce.com');
  });
  await test.step('Click — Login as Sales Representative', async () => {
    await salesforceLoginPage.loginAsRole('sales');
  });
  await test.step('Click — Go to Leads tab — (a[title=\'Leads\'])', async () => {
    await homePage.clickLeads();
  });
  await test.step('Wait until visible — Wait for New button on Leads list view — (button[name=\'New\'])', async () => {
    await homePage.expectLeadsVisible('10000');
  });
  await test.step('Fill — Enter Last Name (required) — (input[name=\'lastName\'])', async () => {
    await leadNewPage.fillLastName('Smith');
  });
  await test.step('Fill — Enter Company (required) — (input[name=\'Company\'])', async () => {
    await leadNewPage.fillCompany('ABC Technologies');
  });
  await test.step('Click — Save new Lead — (button[name=\'SaveEdit\'])', async () => {
    await leadNewPage.clickSaveAndNew();
  });
  await test.step('Wait until visible — Wait for Lead record page to load — (h1)', async () => {
    await leadRecordPage.expectHeaderVisible('15000');
  });
  await test.step('Assert contains text — Verify redirected to Lead record page (header shows Last Name) — (h1)', async () => {
    await leadRecordPage.expectHeaderContainsText('Smith');
  });
  await test.step('Assert contains text — Verify default Lead Status is Open - Not Contacted — (body)', async () => {
    await leadRecordPage.expectPageBodyContainsText('Open - Not Contacted');
  });
});
