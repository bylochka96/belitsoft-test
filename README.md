# DemoQA Playwright Tests

baseURL: https://demoqa.com/

### Installation

```bash
npm install
npx playwright install
```

### Run tests

```bash
npx playwright test
```

Run tests only in Chromium:

```bash
npx playwright test --project=chromium
```
Run tests in UI mode:

```bash
npx playwright test --ui
```
Open the HTML report:

```bash
npx playwright show-report
```