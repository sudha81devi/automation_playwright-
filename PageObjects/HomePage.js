// export class HomePage
// {
//     constructor(page)
//     {
//         this.page=page
//         this.registerlink=await page.getByRole('link', { name: 'Register' })
//     }
//     //actions
//     async goTo()
//     {
//         await this.page.goto('https://parabank.parasoft.com/parabank/register.htm')
//     }
//     async clickOnRegiterLink()
//     {
//         await this.registerlink.click()
//     }

// }


export class HomePage
  {
     constructor(page)
     {
             this.page=page
             this.registerLink=page.locator("//a[normalize-space()='Register']")
     }
 
      async goTo()
      {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm',{timeout:50000})
      }

       async clickOnRegisterLink()
       {
          await this.registerLink.click({timeout:50000})
       }
  }


// //{} y  []
