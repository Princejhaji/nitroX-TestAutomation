import { test, expect } from '@playwright/test';
import { configDotenv } from "dotenv";
import { identify } from '../utils/identifyFunction';
import { TestSession } from '../utils/TestSession';
import { LoginPage } from "../pages/login.page";
import { DashboardPage } from '../pages/dashboard.page';
import { Store } from '../pages/store.page';
import { hiu_aiu } from '../pages/hiu.page';
import { consent_mgt } from '../pages/consent_mgt.page';

test.use({
    storageState : 'playwright/.auth/user.json'
})

test("Complete Consent management case" , async({page})=>{

     const gotoHome = new LoginPage(page)
     const consent_mgt_things = new consent_mgt(page)
     const store_things = new Store(page)
     const selectOrg = new DashboardPage(page)

     await gotoHome.goto()
     await page.waitForTimeout(2000)
     await selectOrg.selectingOrg()
     console.log("Opening consent management and activating popup")
     await consent_mgt_things.consent_mgt_module.click()
     await consent_mgt_things.activateTemplate()

     console.log("Go to store and fill the popup")
     await store_things.openStore()
     await page.waitForTimeout(3000)
     await page.reload()
     await page.waitForTimeout(5000)

     const iframePopup = await page.frameLocator('#nitrotemplate-id')

     await iframePopup.locator('#phone').fill(TestSession.getPhone())
     await iframePopup.locator('#phone-submit-btn').click()

     await gotoHome.goto()




})