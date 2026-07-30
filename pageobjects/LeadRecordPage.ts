import type { Page } from "@playwright/test";
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

export class LeadRecordPage {
  private static readonly L = {
    header: { strategy: 'css', value: 'h1', actionKind: 'generic' as const },
    pageBody: { strategy: 'css', value: 'body', actionKind: 'generic' as const }
  } as const;

  constructor(private readonly page: Page) {}

  async clickHeader(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadRecordPage.L.header));
  }

  async doubleClickHeader(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadRecordPage.L.header));
  }

  async longPressHeader(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadRecordPage.L.header));
  }

  async expectHeaderVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadRecordPage.L.header), timeoutMs);
  }

  async expectHeaderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadRecordPage.L.header), timeoutMs);
  }

  async expectHeaderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadRecordPage.L.header), expected, timeoutMs);
  }

  async expectHeaderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadRecordPage.L.header), substring, timeoutMs);
  }

  async expectHeaderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadRecordPage.L.header), value, timeoutMs);
  }

  async expectHeaderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadRecordPage.L.header), timeoutMs);
  }

  async expectHeaderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadRecordPage.L.header), timeoutMs);
  }

  async expectHeaderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadRecordPage.L.header), timeoutMs);
  }

  async expectHeaderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadRecordPage.L.header), timeoutMs);
  }

  async expectHeaderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadRecordPage.L.header), timeoutMs);
  }

  async expectHeaderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadRecordPage.L.header), count, timeoutMs);
  }

  async scrollHeaderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadRecordPage.L.header));
  }

  async clickPageBody(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadRecordPage.L.pageBody));
  }

  async doubleClickPageBody(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadRecordPage.L.pageBody));
  }

  async longPressPageBody(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadRecordPage.L.pageBody));
  }

  async expectPageBodyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadRecordPage.L.pageBody), timeoutMs);
  }

  async expectPageBodyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadRecordPage.L.pageBody), timeoutMs);
  }

  async expectPageBodyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadRecordPage.L.pageBody), expected, timeoutMs);
  }

  async expectPageBodyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadRecordPage.L.pageBody), substring, timeoutMs);
  }

  async expectPageBodyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadRecordPage.L.pageBody), value, timeoutMs);
  }

  async expectPageBodyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadRecordPage.L.pageBody), timeoutMs);
  }

  async expectPageBodyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadRecordPage.L.pageBody), timeoutMs);
  }

  async expectPageBodyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadRecordPage.L.pageBody), timeoutMs);
  }

  async expectPageBodyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadRecordPage.L.pageBody), timeoutMs);
  }

  async expectPageBodyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadRecordPage.L.pageBody), timeoutMs);
  }

  async expectPageBodyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadRecordPage.L.pageBody), count, timeoutMs);
  }

  async scrollPageBodyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadRecordPage.L.pageBody));
  }

}
