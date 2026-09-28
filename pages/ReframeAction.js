const { test, expect } = require('@playwright/test')

class Reframe {
    constructor(page) {
        this.page = page;
        this.img = page.locator("//img[@alt='Brand mark']");
        this.mediasource = page.locator("//span[text()='Media Sources']")
        this.iconik = page.locator("(//a[text()='Iconik'])[2]")
        this.frameio = page.locator("(//a[text()='Frame.io'])[2]")
        this.mp4Asset = page.locator("//tbody//tr[contains(.,'.mp4')]")
        this.reframeButton = page.locator("//button[text()='Reframe']")
        this.template = page.locator("//i[text()='expand_more']")
        this.selectedTemplate = page.locator("//div[text()='Video Reframe - Portrait Focused']")
        this.execteButton = page.locator("//button[text()='Execute']")
        this.activityModule = page.locator("//span[text()='Activity']")
        this.activityTitle = page.locator("//h5[text()='Activity']")
        this.jobType = page.locator("(//tbody//tr[1]/td[1]/div/span)[1]")
        this.jobStatus = page.locator("(//tbody//tr[1]/td[4]/div/span)[1]")
        this.source = page.locator("(//tbody//tr[1]/td[1]/div/span)[2]")
        this.ratiocountOnSpec = page.locator("(//div[@class='flex flex-wrap gap-2 mt-2'])[6]/span")
        this.ratioCountOnResultant = page.locator("//tbody//tr//div/span")
        this.textRatioOnRes = page.locator("//tbody//tr//div/span[contains(text(),'1:1')]")
        this.textRatioOnRes2 = page.locator("//tbody//tr//div/span[contains(text(),'4:5')]")
        this.timeStamp = page.locator("(//tbody/tr[1]/td/div/span)[3]")
        this.jobTypeOnIconik = page.locator("(//tbody//tr[1]/td[1]/div/span)[1]")
        this.jobStatusOnIconik = page.locator("(//tbody//tr[1]/td[4]/div/span)[1]")
        this.srcc = page.locator("(//tbody//tr[1]/td[1]/div/span)[2]")
        this.pl_storage_test_Folder = page.locator("//span[text()='pl-storage-test']")
        this.newAssetsFolder = page.locator("//div[text()='NewAssets']")
        this.testing_Folder = page.locator("//div[text()='Testing-folder']")
   

        this.completeStatus = page.locator("//span[@class='px-3 py-1 rounded-full text-sm font-bold shadow-sm text-white']")
        this.progress = page.locator("(//span[@class='text-white font-bold text-sm'])[2]")
        this.viewAssetButton = page.locator("//button[text()='View Asset']")
        this.rawAsset = page.locator("//h3[contains(@class,'text-sm md')]")
        this.openCollectionButton = page.locator("//span[text()='Open Collection']")
        this.popcornButton = page.locator("//div[text()='Popcorn']")
        this.assetsFolder = page.locator("//span[text()='Assets']")
        this.videosFolder = page.locator("//div[text()='Videos']")
        this.rawassetInFrameio = page.locator("//tbody//tr[contains(.,'.mp4')]")
        this.jobType_Frameio = page.locator("(//tbody//tr[1]/td[1]/div/span)[1]")
        this.jobStatus_Frameio = page.locator("(//tbody//tr[1]/td[4]/div/span)[1]")
        this.source_Frameio = page.locator("(//tbody//tr[1]/td[1]/div/span)[2]")

    }
    async verifyImageOnDashboardPage() {
        await expect(this.img).toBeVisible();
    }
    async clickOnMediaSource() {
        await this.mediasource.click();
    }
    async clickOnIconikRadioButton() {
        await this.iconik.click();
    }
    async clickOnFrameioRadioButton() {
        await this.frameio.click();
    }
    async selectmp4Asset() {
        // const mp4 = await this.mp4Asset.nth(6);
        // return mp4;
        await this.pl_storage_test_Folder.click();
        await this.newAssetsFolder.click();
        await this.testing_Folder.click();
        const mp4 = await this.mp4Asset.first();
        return mp4;
    }
    async clickOnReframeButton() {
        await this.reframeButton.click();
    }
    async selectTemplate() {
        await this.template.click();
        await this.selectedTemplate.click();
    }
    async clickOnExecuteButton() {
        await this.execteButton.click();
    }
    async clickOnActivityModule() {
        await this.activityModule.click();
        await expect(this.activityTitle).toBeVisible();
    }
    async verifyJob() {
        await expect(this.jobType).toHaveText('Reframe')
        await expect(this.jobStatus).toHaveText('IN_PROGRESS')
        const srctext = await this.source.textContent()
        expect(srctext).toContain('iconik')
    }
    async verifyJobOnActivitypageWithTimeStamp() {
        await expect(this.jobTypeOnIconik).toHaveText('Reframe');
        await expect(this.jobStatusOnIconik).toHaveText('COMPLETED');
        const srctext2 = await this.srcc.textContent();
        expect(srctext2).toContain('iconik');
    }
    async clickOnTimeStamp() {
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

        await expect(await this.page.locator("//tbody")).toContainText(raw);
    }
    async clickOnOpenCollectionButton() {
        await this.openCollectionButton.click();
    }
    async clickOnPopcornButton() {
        await this.popcornButton.click();
    }
    async verifyNumberOfresultantAssets() {
        const num_Spec = await this.ratiocountOnSpec.count();
        const num_res = await this.ratioCountOnResultant.count();
        expect(num_Spec).toBe(num_Spec);

    }
    async verifyTextOfRatio() {
        await expect(this.textRatioOnRes).toBeVisible();
        await expect(this.textRatioOnRes2).toBeVisible();
    }
    async selectmp4AssetInFrameio() {
        await this.assetsFolder.click();
        await this.videosFolder.click();
        const mp4 = await this.rawassetInFrameio.first();
        return mp4;
    }
    async verifyJob_Frameio() {
        await expect(this.jobType).toHaveText('Reframe')
        await expect(this.jobStatus).toHaveText('IN_PROGRESS')
        const srctext = await this.source.textContent()
        expect(srctext).toContain('frameio')
    }
    async verifyJobOnActivitypageWithTimeStamp_Frameio() {
        await expect(this.jobTypeOnIconik).toHaveText('Reframe');
        await expect(this.jobStatusOnIconik).toHaveText('COMPLETED');
        const srctext2 = await this.srcc.textContent();
        expect(srctext2).toContain('frameio');
    }

}
module.exports = { Reframe };