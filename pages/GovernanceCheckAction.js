const { test, expect } = require('@playwright/test')
const { LoginPage } = require('./Login');

class GovernanceCheck {
    constructor(page) {
        this.page = page;

        this.img = page.locator("img[alt='Brand mark']")
        this.mediaSource = page.locator("//span[text()='Media Sources']");
        this.mediasource_Iconik = page.locator("(//a[text()='Iconik'])[2]");
        this.pl_Storage_folder = page.locator("//span[text()='pl-storage-test']");
        this.newAssets_folder = page.locator("//div[text()='NewAssets']");
        this.localizedTitle_folder = page.locator("//div[text()='New Assets with Localized Title']");
        this.psdFile = page.locator("//table//tbody//div//div//div/span[1][contains(text(),'.psd')]");
        this.reGovCheck_Button = page.locator("//button[text()='Re-check Governance']");
        this.executeButton = page.locator("//button[text()='Execute']");
        this.activityModule = page.locator("//span[text()='Activity']");
        this.activity_text = page.locator("//h5[text()='Activity']");
        this.jobType = page.locator("(//table/tbody/tr)[1]/td[1]//span[@class='text-sm font-medium text-slate-700 dark:text-slate-200']");
        this.jobStatus = page.locator("(//table/tbody/tr)[1]/td[4]//span[@class='relative top-px']")
        this.src = page.locator("(//tbody//tr)[1]/td[1]//span[2]")

        this.mediasource_Frameio = page.locator("(//a[text()='Frame.io'])[2]")
        this.timeStamp = page.locator("(//table/tbody/tr)[1]/td[2]//span[1]")
        this.jobTypeOnIconik = page.locator("(//tbody//tr[1]/td[1]/div/span)[1]")
        this.jobStatusOnIconik = page.locator("(//tbody//tr[1]/td[4]/div/span)[1]")
        this.completeStatus = page.locator("//span[@class='px-3 py-1 rounded-full text-sm font-bold shadow-sm text-white']")
        this.progress = page.locator("(//span[@class='text-white font-bold text-sm'])[2]")
        this.viewAssetButton = page.locator("//button[text()='View Asset']")
        this.rawAsset = page.locator("//h3[contains(@class,'text-sm md')]")
        this.tableData = page.locator("//td[@class='px-3 py-3 whitespace-nowrap']");
        this.closeButton = page.locator("//i[text()='close']")
        this.countOfAssets = page.locator("//div[@class='flex items-center']//span[1]")
        this.assetFolder = page.locator("//span[text()='Assets']");
        this.imagesFolder = page.locator("//div[text()='Images']");
        this.portraitFolder = page.locator("//div[text()='Portraits']");
        this.govCheckButton = page.locator("//button[text()='Governance Check']")
        this.psdFileFrameio= page.locator("(//table//td[2])[2]")



    }

    async verifyLOgoOnDashBoardpage() {
        expect(this.img).toBeVisible();
    }
    async clickOnMediasource() {
        await this.mediaSource.click();
    }
    async clcikOnMediasource_Iconik() {
        await this.mediasource_Iconik.click();
    }
    async clickOnMediaSource_Frameio() {
        await this.mediasource_Frameio.click();
    }
    async folder_travel_iconic(){
        await this.pl_Storage_folder.click();
        await this.newAssets_folder.click();
        await this.localizedTitle_folder.click();
    }
    async folder_Travel_frameio(){
        await this.assetFolder.click();
        await this.imagesFolder.click();
        await this.portraitFolder.click();
    }
    async selectPsdAsset() {
        const asset = await this.psdFile.first();
        return asset;
    }
    async clickOnRe_GovcheckButton() {
        await this.reGovCheck_Button.click();
    }
    async clickOnExecuteButton() {
        await this.executeButton.click();
    }
    async clickOnActivityModule() {
        await this.activityModule.click();
    }
    async verifyActivityTextOnActivitypage() {
        expect(this.activity_text).toBeVisible();
    }
    async verifyJobOnActivityPage_iconik() {
        await expect(this.jobType).toHaveText('Governance Check');
        await expect(this.jobStatus).toHaveText('IN_PROGRESS');
        const srcFile = await this.src.textContent();
        expect(srcFile).toContain('iconik');
    }
    async verifyJobOnActivityPage_Frameio() {
        await expect(this.jobType).toHaveText('Governance Check');
        await expect(this.jobStatus).toHaveText('IN_PROGRESS');
        const srcFile = await this.src.textContent();
        expect(srcFile).toContain('frameio');
    }
    async verifyJobOnActivitypageWithTimeStamp() {
        await expect(this.jobTypeOnIconik).toHaveText('Governance Check');
        // await expect(this.jobStatusOnIconik).toHaveText('COMPLETED');
        await expect(this.jobStatusOnIconik).toHaveText('COMPLETED', { timeout: 300000 });
        const srctext2 = await this.src.textContent();
        expect(srctext2).toContain('iconik');
    }
    async verifyJobOnActivitypageWithTimeStamp_Frameio() {
        await expect(this.jobTypeOnIconik).toHaveText('Governance Check');
        await expect(this.jobStatusOnIconik).toHaveText('COMPLETED');
        const srctext2 = await this.src.textContent();
        expect(srctext2).toContain('frameio');
    }
    async clickOnTimestamp() {
        await this.timeStamp.click();
    }
    async verificationOnDetailPage() {
        await expect(this.completeStatus).toHaveText('COMPLETED');
        await expect(this.progress).toHaveText('100%');
    }
    async clickOnViewAsset() {
        await this.viewAssetButton.click();
    }
    async verifyRawAsset() {
        const raw = await this.rawAsset.textContent();
}
    async clickOnCloseButton() {
        await this.closeButton.click();
    }


}
module.exports = { GovernanceCheck };