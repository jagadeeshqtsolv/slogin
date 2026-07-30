import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('Create Lead with mandatory fields and verify default status and redirect', { tag: ["@smoke","@regression","@P0","@case-fd26b202-a77a-43fe-9534-008de0b51905"] }, async ({ page, salesforceLoginPage, homePage, leadPipelineInspectionPage, leadNewPage, leadRecordPage }) => {
  await test.step('Open — Open Salesforce environment URL', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Click — Login as Sales Representative', async () => {
    await salesforceLoginPage.loginAsRole('Sales Representative');
  });

  await test.step('Click — Go to Leads tab', async () => {
    await homePage.clickLeads();
  });

  await test.step('Assert visible — Wait for New button on Leads list view', async () => {
    await leadPipelineInspectionPage.expectNewVisible();
  });

  await test.step('Click — Click New to open Lead creation modal', async () => {
    await leadPipelineInspectionPage.clickNew();
  });

  await test.step('Assert visible — Wait for New Lead modal', async () => {
    await leadNewPage.expectSaveEditVisible();
  });

  await test.step('Fill — Enter Last Name (required)', async () => {
    await leadNewPage.fillLastName(testData.createLeadWithMandatoryFieldsAndVerifyDefaultStatusAndRedirect.enterLastNameRequired);
  });

  await test.step('Fill — Enter Company (required)', async () => {
    await leadNewPage.fillCompany(testData.createLeadWithMandatoryFieldsAndVerifyDefaultStatusAndRedirect.enterCompanyRequired);
  });

  await test.step('Click — Save new Lead', async () => {
    await leadNewPage.clickSaveEdit();
  });

  await test.step('Assert visible — Wait for Lead record page to load', async () => {
    await leadRecordPage.expectHeaderVisible();
  });

  await test.step('Assert contains — Verify redirected to Lead record page (header shows Last Name)', async () => {
    await leadRecordPage.expectHeaderContainsText(testData.createLeadWithMandatoryFieldsAndVerifyDefaultStatusAndRedirect.enterLastNameRequired);
  });

  await test.step('Assert contains — Verify default Lead Status is Open - Not Contacted', async () => {
    await leadRecordPage.expectPageBodyContainsText('Open - Not Contacted');
  });
});
