import { type Locator, type Page } from '@playwright/test';

export class CheckBoxPage {

  readonly heading: Locator;
  readonly homeCheckBox: Locator;
  readonly selectedItems: Locator;

  constructor(private readonly page: Page) {

    this.heading = page.getByRole('heading', {
      name: 'Check Box',
      exact: true,
    });

    this.homeCheckBox = page.getByRole('checkbox', {
      name: 'Select Home',
      exact: true,
    });

    this.selectedItems = page.locator('#result .text-success');
  }

}