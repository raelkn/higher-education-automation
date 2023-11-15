import LoginPage from "../pageobjects/LoginPage.ts";
describe('Login test suite',()=>{
    it('Login with username and password ', async () => {
        await LoginPage.home()
        await LoginPage.login()
        await LoginPage.waitForSeconds(5)

    });
})