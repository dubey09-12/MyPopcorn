const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/Login')

// this test includes => LG_03, LG_04, LG_06
test.only("Login negative Testing", async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.navigateUrl();
     await page.locator("input[name='email']").fill("shshank.kumar@practicallogixx.com")
    //await page.locator("input[name='email']").fill('@shashank.kumar@practicallogix.com')
    await page.locator("input[name='password']").fill("Welcpme@2025");
    await page.locator("//button[text()='Sign In']").click();
    //    await expect(loginpage.incorrectPasswordmsg).toBeVisible();
    await expect(loginpage.invalidEmailMsg).toBeVisible();
})

// This test includes => LG_05
test("Login with Blank Fields",async({page})=>{
    const loginpage = new LoginPage(page);   
    await loginpage.navigateUrl();
    await page.locator("input[name = 'email']").fill("");
    await page.locator("input[name='password']").fill("");
    await page.locator("//button[text()='Sign In']").click();
    await expect(loginpage.emailRequiredmsg).toBeVisible();

})

// This test includes => LG_07
test("Password Field masking",async({page})=>{
    const loginpage = new LoginPage(page);   
    await loginpage.navigateUrl();
    await page.locator("input[name='password']").fill("Welcome@2025");
    await expect(loginpage.toggleEye).toHaveText("visibility_off");
    await loginpage.toggleEye.click();
    await page.waitForTimeout(3000);
    await expect(loginpage.passwordTextField).toHaveValue("Welcome@2025");
})

// This test includes => LG_08
test('Forget Password',async({page})=>{
     const loginpage = new LoginPage(page);   
    await loginpage.navigateUrl();
    await loginpage.forgetpasswordLink.click();
    await expect(loginpage.forgetpasswordText).toBeVisible();
})

//This test includes => LG_09
test('SignUp navigation',async({page})=>{
    const loginPage = new LoginPage(page);    
    await loginPage.navigateUrl();
    await loginPage.signUpLink.click();
    await expect(loginPage.signUpTextForVerification).toBeVisible();

})

// This test case includes =>  LG_01,LG_02
test("Login page", async ({ page }) => {

    const loginpage = new LoginPage(page);
    await loginpage.signIn();

    const chooseorg = await page.locator("(//button[@type='button'])[2]")
    await expect(chooseorg).toHaveText('Choose Organization')
    chooseorg.click();

    const selectedorg = await page.locator("//span[text()='Skylink Logistics']")
    selectedorg.click()
    await expect(chooseorg).toHaveText('Skylink Logistics')
    await page.locator("//button[text()='Continue']").click();

})