import { expect } from '@wdio/globals'
import { assert } from 'chai';
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js';


describe('Login tests', () => {
    // it('TC1. Valid Login', async () => {
    //     await LoginPage.open()
    //     await LoginPage.provideCredentials('standard_user', 'secret_sauce')
    //     await expect(await LoginPage.inputUsername).toHaveValue('standard_user')
    //     await expect(await LoginPage.inputPassword).toHaveAttribute('type', 'password')
    //     await LoginPage.submitLogin()
    //     await expect(await InventoryPage.getBrowser()).toHaveUrl(
    //         await InventoryPage.getBaseUrl() + await InventoryPage.getPagePath())
    //     await assert.isNotEmpty(await InventoryPage.productList)
    //     await expect(await InventoryPage.shopingCard).toBeDisabled()
    // }),
    // it('TC2. Invalid password', async () => {
    //     await LoginPage.open()
    //     await LoginPage.provideCredentials('standard_user', '123456')
    //     await expect(await LoginPage.inputUsername).toHaveValue('standard_user')
    //     await expect(await LoginPage.inputPassword).toHaveAttribute('type', 'password')
    //     await LoginPage.submitLogin()
    //     //console.log(await()(await LoginPage.getxIcon()).isDisplayed())
    //     await expect(await LoginPage.errorMessage)
    //         .toHaveText('Epic sadface: Username and password do not match any user in this service')
    // }),
    // it('TC3. Invalid Login', async () => {
    //     await LoginPage.open()
    //     await LoginPage.provideCredentials('standarD_user', 'secret_sauce')
    //     await expect(await LoginPage.inputUsername).toHaveValue('standarD_user')
    //     await expect(await LoginPage.inputPassword).toHaveAttribute('type', 'password')
    //     await LoginPage.submitLogin()
    //     await expect(await LoginPage.errorMessage)
    //         .toHaveText('Epic sadface: Username and password do not match any user in this service')
    //     await expect(await LoginPage.getIconX(await LoginPage.inputPassword)).toBeDisplayed()
    //     await expect(await LoginPage.getIconX(await LoginPage.inputUsername)).toBeDisplayed()

    //  }),

//     it('TC4. Burger Menu>Logout', async () => {
//         await LoginPage.open()
//         await LoginPage.login('standard_user', 'secret_sauce')
//         await InventoryPage.openBurgerMenu()
//         await expect(await InventoryPage.linkAllItem).toBeDisplayed()
//         await expect(await InventoryPage.linkAbout).toBeDisplayed()
//         await expect(await InventoryPage.linkLogout).toBeDisplayed()
//         await expect(await InventoryPage.linkReset).toBeDisplayed()
//         await InventoryPage.logout()
//         await expect(await loginPage.inputUsername).toHaveText('')
//         await expect(await loginPage.inputPassword).toHaveText('')

//     }
// ),
// it('TC5. Saving the card after logout ', async () => {
//     await LoginPage.open()
//     await LoginPage.login('standard_user', 'secret_sauce')
//     await InventoryPage.addProductToCartByName('Sauce Labs Backpack')
//     await assert.equal(await InventoryPage.getShoppingCartItemsCount(),'1')
//     await InventoryPage.openBurgerMenu()
//     await expect(await InventoryPage.linkAllItem).toBeDisplayed()
//     await expect(await InventoryPage.linkAbout).toBeDisplayed()
//     await expect(await InventoryPage.linkLogout).toBeDisplayed()
//     await expect(await InventoryPage.linkReset).toBeDisplayed()
//     await InventoryPage.logout()
//     await expect(await LoginPage.inputUsername).toHaveText('')
//     await expect(await LoginPage.inputPassword).toHaveText('')
//     await LoginPage.login('standard_user', 'secret_sauce')
//     await expect(await InventoryPage.getBrowser()).toHaveUrl(
//                  await InventoryPage.getBaseUrl() + await InventoryPage.getPagePath())
//     await(await InventoryPage.shopingCard).click()  
//     await expect(await CartPage.yourCart).toBeDisplayed()
//     await expect(await CartPage.getProductItem('Sauce Labs Backpack')).toBeDisplayed()
//     }),

//  it('TC7. Footer Links ', async () => {
//     await LoginPage.open()
//     await LoginPage.login('standard_user', 'secret_sauce')
//     await InventoryPage.twitter.click()
//     await browser.switchWindow('https://x.com/saucelabs')
//          await expect(await browser).toHaveUrl('https://x.com/saucelabs')
//     await browser.switchWindow('Swag Labs')
//      await InventoryPage.facebook.click()
//     await browser.switchWindow('https://www.facebook.com/saucelabs')
//     await browser.switchWindow('Swag Labs')
//     await InventoryPage.linkedin.click()
//     await browser.switchWindow('https://www.linkedin.com/company/sauce-labs/')
//     await browser.switchWindow('Swag Labs')
// })
        
// it('TC9. Checkout without products ', async () => {
//     await LoginPage.open()
//     await LoginPage.login('standard_user', 'secret_sauce')
//     await InventoryPage.shopingCard.click()
//     await CartPage.checkout.click()
//     await expect (await CartPage.errorMessage).toHaveText('Cart is empty')
//     //TC 9 has a bug. No error message displayed after chekout.
//     //Instead of error message, form group is appeared on the display. ('div.checkout_info')  
// })
    
   
it('TC8. Valid checkout ', async () => {
    await LoginPage.open()
    await LoginPage.login('standard_user', 'secret_sauce')
    await InventoryPage.shopingCard.click()
    
})
   
}
)

