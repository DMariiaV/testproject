import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends CheckoutOverview {
    /**
     * define selectors using getter methods
     */

get finishBtn() {
    return $ ('button#finish')
}

}

export default new CheckoutOverview();