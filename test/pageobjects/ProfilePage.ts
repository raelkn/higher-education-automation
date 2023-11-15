import BasePage from "./BasePage.ts";
class ProfilePage extends BasePage{
    private get profileDropdown(){
        return $('.style_Text__kGo8p')
    }
    private get viewMyProfile(){
        return $('span[aria-label="user"]')
    }

    public async clickViewMyProfile(){
        await this.profileDropdown.click()
        await this.viewMyProfile.click()

    }

}

export default new ProfilePage()