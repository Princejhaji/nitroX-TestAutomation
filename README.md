# NitroX E2E Test Automation Framework 🎭

A production-grade end-to-end test automation framework built with **Playwright (JavaScript)** for AI-powered D2C SaaS platform — NitroX by Nitro Commerce.

## 🚀 Tech Stack

- **Playwright** (JavaScript) — E2E browser automation
- **Page Object Model** — scalable framework architecture
- **Fixtures** — reusable session state management
- **Allure** — rich HTML test reporting
- **GitHub Actions** — CI/CD pipeline
- **dotenv** — secure credential management

## 📁 Project Structure
nitroX-TestAutomation/
├── tests/              → Test specs
├── pages/              → POM page classes
├── fixtures/           → Reusable auth fixtures
├── utils/              → Helper functions
├── .github/workflows/  → CI/CD pipeline
├── .env                → Environment variables (not tracked)
└── playwright.config.js → Framework configuration

- **Login** — authentication flow with session state
- **Dashboard** — analytics validation and org selection
- **HIU/AIU Module** — consent management flows with API response validation
- **Store** — product interactions and identify function
- **iFrame** — embedded component handling
- **API Validation** — response interception

## ⚙️ Setup

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install chromium

# Create .env file
cp .env.example .env
# Add your credentials to .env
```

## 🔐 Environment Variables

## 🧪 Running Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/dashboard.test.js

# Run in headed mode
npx playwright test --headed

# Generate Allure report
npx allure generate allure-results --clean
npx allure open
```

## 📊 Reports

- **HTML Report** — `npx playwright show-report reports/html`
- **Allure Report** — `npx allure open`

## 👨‍💻 Author

**Prince Jha** — SDET
- 📧 jhaprince788@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/princejhaji/)
- 🐙 [GitHub](https://github.com/Princejhaji)
