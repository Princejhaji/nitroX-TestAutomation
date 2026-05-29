import { test, expect } from '@playwright/test';
import { configDotenv } from "dotenv";
import { identify } from '../utils/identifyFunction';
import { TestSession } from '../utils/TestSession';
import { LoginPage } from "../pages/login.page";
import { DashboardPage } from '../pages/dashboard.page';
import { Store } from '../pages/store.page';
import { hiu_aiu } from '../pages/hiu.page';


test.use({
    storageState: "playwright/.auth/user.json"
})


test("Complete hiu_aiu test cases" , async({page}) =>{

     const gotoHome = new LoginPage(page)
     const hiu_things = new hiu_aiu(page)
     const store_things = new Store(page)
     const selectOrg = new DashboardPage(page)


     //Going to store and identifying user
     console.log("Going to store and identifying the user")
    
     //Opening store
     await store_things.openStore()
     console.log("-------Identifying user on store-----------")
     await page.waitForTimeout(4000)
     await identify(page)
     await page.waitForTimeout(2000)
     await store_things.addToCart(process.env.PRODUCT_URL)
     await page.waitForTimeout(2000)


     //opening home page
     await gotoHome.goto()
     await selectOrg.selectingOrg()

     //clicking Hiu modules
     await hiu_things.hiuModule.click()
     await hiu_things.hiuUserCard.click()
     const hiu_email = await hiu_things.userCardEmail.textContent()

     //Asserting the HIU email
     console.log("Asserting the HIU email")
     await expect.soft(hiu_email).toBe(TestSession.getPhone())


     await hiu_things.downloadData()
     const download_status = await hiu_things.validateDownloadAPI()
     
     //Asserting download API status code
     console.log("Asserting download API status code")
     console.log(download_status)
     await expect(download_status).toBeTruthy()






     








})