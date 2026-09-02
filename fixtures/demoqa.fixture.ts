import {test as base, type Page, expect } from '@playwright/test';

import { HomePage } from '../pages/home.page';
import { ElementsPage } from '../pages/elements.page';
import { TextBoxPage } from '../pages/text-box.page';


type AppFixtures = {
  textBoxPage: TextBoxPage;
};

async function openElements(page: Page): Promise<ElementsPage> {
  const homePage = new HomePage(page);
  const elementsPage = new ElementsPage(page);

  await homePage.open();
  await homePage.elementsLink.click();
  await expect(page).toHaveURL('/elements');

  return elementsPage;
}

export const test = base.extend<AppFixtures>({

  textBoxPage: async ({ page }, use) => {
    const elementsPage = await openElements(page);
    const textBoxPage = new TextBoxPage(page);

    await elementsPage.textBoxLink.click();
    await expect(textBoxPage.heading).toBeVisible();

    await use(textBoxPage);
  },

});

export { expect } from '@playwright/test';