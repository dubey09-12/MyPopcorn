const { test, expect } = require('@playwright/test')
class ActivityDetailPageVerification_SmartCrop {
    constructor(page) {
        this.page = page;
        this.logo = page.locator("img[alt='Brand mark']")
        this.activityModule = page.locator("//span[text()='Activity']")

        this.jobType = page.locator("(//tbody//tr)[1]/td[1]//span[@class='text-sm font-medium text-slate-700 dark:text-slate-200']")

        this.jobStatus = page.locator("(//tbody//tr)[1]/td[4]//span[@class='relative top-px']");

        this.src = page.locator("(//tbody//tr)[1]/td[1]//span[2]")

        this.completeStatus = page.locator("//span[@class='px-3 py-1 rounded-full text-sm font-bold shadow-sm text-white']")
        this.progress = page.locator("(//span[@class='text-white font-bold text-sm'])[2]")
        this.viewAssetButton = page.locator("//button[text()='View Asset']")
        this.rawAsset = page.locator("//h3[contains(@class,'text-sm md')]")
        this.closeButton = page.locator("//i[text()='close']")
        this.openCollectionButton = page.locator("//span[text()='Open Collection']")
        this.popcornButton = page.locator("//div[text()='Popcorn']")

        this.resultantFolder = page.locator("//div[@class='ml-4']/div")
        this.numberOfResultants = page.locator("//span[contains(.,'items')]")
        this.assetRows = page.locator("//tbody/tr")
        this.jobTypeInFrameio = page.locator("//tbody//tr[1]/td[1]/div/span[1]");

        this.jobStatusInFrameio = page.locator("//tbody//tr[1]/td[4]/div/span[1]");

        this.srcc = page.locator("//tbody//tr[1]/td[1]/div/span[2]")

        this.resultantFolder_Frameio = page.locator("//div[@class='ml-4']/div")
        this.aspectRatios = page.locator("(//div[@class='flex flex-wrap gap-2'])[1]/span")

        this.templateOnActivitypage = page.locator("//tr[1]//td[5]//span[2]")
        this.closeButtonOfOpenTemplate = page.locator("//button[text()='Close']")
        this.numberOfLangiuageOnSelectedTemplate = page.locator("(//div[@class='flex flex-wrap gap-2'])[2]/span")


    }
    async dashboardLandingPageVerification() {
        expect(this.logo).toBeVisible();
    }
    async clickOnActivityModule() {
        await this.activityModule.click();
    }
    async jobVErification() {
        await expect(this.jobType).toHaveText('Smart Crop')
        await expect(this.jobStatus).toHaveText('COMPLETED', { timeout: 600000 });
        // await expect(this.jobStatus).toHaveText('COMPLETED')
        await expect(this.src).toContainText('iconik')
    }
    async clickOnTimestamp() {
        await this.timestamp.click();
    }
    async verificationOnDetailPage() {
        await expect(this.completeStatus).toHaveText('COMPLETED')
        await expect(this.progress).toHaveText('100%')
    }
    async clickOnViewAssetButton() {
        await this.viewAssetButton.click();

    }
    async verifyRawAsset() {
        const raw = await this.rawAsset.textContent();
        await this.closeButton.click();
        await expect(await this.page.locator(`//table//tbody//div//div//div//span[text()='${raw}']/parent::div//span[@title="Governance Check Passed"]`)).toBeVisible()
        // await this.closeButton.click();
    }
    async clickOnOpenCollectionButton() {
        await this.openCollectionButton.click();
    }
    async clickOnPopcornButton() {
        await this.popcornButton.click();
    }
    async clickOnResultantFolder() {
        await this.resultantFolder.click();
    }
    async verifyNumberOfResultantAssets() {
        await expect(this.numberOfResultants).toBeVisible();
    }
    async verifyTickMarkforAllAssets() {
        const rowsCount = await this.assetRows.count();
        for (let i = 0; i < rowsCount; i++) {
            const row = this.assetRows.nth(i);
            const tickMark = row.locator("xpath=.//span[@title='Governance Check Passed']");
            await expect(tickMark).toBeVisible();
        }
    }
    async jobVerificationInFrameio() {
        await expect(this.jobTypeInFrameio).toHaveText('Smart Crop');
        await expect(this.jobStatusInFrameio).toHaveText('COMPLETED', { timeout: 600000 });
        // await expect(this.jobStatusInFrameio).toHaveText('COMPLETED');
        await expect(this.srcc).toContainText('frameio');
    }
    async clickOnTimeStamp_Frameio() {
        await this.timestamp_Frameio.click();
    }
    async clickOnResultantFolder_Frameio() {
        await this.resultantFolder_Frameio.click();
    }
}
module.exports = { ActivityDetailPageVerification_SmartCrop };