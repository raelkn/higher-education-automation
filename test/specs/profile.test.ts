import ProfilePage from "../pageobjects/ProfilePage.ts";
import LoginPage from "../pageobjects/LoginPage.ts";
import data = require('../testData/data.json');
describe('User profile tests',  ()=>{
    before(async ()=>{
        await ProfilePage.home()
        await LoginPage.login(data.username, data.password)
    })
    it('should view user profile ', async () => {
        await ProfilePage.clickViewMyProfile()
        await ProfilePage.waitForSeconds(5)
    });

})