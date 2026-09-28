const { test, expect, chromium } = require('@playwright/test')
const { LoginPage } = require('../pages/Login')
const { SmartCrop } = require('../pages/SmartCropAction')
const { ActivityDetailPageVerification_SmartCrop } = require('../pages/ActivityDetailPage_SmartCrop')

let browser;
let context;
let page;

test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.signIn();
})


// This test case includes => SC_01,SC_02,SC_04,SC_05,MSI_01, MSI_02,MSI_06,MSI_07,MSI_13, MSI_19
test('SmartCrop_Iconik', async () => {
    const sc = new SmartCrop(page);

    await sc.dashboardLandingVerification();
    await page.waitForTimeout(2000);

    await sc.clickOnMediaSource();
    await sc.clickOnMediaSourceIconik();
    await page.waitForTimeout(5000);

    const selectedAsset = await sc.selectpsdAsset();
    await expect(selectedAsset.locator("span[title='Governance Check Passed']")).toBeVisible();
    await selectedAsset.click({ button: 'right' })
    await sc.clickOnSmartcropButton();
    await sc.selectSmartCropTemplate();

    await sc.clickOnExecuteButton();
    await expect(await page.locator("//div//h3[@id='success-dialog-title']")).toBeVisible()
    const success_msg = await page.locator("//div//p[@id='success-dialog-description']").textContent()
    expect(success_msg).toContain("Smart Crop");

    await page.waitForTimeout(2000)
    await page.reload()
    await page.waitForTimeout(2000)

    await sc.clickOnActivityModule();
    await sc.verifyActivityTitle();
    await page.waitForTimeout(5000);
    await sc.verifyJobOnActivityPage();
    page.waitForTimeout(5000);


})

// This test case includes => AC_15,AC_16,AC_18, SC_06,SC_07
test('verifySmartCrop_iconik', async () => {

    const verifySC = new ActivityDetailPageVerification_SmartCrop(page);

    // await verifySC.dashboardLandingPageVerification();
    await verifySC.clickOnActivityModule();
    await verifySC.jobVErification();
    await verifySC.templateOnActivitypage.click();

    const textOfratios = await verifySC.aspectRatios.allTextContents();
    console.log(textOfratios);
    const numberOfRatios = await verifySC.aspectRatios.count();
    console.log(numberOfRatios);
    const countOflanguages = await verifySC.numberOfLangiuageOnSelectedTemplate.count();
    console.log(countOflanguages);
    const nameOfLanguages = await verifySC.numberOfLangiuageOnSelectedTemplate.allTextContents();
    console.log(nameOfLanguages)
    const finalNumberOfAssets = numberOfRatios * countOflanguages;
    await page.waitForTimeout(3000);

    await verifySC.closeButtonOfOpenTemplate.click();
    await verifySC.jobStatus.click();

    await page.waitForTimeout(5000);

    await verifySC.verificationOnDetailPage();
    await verifySC.clickOnViewAssetButton();

    await page.waitForTimeout(3000);

    await verifySC.verifyRawAsset();
    await page.goBack({ waitUntil: 'load' });
    await verifySC.clickOnOpenCollectionButton();

    await page.waitForTimeout(3000);

    await verifySC.clickOnPopcornButton();
    await verifySC.clickOnResultantFolder();

    const resultants = await verifySC.numberOfResultants.textContent();
    expect(resultants).toContain(finalNumberOfAssets.toString());
    await page.waitForTimeout(2000);

    await verifySC.verifyTickMarkforAllAssets();
    const path = await page.locator("//tr//div//div//div").count();
    const name1_1 = await page.locator("//span[contains(text(),'_1:1.psd')]")
    const name_2 = await page.locator("//span[contains(text(),'_9:16.psd')]")
    for (let i = 0; i < path; i++) {
        await expect(name1_1).toHaveCount(3);
        await expect(name_2).toHaveCount(3);
    }
})

// This test case includes => SC_01,SC_02,SC_04,SC_05,MSF_01,MSF_02,MSF_13,MSF_19
test('SmartCrop_Frameio', async () => {
    const sc = new SmartCrop(page);

    // await sc.dashboardLandingVerification();
    // await page.waitForTimeout(2000);

    await sc.clickOnMediaSource();
    await sc.clickOnMediaSourceFrameio();
    await page.waitForTimeout(5000);

    const selectedAsset = await sc.selectpsdAsset();
    await expect(selectedAsset.locator("span[title='Governance Check Passed']")).toBeVisible();
    await selectedAsset.click({ button: 'right' })
    await sc.clickOnSmartcropButton();
    await sc.selectSmartCropTemplate();

    await sc.clickOnExecuteButton();

    await expect(await page.locator("//div//h3[@id='success-dialog-title']")).toBeVisible()
    const success_msg = await page.locator("//div//p[@id='success-dialog-description']").textContent()
    expect(success_msg).toContain("Smart Crop");

    await page.waitForTimeout(2000)
    await page.reload()
    await page.waitForTimeout(2000)

    await sc.clickOnActivityModule();
    await sc.verifyActivityTitle();
    await page.waitForTimeout(5000);

    await sc.verifyJob_Frameio();

})
// This test case includes => AC_15,AC_16, AC_18,SC_06,SC_07
test('VerifySmartCrop_Frameio', async () => {

    const verifySC = new ActivityDetailPageVerification_SmartCrop(page);

    await verifySC.clickOnActivityModule();
    await verifySC.jobVerificationInFrameio();
    await verifySC.templateOnActivitypage.click();

    const textOfratios = await verifySC.aspectRatios.allTextContents();
    console.log(textOfratios);
    const numberOfRatios = await verifySC.aspectRatios.count();
    console.log(numberOfRatios);
    const countOflanguages = await verifySC.numberOfLangiuageOnSelectedTemplate.count();
    console.log(countOflanguages);
    const nameOfLanguages = await verifySC.numberOfLangiuageOnSelectedTemplate.allTextContents();
    console.log(nameOfLanguages)
    const finalNumberOfAssets = numberOfRatios * countOflanguages;
    await page.waitForTimeout(3000);

    await verifySC.closeButtonOfOpenTemplate.click();
    await verifySC.jobStatusInFrameio.click();

    await page.waitForTimeout(5000);

    await verifySC.verificationOnDetailPage();
    await verifySC.clickOnViewAssetButton();

    await page.waitForTimeout(3000);

    await verifySC.verifyRawAsset();
    await page.goBack({ waitUntil: 'load' });
    await verifySC.clickOnOpenCollectionButton();

    await page.waitForTimeout(3000);

    await verifySC.clickOnPopcornButton();
    await verifySC.clickOnResultantFolder_Frameio();
    const resultants = await verifySC.numberOfResultants.textContent();
    expect(resultants).toContain(finalNumberOfAssets.toString());
    await page.waitForTimeout(2000);
    await verifySC.verifyTickMarkforAllAssets();




})