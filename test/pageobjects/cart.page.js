import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get yourCart() {
        return $('//span[@data-test="title"]');
    }

    getPagePath(){
        return `/cart.html`}

    getProductItem(name){
        return $(`//div[@data-test="inventory-item-name" and text()='${name}']`)
    }    

    get checkout() {
        return $('button#checkout')
    }

    

}

export default new CartPage();
