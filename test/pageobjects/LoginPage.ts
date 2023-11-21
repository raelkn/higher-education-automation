import BasePage from "./BasePage.ts";

class LoginPage extends BasePage{
    // Selectors go here
    public get username(){
        return $('#login_username')
    }
    public get password(){
        return $('#login_password')
    }
    public get loginButton() {
        return $('button > span')
    }

    // Functions start here

    public async enterUsername(){
        await this.username.click()
        await this.username.setValue('superadmin')
    }
    public async enterPassword(){
        await this.password.click()
        await this.password.setValue('DigitalMoE21')
    }
    public async clickLoginButton(){
        await this.loginButton.click()
    }
    public async login(username: string , password : string){
        await this.username.click()
        await this.username.setValue(username)
        await this.password.click()
        await this.password.setValue(password)
        await this.loginButton.click()

    }
}

export default new LoginPage()