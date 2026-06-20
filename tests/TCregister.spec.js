// import{test,expect} from '@playwright/test'
// import{HomePage} from '../POM/HomePage'
// import{RegistrationPage} from '../POM/RegistrationPage'

// test('Register',async({page})=>
// {
//     const homepage=new HomePage(page)
//     await homepage.goTo()
//     await homepage.clickOnRegiterLink()

//     const registration=new RegistrationPage(page)
//     await registration.registerNewUser('a','b','c','d','123','123456','111222','sudha1','sudha','sudha')
//     await registration.RegisterButton.click()
// })



//import {test,expect} from '@playwright/test'
// import { HomePage } from '../PageObjects/HomePage'
// import { RegistrationPage } from '../PageObjects/RegistrationPage'
import { POManager } from '../PageObjects/POManager'
//import testdata from '../utils/parabank.json' assert { type:'json' }   //when the file is not in json format we have to parse the data
import { customtest as test,expect } from '../fixtures/testfixture'

// test('registration',async({page})=>
// {
//          const homepage=new HomePage(page)
//              await homepage.goTo()
//              await homepage.clickOnRegisterLink()
//             const registerpage=new RegistrationPage(page)
//             await registerpage.registerUser('ravi','peter','delhi','saket','delhi','110011','12234','34345','javacs8','asdf')
//             registerpage.clickOnRegisterbutton()
//             await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
//             await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
//             await page.waitForTimeout(5000)           
// })

// for(const data of testdata){
// test(`registration ${data.username}`,async({page})=>
// {
//          const poManager=new POManager(page)
//          const homepage= poManager.getHomePage()
//           homepage.goTo()
//           homepage.clickOnRegisterLink()

//         const registerpage= poManager.getRegistrationPage()
//          //const registerpage=new RegistrationPage(page)
//             await registerpage.registerUser(
//                 data.firstname,
//                 data.lastname,
//                 data.address,
//                 data.city,
//                 data.state,
//                 data.zipcode,
//                 data.phonenumber,
//                 data.ssn,
//                 data.username,
//                 data.password,
//                 data.confirmpassword
//             )
//             registerpage.clickOnRegisterbutton()
//             await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
//             await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
//             await page.waitForTimeout(5000)           
// })
// }


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









// //{} y  []
