const { test, expect, chromium } = require('@playwright/test')
const { LoginPage } = require('../pages/Login')
const { GovernanceCheck } = require('../pages/GovernanceCheckAction')

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

// This test includes => I_GC_02, I_GC_09
test.only('Verify GovCheck availibility on non-verified Asset', async () => {
    const govCheck = new GovernanceCheck(page);
    await govCheck.clickOnMediasource();
    await govCheck.clickOnMediaSource_Frameio();
    await govCheck.folder_Travel_frameio();
    const selectedAsset = await govCheck.selectPsdAsset();
    await expect(selectedAsset.locator("span[title='Governance Check Passed']")).not.toBeVisible();
    await selectedAsset.click({ button: 'right' });
    await expect(govCheck.govCheckButton).toBeEnabled();
    await govCheck.govCheckButton.click();
    await govCheck.clickOnExecuteButton();
    await page.waitForTimeout(90000);
    await expect(selectedAsset.locator("span[title='Governance Check Passed']")).toBeVisible();

})


// This test case includes => I_GC_01,I_GC_04, I_GC_05 ,I_GC_07 , I_GC_10, MSI_01,MSI_02,MSI_06,MSI_07,MSI_13,MSI_15,
test('Govcheck Iconik', async () => {
    const govCheck = new GovernanceCheck(page);
    await govCheck.verifyLOgoOnDashBoardpage();
    await govCheck.clickOnMediasource();
    await govCheck.clcikOnMediasource_Iconik();
    await govCheck.folder_travel_iconic();
    await page.waitForTimeout(5000);

    const psdFiles = await govCheck.selectPsdAsset();

    // await page.waitForTimeout(3000)
    await psdFiles.click({ button: 'right' });
    await expect(govCheck.reGovCheck_Button).toBeEnabled();
    await govCheck.clickOnRe_GovcheckButton();
    await govCheck.clickOnExecuteButton();
    await expect(await page.locator("//h3[@id='success-dialog-title']")).toBeVisible();
    const success_msg = await page.locator("//p[@id='success-dialog-description']")
    await expect(success_msg).toContainText("Governance Check");

    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);
    await govCheck.clickOnActivityModule();

    await page.waitForTimeout(2000)
    await page.reload()
    await page.waitForTimeout(2000);
    await govCheck.verifyActivityTextOnActivitypage();
    await govCheck.verifyJobOnActivityPage_iconik();
})

// This test case includes =>AC_15, I_GC_08
test('verifyGovcheck_Iconik', async () => {

    const govCheck = new GovernanceCheck(page);
    // await page.waitForTimeout(120000);
    await govCheck.clickOnActivityModule();
    await page.waitForTimeout(3000);
    await govCheck.verifyJobOnActivitypageWithTimeStamp();
    await govCheck.clickOnTimestamp();
    await govCheck.verificationOnDetailPage();
    await govCheck.clickOnViewAsset();
    await page.waitForTimeout(3000);
    const rawAssetLocator = page.locator("//h3[contains(@class,'text-sm md')]");
    const rawValue = await rawAssetLocator.textContent();
    console.log("Captured value:", rawValue);
    await govCheck.clickOnCloseButton();


    const tableCells = page.locator("//td[@class='px-3 py-3 whitespace-nowrap']");
    const count = await tableCells.count();


    let isValueFound = false;
    for (let i = 0; i < count; i++) {
        const cellText = await tableCells.nth(i).textContent();
        if (cellText.trim() === rawValue.trim()) {
            isValueFound = true;
            break;
        }
    }

})

// This test case includes =>F_GC_01,F_GC_02, F_GC_05 , F_GC_07 , F_GC_10, MSF_01,MSF_02,MSF_06,MSF_07,MSF_13,MSF_15
test('Govcheck Frame.io', async () => {
    const govCheck = new GovernanceCheck(page);
    await page.waitForTimeout(3000);
    await page.reload();


    await govCheck.clickOnMediasource();
    await govCheck.clickOnMediaSource_Frameio();

    const psdFile = await govCheck.selectPsdAsset();
    await psdFile.click({ button: 'right' })

    await govCheck.clickOnRe_GovcheckButton();

    await govCheck.clickOnExecuteButton();
    await expect(await page.locator("//h3[@id='success-dialog-title']")).toBeVisible();
    const success_msg = await page.locator("//p[@id='success-dialog-description']")
    await expect(success_msg).toContainText("Governance Check");

    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);
    await govCheck.clickOnActivityModule();

    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);

    await govCheck.verifyActivityTextOnActivitypage();
    await govCheck.verifyJobOnActivityPage_Frameio();
})

// This test case includes => AC_15, F_GC_08
test('verifyGovCheck_Frameio', async () => {
    const govCheck = new GovernanceCheck(page);
    await page.waitForTimeout(100000);
    await govCheck.clickOnActivityModule();
    await govCheck.verifyJobOnActivitypageWithTimeStamp_Frameio();
    await govCheck.clickOnTimestamp();
    await govCheck.verificationOnDetailPage();
    await govCheck.clickOnViewAsset();
    await page.waitForTimeout(3000);
    const rawAssetLocator = page.locator("//h3[contains(@class,'text-sm md')]");
    const rawValue = await rawAssetLocator.textContent();
    await govCheck.clickOnCloseButton();
    const tableCells = page.locator("//td[@class='px-3 py-3 whitespace-nowrap']");
    const count = await tableCells.count();

    // Step 3: Validate the captured value exists in the table
    let isValueFound = false;
    for (let i = 0; i < count; i++) {
        const cellText = await tableCells.nth(i).textContent();
        if (cellText.trim() === rawValue.trim()) {
            isValueFound = true;
            break;
        }
    }
})