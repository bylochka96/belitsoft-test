import { type Locator, type Page } from '@playwright/test';

export class CheckBoxPage {

  readonly heading: Locator;
  readonly homeCheckBox: Locator;
  readonly checkBoxes: Locator;
  readonly collapsedTreeNodes: Locator;
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

    this.checkBoxes = page.getByRole('checkbox');

    this.collapsedTreeNodes = page.locator('.rc-tree-switcher_close');
    
    this.selectedItems = page.locator('#result .text-success');

  }

  async expandAll(): Promise<void> {
    while (await this.collapsedTreeNodes.count()) {
      await this.collapsedTreeNodes.first().click();
    }
  }

}
