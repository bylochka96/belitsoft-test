import { test, expect } from '../fixtures/demoqa.fixture';
import { buildFormData } from '../test-data/text-box-data';
import { expectedSelectedItems } from '../test-data/check-box-data';

test.describe('DemoQA Elements', () => {

    test('fills and submits Text Box form', async ({ textBoxPage }) => {

        const formData = buildFormData();
        await textBoxPage.fillForm(formData);
        await textBoxPage.submitButton.click();

        await expect(textBoxPage.output).toBeVisible();

        if (formData.fullName) {
            await expect(textBoxPage.outputName).toHaveText(`Name:${formData.fullName}`);
        }

        await expect(textBoxPage.outputEmail).toHaveText(`Email:${formData.email}`);

        if (formData.currentAddress) {
            await expect(textBoxPage.outputCurrentAddress).toHaveText(`Current Address :${formData.currentAddress}`);
        }

        if (formData.permanentAddress) {
            await expect(textBoxPage.outputPermanentAddress).toHaveText(`Permananet Address :${formData.permanentAddress}`);
        }

    });

    test('selecting Home marks all child items', async ({ checkBoxPage }) => {

        await checkBoxPage.homeCheckBox.click();
        await expect(checkBoxPage.homeCheckBox).toHaveAttribute('aria-checked', 'true');

        await checkBoxPage.expandAll();

        const checkBoxes = await checkBoxPage.checkBoxes.all();
        for (const checkBox of checkBoxes) {
            await expect(checkBox).toHaveAttribute('aria-checked', 'true');
        }

        await expect(checkBoxPage.selectedItems).toHaveText(expectedSelectedItems);

    });

    test('does not submit form with invalid email', async ({ textBoxPage }) => {

        const formData = buildFormData({email: 'invalid-email'});
        await textBoxPage.fillForm(formData);

        await textBoxPage.submit();

        await expect(textBoxPage.emailInput).toHaveClass(/field-error/);
        await expect(textBoxPage.output).toBeHidden();
    });
});
