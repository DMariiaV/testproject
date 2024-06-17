import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutComplete extends Page {
    /**
     * define selectors using getter methods
     */

get finishBtn() {
    return $ ('button#finish')
}

getProductByName(name){
    return $(`//*[text()='${name}']/ancestor::div[@class='cart_item_label']`)
}

get completeNotification(){
    return $('.complete-header')
}

get backHomeBtn(){
    return $('#back-to-products')
}

getPagePath(){
    return `/checkout-complete.html`}

}

export default new CheckoutComplete();