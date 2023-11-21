import LoginPage from "../pageobjects/LoginPage.ts";
import data = require('../testData/data.json');
describe('Login test suite',()=>{
    it('Login with username and password ', async () => {
        await LoginPage.home()
        await LoginPage.login(data.username, data.password)
        await LoginPage.waitForSeconds(5)
    });
})