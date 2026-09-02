import { type Locator, type Page } from '@playwright/test';

export class ElementsPage {
    
  readonly textBoxLink: Locator;
  readonly checkBoxLink: Locator;

  constructor(private readonly page: Page) {
  
    this.textBoxLink = page.getByRole('link', {
      name: 'Text Box',
      exact: true,
    });

    this.checkBoxLink = page.getByRole('link', {
      name: 'Check Box',
      exact: true,
    });
  }

}