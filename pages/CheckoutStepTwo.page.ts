import { Page } from "@playwright/test";

class CheckoutStepTwoPage{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }
    elements = {
          cancelButton: ()=>this.page.getByTestId('cancel'),
          finishButton: ()=>this.page.getByTestId('finish')
    }
    async clickSurCancelButton(){
        await this.elements.cancelButton().click();
        await this.elements.finishButton().click();
    }
}
export default CheckoutStepTwoPage;