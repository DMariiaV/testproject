import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutOverview extends Page {
    /**
     * define selectors using getter methods
     */

get finishBtn() {
    return $ ('button#finish')
}

getProductByName(name){
    return $(`//*[text()='${name}']/ancestor::div[@class='cart_item_label']`)
}

get summarySubTotal(){
    return $('.summary_subtotal_label')
}

getPagePath(){
    return `/checkout-step-two.html`}

}

export default new CheckoutOverview();