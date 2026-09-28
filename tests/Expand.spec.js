const { test, expect, chromium } = require('@playwright/test')
const { LoginPage } = require('../pages/Login')
const { Expand } = require('../pages/ExpandAction');
const { timeStamp } = require('node:console');


let browser;
let context;
let page;


test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.signIn();
});

// This test includes => MSI_16 , MSI_18 , MSF_16,MSF_18
test.only('Expand and Smart crop disable On non-verified asset',async()=>{
const ex = new Expand(page);
await ex.clickMediaSource();
await ex.clickMediaSourceIconik();
await ex.folderTravelForNon_VerifiedAsset();
const selectedAsset = await ex.selectPsdAsset();
expect(selectedAsset.locator("span[title='Governance Check Passed']")).not.toBeVisible();
await selectedAsset.click({button:'right'});
await expect(ex.expandButton_Disable).toBeVisible();
await expect(ex.smartCropButton_Disable).toBeVisible();
})



// This test case includes => EXP_01,EXP_03,EXP_05, EXP_06,MSI_01 , MSI_02,MSI_06,MSI_07,MSI_13,MSI_17,
test('Expand on Iconik', async () => {
    const ex = new Expand(page);


    await ex.dashboardLandingPageVerification();

    await page.waitForTimeout(2000);
    await ex.clickMediaSource();
    await ex.clickMediaSourceIconik();

    await ex.folder_Selection();

    const selectedAsset = await ex.selectPsdAsset();
    await selectedAsset.locator("//img[contains(@class,'h-full w-full')]").click();
    const imgPreviewDetails = await page.locator("//p[contains(@class,'text-xs sm:text-sm')]").allTextContents();
    expect(imgPreviewDetails).not.toContain('N/A');
    await ex.closeButton.click();
    await expect(selectedAsset.locator)
    await expect(selectedAsset.locator("span[title='Governance Check Passed']")).toBeVisible()
          
    await selectedAsset.click({ button: 'right' })
    await expect(ex.expand_button).toBeEnabled()
    await ex.clickOnExpandButton();

   
    
    await ex.selectExpandTemplate();
    await ex.enterPrompt.fill("Focus on the text");
    await ex.clickOnExecuteButton();

    await expect(await page.locator("//div//h3[@id='success-dialog-title']")).toBeVisible()
    const success_msg = await page.locator("//div//p[@id='success-dialog-description']").textContent()
    expect(success_msg).toContain("Expand");


    await page.waitForTimeout(2000)
    await page.reload()
    await page.waitForTimeout(2000)

    await ex.clickOnActivityModule();
    await ex.verifyActivityTitle();
    await page.waitForTimeout(5000);
    await ex.verifyJob();

})

// This test case includes =>AC_13, AC_15,AC_16,AC_18 , EXP_06,EXP_07,EXP_08,
test('ex_iconik', async () => {

    const ex = new Expand(page);

    // await ex.verifyLogoOnDashboard();
    await ex.clickOnActivityModule();
    await ex.jobVErification();
    await ex.clickOnExpandTemplate();
    const variant = await ex.dimension_iconik.textContent();
    await ex.specDetail_closeButton.click();

    await ex.jobStatus.click();
    await page.waitForTimeout(5000);

    await ex.verificationOnDetailPage();
    await ex.clickOnViewAssetButton();
    await page.waitForTimeout(3000);

    await ex.verifyRawAsset();
    await page.goBack({ waitUntil: 'load' });
    await ex.clickOnOpenCollectionButton();
    await page.waitForTimeout(3000);

    await ex.clickOnPopcornButton();
    await ex.resultantFolder();

    await expect(ex.dimension_resul).toBeVisible();

    const dimen2 = await ex.dimension_resul.textContent();
    console.log(variant);
    console.log(dimen2);
    expect(dimen2).toBe(variant);

    await page.waitForTimeout(2000);
    await ex.clickOnDimensionFolder();
    await ex.verifyNumberOfResultantAssets();
    await ex.verifyTickMarkforAllAssets();
    await ex.verifyAllAssetsHaveDimension();
    await ex.toVerifyMetaDataOfResultantAssets();




})

// This test case includes => EXP_03,EXP_05, EXP_06,MSF_01,MSF_02,MSF_06,MSF_07,MSF_13,MSF_17
test('Expand On Frame.io', async () => {
    const expand = new Expand(page);
    await expand.clickMediaSource();
    await expand.clickOnMediaSourceFrameio();
    await page.waitForTimeout(3000);
    // await expand.folder_InFrameio();

    await expand.folder_Selection_Frameio();
    const selectedAsset = await page.locator("//table//tbody//tr[contains(., '.psd')][2]")
    await expect(selectedAsset.locator("span[title='Governance Check Passed']")).toBeVisible();


    await page.locator("//table//tbody//tr[contains(., '.psd')][2]").click({ button: 'right' })

    await expand.clickOnExpandButton();

    await expand.selectExpandTemplate_Frameio();

    await expand.clickOnExecuteButton();
    await expect(await page.locator("//div//h3[@id='success-dialog-title']")).toBeVisible()
    const success_msg = await page.locator("//div//p[@id='success-dialog-description']").textContent()
    expect(success_msg).toContain("Expand");


    await page.waitForTimeout(2000)
    await page.reload()
    await page.waitForTimeout(2000)
    await expand.clickOnActivityModule();
    await expand.verifyActivityTitle();
    await page.waitForTimeout(5000);
    await expand.verifyJob_Frameio();


})

// This test case includes => AC_13,AC_15,AC_16,AC_18,EXP_06,EXP_07,EXP_08,
test('ex_Frameio', async () => {

    const expand = new Expand(page);

    await expand.verifyLogoOnDashboard();
    await expand.clickOnActivityModule();
    await expand.jobVerificationInFrameio();
    await expand.clickOnTemplateOnActivityPage();
    await page.waitForTimeout(3000);
    const variant = await expand.dimension_Frameio.textContent();
    await page.waitForTimeout(3000);
    await expand.specDetail_closeButton.click();
    await expand.jobStatusInFrameio.click();
    await page.waitForTimeout(3000);

    await expand.verificationOnDetailpage_Frameio();
    await expand.clickOnViewAssetButton();
    await page.waitForTimeout(3000);

    await expand.verifyRawAsset();
    await page.goBack({ waitUntil: 'load' });
    await expand.clickOnOpenCollectionButton();
    await page.waitForTimeout(3000);

    await expand.clickOnPopcornButton();
    await expand.resultantFolder_Frameio();
    await expect(expand.dimension_resul).toBeVisible();

    const dimen2 = await expand.dimension_resul.textContent();
    expect(dimen2).toBe(variant);
    await page.waitForTimeout(2000);
    await expand.clickOnDimensionFolder();
    await expand.verifyNumberOfResultantAssets();
    await expand.verifyTickMarkforAllAssets();
    await expand.verifyAllAssetsHaveDimension();


})
