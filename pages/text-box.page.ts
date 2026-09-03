import { type Locator, type Page } from '@playwright/test';
import { type formData } from '../test-data/text-box-data';


export class TextBoxPage {

  readonly heading: Locator;

  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;

  readonly output: Locator;
  readonly outputName: Locator;
  readonly outputEmail: Locator;
  readonly outputCurrentAddress: Locator;
  readonly outputPermanentAddress: Locator;

  constructor(private readonly page: Page) {

    this.heading = page.getByRole('heading', {
      name: 'Text Box',
      exact: true,
    });

    this.fullNameInput = page.getByRole('textbox', {
      name: 'Full Name',
      exact: true,
    });

    this.emailInput = page.getByRole('textbox', {
      name: 'name@example.com',
      exact: true,
    });

    this.currentAddressInput = page.getByRole('textbox', {
      name: 'Current Address',
      exact: true,
    });

    this.permanentAddressInput = page.locator('#permanentAddress');

    this.submitButton = page.getByRole('button', {
      name: 'Submit',
      exact: true,
    });

    this.output = page.locator('#output');
    this.outputName = this.output.locator('#name');
    this.outputEmail = this.output.locator('#email');
    this.outputCurrentAddress = this.output.locator('#currentAddress');
    this.outputPermanentAddress = this.output.locator('#permanentAddress');

  }

  async fillForm(data: formData): Promise<void> {

    if (data.fullName) {
      await this.fullNameInput.fill(data.fullName);
    }

    await this.emailInput.fill(data.email);

    if (data.currentAddress) {
      await this.currentAddressInput.fill(data.currentAddress);
    }

    if (data.permanentAddress) {
      await this.permanentAddressInput.fill(data.permanentAddress);
    }

  }

  async submit(): Promise<void> {

    await this.submitButton.click();
    
  }
}