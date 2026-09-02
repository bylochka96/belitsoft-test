import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {

  readonly elementsLink: Locator;

  constructor(private readonly page: Page) {

    this.elementsLink = page.getByRole('link', {
      name: 'Elements',
      exact: true,
    });

  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

}