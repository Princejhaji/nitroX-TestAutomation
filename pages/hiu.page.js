import { configDotenv } from "dotenv";
import { test, expect } from '@playwright/test';

class hiu_aiu{
    constructor(page){
        /** @type {import('@playwright/test').Page} */
        this.page = page
        this.hiuModule = page.locator('p:has-text("High Intent Users")')
        this.hiuUserCard = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
        this.userCardEmail = page.locator('span:has-text("+918767890281")')
        this.aiuModule = page.getByRole('button', { name: 'All Identified Users' })
        this.downloadbtn = page.locator("//div[@title='Download Users']//*[name()='svg']")
        this.downloademail = page.getByRole('textbox', { name: 'Email *' })
        this.recieveDownload = page.getByText('Receive Data', { exact: true })
    }


    async downloadData(){
        await this.downloadbtn.click()
        await this.downloademail.fill("jhaprince788@gmail.com")
        await this.recieveDownload.click()
    }

    async validateDownloadAPI(){
        const responsePromise = await this.page.waitForResponse(res => res.url().includes("/v1/services/json/contacts/hiu"))
        const status = responsePromise.status()
        return status

    }
}

export { hiu_aiu }