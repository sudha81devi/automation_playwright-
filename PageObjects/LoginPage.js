export class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.userName=page.locator("//input[@name='username']")
        this.passWord=page.locator("//input[@name='password']")
        this.loginButton=page.locator("//input[@value='Log In']")
    }
    async clickOnLoginLink(uname,pass)
    {
        await this.userName.fill()
        await this.passWord.fill()
        await this.loginButton.click()
    }
}


// //{} y  []
