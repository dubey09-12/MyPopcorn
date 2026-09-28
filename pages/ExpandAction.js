const { expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');

class Expand {
    constructor(page) {
        this.page = page;
        this.image = page.locator("img[alt='Brand mark']");


        this.mediasource = page.locator("//span[text()='Media Sources']");

        this.mediasourceIconik = page.locator("(//a[text()='Iconik'])[2]");

        this.pl_storageFoder = page.locator("//span[text()='pl-storage-test']");

        this.newAssetFolder = page.locator("//div[text()='NewAssets']");
        this.newFilesAdobeTest_Folder = page.locator("//div[text()='New Files AdobeTest']");

        this.localizedTitleFolder = page.locator("//div[text()='New Assets with Localized Title']");

        this.psdAsset = page.locator("//table//tbody//tr[contains(., '.psd')]");

        this.expand_button = page.locator("//button[text()='Expand']");
        this.expandButton_Disable = page.locator("//button[text()='Expand' and contains(@class,'cursor-not-allowed')]")
        this.smartCropButton_Disable = page.locator("//button[text()='Smart Crop' and contains(@class,'cursor-not-allowed')]")

        this.specificationDropDown = page.locator("(//i[text()='expand_more'])[1]");

        this.expandTemplate = page.locator("//div[text()='Expand - Widescreen']");
        this.expandTemplateOnActivityPage_Iconik = page.locator("//tr[1]//td[5]//span[2]")

        this.executeButton = page.locator("//button[text()='Execute']");

        this.activityModule = page.locator("//span[text()='Activity']");

        this.activityTitle = page.locator("//h5[text()='Activity']");

        this.jobType = page.locator("(//tbody//tr)[1]/td[1]//span[@class='text-sm font-medium text-slate-700 dark:text-slate-200']");

        this.jobStatus = page.locator("(//tbody//tr)[1]/td[4]//span[@class='relative top-px']");
        this.timeStamp_Expand = page.locator("(//tbody//tr)[1]/td[2]//span[1]");

        this.src = page.locator("(//tbody//tr)[1]/td[1]//span[2]");

        this.mediaSourceFrameio = page.locator("(//a[text()='Frame.io'])[2]");

        this.assetFolder = page.locator("//span[text()='Assets']");
        this.imagesFolder = page.locator("//div[text()='Images']");
        this.portraitsFolder = page.locator("//div[text()='Portraits']");
        this.specificationDropDown_Frameio = page.locator("(//i[text()='expand_more'])[1]");
        this.expandTemplate_Frameio = page.locator("//div[text()='Expand - Widescreen']");

        this.img = page.locator("img[alt='Brand mark']");

        // this.timestamp = page.locator("//tbody//tr//td[2]/div/span[text()='20-01-2026,02:45:43']")
        this.completeStatus = page.locator("//span[@class='px-3 py-1 rounded-full text-sm font-bold shadow-sm text-white']")
        this.progress = page.locator("(//span[@class='text-white font-bold text-sm'])[2]")
        this.rawAsset = page.locator("//h3[contains(@class,'text-sm md')]")
        this.viewAssetButton = page.locator("//button[text()='View Asset']")
        this.closeButton = page.locator("//i[text()='close']")
        this.openCollectionButton = page.locator("//span[text()='Open Collection']")
        this.popcornButton = page.locator("//div[text()='Popcorn']")

        this.resultant_Folder = page.locator("//div[@class='ml-4']/div")
        this.dimensionFoder = page.locator("//div[@class='ml-4']/div")

        this.numberOfResultants = page.locator("//div[@class='flex items-center space-x-2']")
        this.assetRows = page.locator("//tbody/tr")

        this.jobTypeInFrameio = page.locator("//tbody//tr[1]/td[1]/div/span[1]");


        this.jobStatusInFrameio = page.locator("//tbody//tr[1]/td[4]/div/span[1]")

        this.srcc = page.locator("//tbody//tr[1]/td[1]/div/span[2]")

        this.timestamp_Frameio = page.locator("//tbody//tr//td[2]/div/span[text()='19-01-2026,21:58:50']")
        this.es_psdFolder = page.locator("//div[text()='es_4:5.psd']");
        this.dimension2 = page.locator("//div[text()='1920x1080']")
        this.dimension_iconik = page.locator("//div[@class='flex flex-wrap gap-2']/span")
        this.dimension_Frameio = page.locator("//div[@class='flex flex-wrap gap-2']/span")
        this.dimension_resul = page.locator("//div[@class='ml-4']/div")
        this.specDetail_closeButton = page.locator("//button[text()='Close']")
        this.assetNames = page.locator("//tbody//tr//div/span[contains(text(),'3840')]")
        this.prompt = page.locator("//div[@class='p-4 rounded-xl border border-gray-700 ']//p");
        this.templateOnActivityPage = page.locator("//tr[1]//td[5]//span[2]");
        this.resultantFolderInFrameio = page.locator("//div[@class='ml-4']/div")
        this.enterPrompt = page.locator("//div[@class='mb-5'][3]//textarea")
        this.nextPageButton = page.locator("//i[text()='navigate_next']")
        this.number_resultants = page.locator("//span[contains(.,'items')]")
        this.smartCropButton = page.locator("//button[text()='Smart Crop']")

    }

    async extractTimeStamp() {
        expandTimestamp = await page.locator("(//tbody//tr)[1]/td[2]//span[1]").textContent();
        return timestamp1;

    }
    async dashboardLandingPageVerification() {
        await expect(this.image).toBeVisible();
    }
    async clickMediaSource() {
        await this.mediasource.click();
    }
    async clickMediaSourceIconik() {
        await this.mediasourceIconik.click();
    }

    async folder_Selection() {
        await this.pl_storageFoder.click();
        await this.newAssetFolder.click();
        await this.localizedTitleFolder.click();
    }
    async selectPsdAsset() {
        const psd = await this.psdAsset.first();
        return psd;
    }
    async folder_Selection_Frameio() {
        await this.assetFolder.click();
        await this.imagesFolder.click();
        await this.portraitsFolder.click();
        //const asset= await this.page.locator("//table//tbody//tr[contains(., '.psd')][2]")

    }
    async folderTravelForNon_VerifiedAsset(){
        await this.pl_storageFoder.click();
        await this.newAssetFolder.click();
        await this.newFilesAdobeTest_Folder.click();
    }
    async clickOnExpandButton() {
        await this.expand_button.click();
    }
    async selectExpandTemplate() {
        await this.specificationDropDown.click();
        await this.expandTemplate.click();
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
    async verifyJob() {
        await expect(this.jobType).toHaveText('Expand');
        await expect(this.jobStatus).toHaveText('IN_PROGRESS');
        const srcFile = await this.src.textContent();
        expect(srcFile).toContain('iconik');
    }
    async clickOnMediaSourceFrameio() {
        await this.mediaSourceFrameio.click();

    }
    async folder_InFrameio() {
        await this.assetFolder.click();
        await this.imagesFolder.click();
        await this.portraitsFolder.click();

    }
    async selectExpandTemplate_Frameio() {
        await this.specificationDropDown_Frameio.click();
        await this.expandTemplate_Frameio.click();
    }
    async verifyJob_Frameio() {
        await expect(this.jobType).toHaveText('Expand');
        await expect(this.jobStatus).toHaveText('IN_PROGRESS');
        const srcFile = await this.src.textContent();
        expect(srcFile).toContain('frameio');
    }

    async verifyLogoOnDashboard() {
        await expect(this.img).toBeVisible();
    }
    async jobVErification() {
        await expect(this.jobType).toHaveText('Expand')
        await expect(this.jobStatus).toHaveText('COMPLETED', { timeout: 600000 });
        // await expect(this.jobStatus).toHaveText('COMPLETED',)
        await expect(this.src).toContainText('iconik')
    }

    async verificationOnDetailPage() {
        await expect(this.completeStatus).toHaveText('COMPLETED')
        await expect(this.progress).toHaveText('100%')
        await expect(this.prompt).toContainText('Focus on the text');
    }
    async verificationOnDetailpage_Frameio() {
        await expect(this.completeStatus).toHaveText('COMPLETED')
        await expect(this.progress).toHaveText('100%')
        await expect(this.prompt).toContainText('Expand the background');
    }
    async clickOnViewAssetButton() {
        await this.viewAssetButton.click();

    }
    async clickOnExpandTemplate() {
        await this.expandTemplateOnActivityPage_Iconik.click();
    }
    async verifyRawAsset() {
        const raw = await this.rawAsset.textContent();
        await expect(await this.page.locator(`//table//tbody//div//div//div//span[text()='${raw}']/parent::div//span[@title="Governance Check Passed"]`)).toBeVisible()
        await this.closeButton.click();
    }
    async clickOnOpenCollectionButton() {
        await this.openCollectionButton.click();
    }
    async clickOnPopcornButton() {
        await this.popcornButton.click();
    }
    async resultantFolder() {
        await this.resultant_Folder.click();
    }
    async clickOnDimensionFolder() {
        await this.dimensionFoder.click();
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
        await expect(this.jobTypeInFrameio).toHaveText('Expand');
        await expect(this.jobStatusInFrameio).toHaveText('COMPLETED', { timeout: 600000 });
        // await expect(this.jobStatusInFrameio).toHaveText('COMPLETED');
        await expect(this.srcc).toContainText('frameio');
    }
    async clickOnTemplateOnActivityPage() {
        await this.templateOnActivityPage.click();
    }
    async clickOnTimeStamp_Frameio() {
        await this.jobStatusInFrameio.click();
    }
    async resultantFolder_Frameio() {
        await this.resultantFolderInFrameio.click();
        
    }
    async verifyAllAssetsHaveDimension() {
        await expect(this.assetNames).toHaveCount(5);
        const names = await this.assetNames.allTextContents();
        for (const name of names) {
            expect(name).toContain('3840x2300')
        }
    }
    async toVerifyMetaDataOfResultantAssets() {
        const numberOfResultantAssets = await this.number_resultants.textContent();
        const count_row = await this.psdAsset.count();
        const count = parseInt(numberOfResultantAssets, 10);
        const remainingAsset = count % count_row;

        for (let i = 0; i < count; i++) {
            const asset = this.psdAsset.nth(i);
            await asset.locator("//img[contains(@class,'h-full w-full')]").click();
            const metadata = await this.page.locator("//p[contains(@class,'text-xs sm:text-sm')]").allTextContents();
            expect(metadata).not.toContain('N/A');
            await this.closeButton.click();
            if (i > count_row) {
                for (let j = 0; j < remainingAsset; j++) {
                    await this.nextPageButton.click();
                }

            }

        }
    }
}

module.exports = { Expand };