
// import '../Config'
// import { password, portalUrl, username } from '../Config';
const { password, portalUrl, username } = require('../Config')
class LoginPage {
    constructor(page) {
        this.page = page;
        this.incorrectPasswordmsg = page.locator("//span[text()='Incorrect password. Please try again.']")
        this.invalidEmailMsg = page.locator("//span[text()='Email is not registered.']")
        this.emailRequiredmsg = page.locator("//span[text()='Email is required']");
        this.passwordRequiredMsg = page.locator("//span[text()='Password is required']");
        this.toggleEye = page.locator("//span[contains(@class,'material')]");
        this.passwordTextField = page.locator("input[name='password']");
        this.forgetpasswordLink = page.locator("//a[text()='Forgot Password?']")
        this.forgetpasswordText = page.locator("//h1[contains(@class,'text-2xl')]")
        this.signUpLink = page.locator("//a[text()='Sign Up']")
        this.signUpTextForVerification = page.locator("//h1[contains(@class,'font-semibold')]")


    }

    async navigateUrl() {
        await this.page.goto("https://dev.popcorngo.com/authentication/sign-in/")
    }
    async signIn() {

        await this.page.goto(portalUrl)
        await this.page.locator("input[name='email']").fill(username)
        await this.page.locator("input[name='password']").fill(password)
        await this.page.locator("//button[text()='Sign In']").click();
    }



}
module.exports = { LoginPage };