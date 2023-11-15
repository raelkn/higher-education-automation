import ProfilePage from "../pageobjects/ProfilePage.ts";
import LoginPage from "../pageobjects/LoginPage.ts";
describe('User profile tests',  ()=>{
    before(async ()=>{
        await ProfilePage.home()
        await LoginPage.login()
    })
    it('should view user profile ', async () => {
        await ProfilePage.clickViewMyProfile()
        await ProfilePage.waitForSeconds(5)
    });

})