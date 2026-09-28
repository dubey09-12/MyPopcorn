const { expect } = require('@playwright/test')
class SmartCrop {
    constructor(page) {
        this.page = page;
        this.img = page.locator("img[alt='Brand mark']")
        this.mediaSource = page.locator("//span[text()='Media Sources']");
        this.mediaSourceIconik = page.locator("(//a[text()='Iconik'])[2]");
        this.mediaSourceFrameio = page.locator("(//a[text()='Frame.io'])[2]");
        this.activityModule = page.locator("//span[text()='Activity']");
        this.activityTitle = page.locator("//h5[text()='Activity']");
        this.psdAsset = page.locator("//tbody//tr[contains(., '.psd')]")
        this.smartcropButton = page.locator("//button[text()='Smart Crop']")
        this.smartcropTemplateDropdown = page.locator("//i[text()='expand_more']")
        this.smartcropTemplate = page.locator("//div[text()='Smart Crop - Portrait Focused']")
        this.executeButton = page.locator("//button[text()='Execute']")
        this.jobType = page.locator("(//tbody//tr)[1]/td[1]//span[@class='text-sm font-medium text-slate-700 dark:text-slate-200']");
        this.jobStatus = page.locator("(//tbody//tr)[1]/td[4]//span[@class='relative top-px']");
        this.src = page.locator("(//tbody//tr)[1]/td[1]//span[2]");
    }
    async dashboardLandingVerification() {
        await expect(this.img).toBeVisible();

    }
    async clickOnMediaSource() {
        await this.mediaSource.click();
    }
    async clickOnMediaSourceIconik() {
        await this.mediaSourceIconik.click();
    }
    async clickOnExecuteButton() {
        await this.executeButton.click();
    }
    async clickOnActivityModule() {
        await this.activityModule.click();
    }
    async verifyActivityTitle() {
        await expect(this.activityTitle).toBeVisible();
    }
    async clickOnMediaSourceFrameio() {
        await this.mediaSourceFrameio.click();
    }
    async selectpsdAsset() {
        const asset = await this.psdAsset.first()
        return asset;
    }
    async clickOnSmartcropButton() {
        await this.smartcropButton.click();
    }
    async selectSmartCropTemplate() {
        await this.smartcropTemplateDropdown.click();
        await this.smartcropTemplate.click();
    }
    async verifyJobOnActivityPage() {
        await expect(this.jobType).toHaveText('Smart Crop');
        await expect(this.jobStatus).toHaveText('IN_PROGRESS');
        const srcFile = await this.src.textContent();
        expect(srcFile).toContain('iconik');
    }
    async verifyJob_Frameio() {
        await expect(this.jobType).toHaveText('Smart Crop');
        await expect(this.jobStatus).toHaveText('IN_PROGRESS');
        const srcFile = await this.src.textContent();
        expect(srcFile).toContain('frameio');
    }

}
module.exports = { SmartCrop };