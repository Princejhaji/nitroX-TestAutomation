const { Page, Locator } = require('@playwright/test')

class consent_mgt{
    constructor(page){
        this.page = page
        this.consent_mgt_module = page.getByRole('link', { name: 'Consent Management' })
        this.prefilled_template = page.getByText('Prefill Templates', { exact: true })
        this.activateNow = page.locator('button').filter({ hasText: 'Activate Now' }).nth(8)
        this.activeVersion = page.getByRole('button', { name: 'Activate New Version' })
        this.saveAndPublish = page.getByRole('button', { name: 'Save and Publish' })
        this.confirmbtn = page.getByRole('button', { name: 'Confirm' })
        this.detailsBtn = page.getByRole('button', { name: 'Details' })
        this.deactivateBtn = page.locator('label.relative.inline-flex.items-center.cursor-pointer').locator('div').nth(0)
        this.yesDeactivate = page.getByRole('button', { name: 'Yes, deactivate' })
        this.iframeHandle = page.frameLocator('#nitrotemplate-id')
    }

    async activateTemplate(){
        await this.prefilled_template.click()
        await this.activateNow.click()
        await this.activeVersion.click()
        await this.saveAndPublish.click()
        await this.confirmbtn.click()
        await this.page.waitForTimeout(5000)
    }

    async deactivateTemplate(){
        await this.detailsBtn.click()
        await this.deactivateBtn.click()
        await this.yesDeactivate.click()


}

}

export { consent_mgt }