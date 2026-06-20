import { POManager } from "../PageObjects/POManager";
import { customtest as test,expect } from "../fixtures/testfixture";

test('login',async({page,testdataForregistration})=>
{
    const pomanager=new POManager(page)
    const homepage=pomanager.getHomePage()
     homepage.goTo()

    const loginpage=pomanager.getLoginPage()
    await loginpage.clickOnLoginLink(
        testdataForregistration.username,
        testdataForregistration.password
    )
            await page.waitForTimeout(5000)

}
)

// //{} y  []
