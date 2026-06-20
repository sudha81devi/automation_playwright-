// export class RegistrationPage
// {
//     constructor(page)
//     {
//         this.page=page
//         const firstName=await page.locator(`//tr[td[contains(., 'First Name:')]]//input[@type='text']`)
//         const lastName=await page.locator(`//tr[td[contains(., 'First Name:')]]//input[@type='text']`)
//         const address=await page.locator(`//tr[td[contains(., 'Address:')]]//input[@type='text']`)
//         const city=await page.locator(`//tr[td[contains(., 'City:')]]//input[@type='text']`)
//         const state=await page.locator(`//tr[td[contains(., 'State:')]]//input[@type='text']`)
//         const zipCode=await page.locator(`//tr[td[contains(., 'Zip Code:')]]//input[@type='text']`)
//         const phone=await page.locator(`//tr[td[contains(., 'Phone #:')]]//input[@type='text']`)
//         const ssn=await page.locator(`//tr[td[contains(., 'SSN:')]]//input[@type='text']`)
//         const userName=await page.locator(`//tr[td[contains(., 'Username:')]]//input[@type='text']`)
//         const password=await page.locator(`//tr[td[contains(., 'Password:')]]//input[@type='password']`)
//         const confirm=await page.locator(`//tr[td[contains(., 'Confirm:')]]//input[@type='password']`)
//         const registerButton=await page.locator("//input[@value='Register']")
//     }
//     async registerNewUser(fname,lname,address,city,state,zipcode,phone,ssn,username,pass)
//     {
//         await this.firstName.fill(fname)
//         await this.lastName.fill(lname)
//         await this.address.fill(address)
//         await this.state.fill(state)
//         await this.city.fill(city)
//         await this.zipCode.fill(zipcode)
//         await this.ssn.fill(phone)
//         await this.userName.fill(ssn)
//         await this.password.fill(username)
//         await this.confirm.fill(pass)
//         await this.firstName.fill(pass)
//     }
//     async RegisterButton()
//     {
//         await this.registerButton.click()
//     }

// }

export class RegistrationPage
{   
	constructor(page)   
	{    
	this.page=page     
	this.firstName= page.locator("//input[@id='customer.firstName']") 
	this.lastName= page.locator("//input[@id='customer.lastName']")     
	this.address=page.locator("//input[@id='customer.address.street']")     
	this.city=page.locator("//input[@id='customer.address.city']")     
	this.state=page.locator("//input[@id='customer.address.state']")     
	this.zipcode=page.locator("//input[@id='customer.address.zipCode']")     
	this.phonenumber=page.locator("//input[@id='customer.phoneNumber']")     
	this.ssn=page.locator("//input[@id='customer.ssn']")     
	this.userName=page.locator("//input[@id='customer.username']")     
	this.password=page.locator("//input[@id='customer.password']")     
	this.confirm=page.locator("//input[@id='repeatedPassword']")     
	this.registerbutton=page.locator("//input[@value='Register']")   
	}
   async registerUser(fname,lname,address,city,state,zipcode,phone,ssn,username,pass)   
{   
await this.firstName.fill(fname)    
//await this.firstName .click()
//await this.page.waitForTimeout(300)
//await this.firstName.pressSequentially(fname,{ Delay:50 })

 await this.lastName.fill(lname)   
 //await this.lastName.pressSequentially(lname,{ Delay:50 })
 
 await this.address.fill(address)    
 await this.city.fill(city)    
  await this.state.fill(state)    
 await this.zipcode.fill(zipcode)    
  await this.phonenumber.fill(phone)    
 await this.ssn.fill(ssn)     
 await this.userName.fill(username)    
 await this.password.fill(pass)    
 await this.confirm.fill(pass)    
    }
    async clickOnRegisterbutton()   
 {      
 await this.registerbutton.click()  
  } }
// //{} y  []
