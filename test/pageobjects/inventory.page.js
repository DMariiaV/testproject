import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get productList(){
        return $$(`.inventory_list>.inventory_item`)
    }

    addProductToCartByName(name){
        return this.getProductCardByName(name).$(`./following-sibling::div[@class='pricebar']//button[text()='Add to cart']`).click()
    }

    getProductPriceByName(name){
        return this.getProductCardByName(name).$(`./following-sibling::div[@class='pricebar']/div[@class='inventory_item_price']`).getText()
    }

    getProductCardByName(name){
        return $(`//*[text()='${name}']/ancestor::div[@class='inventory_item_label']`)
    }

    getShoppingCartItemsCount(){
        return this.shoppingCartCounter.getText()
    }

    get shoppingCartCounter(){
        return this.shopingCard.$(`.shopping_cart_badge`)
    }

    get shopingCard(){
        return $(`a.shopping_cart_link`)
    }


    get burgerMenu(){
        return $('//button[@id="react-burger-menu-btn"]')
    }

    openBurgerMenu(){
        return this.burgerMenu.click()
    }

    get linkAllItem(){
        return $('//a[@id="inventory_sidebar_link"]')
    }

    get linkAbout(){
        return $('//a[@id="about_sidebar_link"]')
    }

    get linkLogout(){
        return $('//a[@id="logout_sidebar_link"]')
    }

    logout(){
        return this.linkLogout.click()
    }

    get linkReset(){
        return $('//a[@id="reset_sidebar_link"]')
    }


    getPagePath(){
        return `/inventory.html`
    }

    get twitter(){
        return $ ('//a[@data-test="social-twitter"]')
    }

    get facebook(){
        return $('//a[@data-test="social-facebook"]')
    }

    get linkedin(){
        return $('//a[@data-test="social-linkedin"]')
    }
}

export default new InventoryPage();
