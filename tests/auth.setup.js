const { test } = require('@playwright/test');

const { LoginPage } = require('../pages/login.page');

require('dotenv').config();

test('authenticate', async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto(process.env.NITRO_HOME);

    await login.login(
        process.env.NITRO_EMAIL,
        process.env.NITRO_PASS
    );

    // Save logged-in session
    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
});