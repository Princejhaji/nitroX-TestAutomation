import { configDotenv } from "dotenv";
import { test, expect } from '@playwright/test';

class LoginPage{
    constructor(page){
        this.page = page
        this.username = page.getByRole('textbox', { name: 'Enter your email' });
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.loginbtn = page.getByRole('button', { name: 'Login' })
    }
  async goto() {
    await this.page.goto(process.env.NITRO_HOME);
  }

async login(username , password){
       await  this.username.fill(username)
       await  this.password.fill(password)
       await  this.loginbtn.click()
    }
}

export {LoginPage}