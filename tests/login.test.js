import { LoginPage } from "../pages/login.page";
import { test, expect } from '@playwright/test';
import { configDotenv } from "dotenv";

test("Login Test case" , async ({page}) => {
    const login = new LoginPage(page)
    await login.goto()
    await login.login(
        process.env.NITRO_EMAIL , 
        process.env.NITRO_PASS
    )

   await expect(page).toHaveURL("/dashboard")
})