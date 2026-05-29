const { Page, Locator } = require('@playwright/test')

class DashboardPage {
    constructor(page){
        this.page = page
        this.UniqueVisitors = page.locator('#unique-visitors-number')
        this.IdentifiedContacts = page.locator('#identified-phone-number')
        this.ConsentedVisitor = page.locator('#identified-email-number:visible')
        this.orgbtn = page.locator('#dropdownDefaultButton')
        this.orgSearchbtn = page.getByRole('textbox', { name: 'Search...' })
        this.orgSelect = page.getByTitle('Prince Store2')
    }

    async selectingOrg(orgName){
        await this.orgbtn.click()
        await this.orgSearchbtn.fill(process.env.ORG_NAME)
        await this.orgSelect.click()
    }
}

export { DashboardPage} 