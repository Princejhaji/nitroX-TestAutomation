import { test, expect } from '@playwright/test';
import { configDotenv } from "dotenv";
import { identify } from '../utils/identifyFunction';
import { TestSession } from '../utils/TestSession';
import { LoginPage } from "../pages/login.page";
import { DashboardPage } from '../pages/dashboard.page';
import { Store } from '../pages/store.page';

test.use({
    storageState: "playwright/.auth/user.json"
})
test("Dashboard Test" , async ({page})=>{

    const gotoHome = new LoginPage(page)
    await gotoHome.goto()
    await expect(page).toHaveURL("/dashboard")

    const analyticsValue = new DashboardPage(page)

    await analyticsValue.selectingOrg()
    await page.waitForTimeout(3000)

    //Storing analytics.
    const beforeUniqueVisitors = Number(await analyticsValue.UniqueVisitors.textContent())
    const beforeIdentifiedContacts = Number(await analyticsValue.IdentifiedContacts.textContent())
    console.log("Initial Values UniqueVisitors: " , beforeUniqueVisitors)
    console.log("Initial Values IdentifiedContacts: " , beforeIdentifiedContacts)

    const shopifyStore = new Store(page)

    //Opening Store
    console.log("----------Opening Store-----------------")
    await shopifyStore.openStore()

    //Identifying user
    console.log("-------Identifying user on store-----------")
    await page.waitForTimeout(4000)
    await identify(page)


    //Coming back to store
    await gotoHome.goto()
    await page.waitForTimeout(3000)
    await page.reload()
    await page.waitForTimeout(3000)

    const afterUniqueVisitors = Number(await analyticsValue.UniqueVisitors.textContent())
    const afterIdentifiedContacts = Number(await analyticsValue.IdentifiedContacts.textContent())
    console.log("Initial Values UniqueVisitors: " , afterUniqueVisitors)
    console.log("Initial Values IdentifiedContacts: " , afterIdentifiedContacts)

    console.log("Asserting before and after analytics value")
    await expect(afterIdentifiedContacts).toBeGreaterThanOrEqual(beforeIdentifiedContacts)
    await expect(afterUniqueVisitors).toBeGreaterThanOrEqual(beforeUniqueVisitors)


})