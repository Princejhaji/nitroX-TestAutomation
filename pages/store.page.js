import { configDotenv } from "dotenv";
import { test, expect } from '@playwright/test';

class Store{
    constructor(page){
        this.page = page
        this.storepassword = page.getByLabel('Enter store password')
        this.sumbitPass = page.getByRole('button', { name: 'Enter' })
        this.addtocartbtn = page.getByRole('button', { name: 'Add to cart' })
    }

    async openStore(){
       await this.page.goto(process.env.STORE_URL)

       try {
        await this.storepassword.fill(process.env.STORE_PASS)
        await this.sumbitPass.click()
       } catch (error) {
        console.log("Password page not found")
       }      
    }

    async addToCart(productLink){
        await this.page.goto(productLink)
        await this.addtocartbtn.click()
    }
    
}

export {Store}