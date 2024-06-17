import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends CheckoutInfoPage {
    /**
     * define selectors using getter methods
     */
    get checkoutInfo() {
        return $('');
    }

    get firstName() {
        return $('input#first-name')
    }

    get lastName() {
        return $('input#last-name')
    }
    get postalCode() {
        return $('input#postal-code')
    }

    get continueBtn() {
        return $('input#continue')
    } 


}
export default new CheckoutInfoPage();