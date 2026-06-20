import { POManager } from "../PageObjects/POManager";
import { customtest as test,expect } from "../fixtures/testfixture";


//bi deafault it runs in sequential wai.Means one testcase bi one. and if one fails, other continues
//register
//the below format means in serial wai testcases run one bi one skips the test case if anione fails
//in parllel running, all the testcases run at a time just put word parallel in place of serial also the other one will pass
test.describe.serial('testNew',()=>
{
test('registration',async({page,testdataForregistration})=>
{
         const poManager=new POManager(page)
         const homepage= poManager.getHomePage()
          homepage.goTo()
          homepage.clickOnRegisterLink()
          

        const registerpage= poManager.getRegistrationPage()
         //const registerpage=new RegistrationPage(page)
            await registerpage.registerUser(
                testdataForregistration.firstname,
                testdataForregistration.lastname,
                testdataForregistration.address,
                testdataForregistration.city,
                testdataForregistration.state,
                testdataForregistration.zipcode,
                testdataForregistration.phonenumber,
                testdataForregistration.ssn,
                testdataForregistration.username,
                testdataForregistration.password,
                testdataForregistration.confirmpassword
            )
            registerpage.clickOnRegisterbutton()
            await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
            await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
            await page.waitForTimeout(5000)           
})


//login page
test('login',async(page,testdataForregistration)=>
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
}
)


// //{} y  []
