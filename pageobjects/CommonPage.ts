import type { Locator, Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class CommonPage {
  private static readonly L = {
    clickNewToOpenLeadCreationModal: { strategy: 'css' as const, value: 'button[name=\'New\']', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}


  async clickClickNewToOpenLeadCreationModal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal));
  }

  async doubleClickClickNewToOpenLeadCreationModal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal));
  }

  async longPressClickNewToOpenLeadCreationModal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal));
  }

  async expectClickNewToOpenLeadCreationModalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal), timeoutMs);
  }

  async expectClickNewToOpenLeadCreationModalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal), timeoutMs);
  }

  async expectClickNewToOpenLeadCreationModalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal), expected, timeoutMs);
  }

  async expectClickNewToOpenLeadCreationModalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal), substring, timeoutMs);
  }

  async expectClickNewToOpenLeadCreationModalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal), value, timeoutMs);
  }

  async expectClickNewToOpenLeadCreationModalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal), timeoutMs);
  }

  async expectClickNewToOpenLeadCreationModalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal), timeoutMs);
  }

  async expectClickNewToOpenLeadCreationModalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal), timeoutMs);
  }

  async expectClickNewToOpenLeadCreationModalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal), timeoutMs);
  }

  async expectClickNewToOpenLeadCreationModalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal), timeoutMs);
  }

  async expectClickNewToOpenLeadCreationModalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal), count, timeoutMs);
  }

  async scrollClickNewToOpenLeadCreationModalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.clickNewToOpenLeadCreationModal));
  }

}
