const { test, expect, chromium } = require('@playwright/test')
const { LoginPage } = require('../pages/Login')
const { Reframe } = require('../pages/ReframeAction')
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

// This test case includes => RE_02,RE_04,RE_06,RE_07,RE_08, RE_09
test('reframe_Iconik', async () => {

   const reframe = new Reframe(page);

   await reframe.verifyImageOnDashboardPage();
   await page.waitForTimeout(2000);

   await reframe.clickOnMediaSource();
   await reframe.clickOnIconikRadioButton();
   const mp4 = await reframe.selectmp4Asset();
   await mp4.click({ button: 'right' })
   await reframe.clickOnReframeButton();
   await reframe.selectTemplate();
   await reframe.clickOnExecuteButton();

   await expect(await page.locator("//h3[@id='success-dialog-title']")).toBeVisible();
   const success_msg = await page.locator("//p[@id='success-dialog-description']")
   await expect(success_msg).toContainText("Reframe");

   await page.waitForTimeout(2000)
   await page.reload();
   await page.waitForTimeout(2000);

   await reframe.clickOnActivityModule();
   await page.reload()

   await page.waitForTimeout(5000);
   await reframe.verifyJob();

})

// This test case includes => RE_09, RE_12
test('VerifyReframeOnDetailPage_iconik', async () => {
   const reframe = new Reframe(page);
   await page.waitForTimeout(40000);

   // await page.waitForTimeout(3000);
   await reframe.clickOnActivityModule();
   await reframe.verifyJobOnActivitypageWithTimeStamp();
   await reframe.clickOnTimeStamp();
   await reframe.verificationOnDetailPage();
   await reframe.clickOnViewAsset();

   await page.waitForTimeout(5000);

   await reframe.verifyRawAsset();
   await page.goBack({ waitUntil: 'load' });
   await reframe.clickOnOpenCollectionButton();
   await page.waitForTimeout(2000);

   await reframe.clickOnPopcornButton();
   await reframe.verifyNumberOfresultantAssets();
   await reframe.verifyTextOfRatio();

})

// This test includes => RE_Fr.02 , RE_Fr.04, RE_Fr.05, RE_Fr.06,RE_Fr.07,RE_Fr.08
test('reframe_Frameio', async () => {
   const reframe = new Reframe(page);
   await page.waitForTimeout(1000);
   await reframe.clickOnMediaSource();
   await reframe.clickOnFrameioRadioButton();
   const mp4 = await reframe.selectmp4AssetInFrameio();
   await mp4.click({ button: 'right' })
   await reframe.clickOnReframeButton();
   await reframe.selectTemplate();
   await reframe.clickOnExecuteButton();

   await expect(await page.locator("//h3[@id='success-dialog-title']")).toBeVisible();
   const success_msg = await page.locator("//p[@id='success-dialog-description']")
   await expect(success_msg).toContainText("Reframe");

   await page.waitForTimeout(2000)
   await page.reload();
   await page.waitForTimeout(2000);

   await reframe.clickOnActivityModule();
   await page.reload()

   await page.waitForTimeout(5000);
   await reframe.verifyJob_Frameio();

})

// This test includes => RE_Fr.09,RE_Fr.10 , 
test('verifyReframeOnDetailpage_Frameio', async () => {
   const reframe = new Reframe(page);
   await page.waitForTimeout(40000);

   // await page.waitForTimeout(3000);
   await reframe.clickOnActivityModule();
   await reframe.verifyJobOnActivitypageWithTimeStamp_Frameio();
   await reframe.clickOnTimeStamp();
   await reframe.verificationOnDetailPage();
   await reframe.clickOnViewAsset();

   await page.waitForTimeout(5000);

   await reframe.verifyRawAsset();
   await page.goBack({ waitUntil: 'load' });
   await reframe.clickOnOpenCollectionButton();
   await page.waitForTimeout(2000);

   await reframe.clickOnPopcornButton();
   await reframe.verifyNumberOfresultantAssets();
   await reframe.verifyTextOfRatio();

})