export default class BasePage{


    public async home(){
        await browser.url("https://frontend.staging.higher-education-digital-id.apps.moe.iohk.io/")
        await browser.maximizeWindow()
    }
    public async waitForSeconds(seconds :number){
        await browser.pause(seconds*1000)
    }

}