import {Page} from "@playwright/test";

class Panier{
    readonly Page : Page;
    constructor(Page : Page){
        this.Page=Page;
    }

   async ajouterArticle(){
    await this.Page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await this.Page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await this.Page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

   }

   async ouvrirPanier(){
    await this.Page.locator('[data-test="shopping-cart-link"]').click();
   }

   async supprimerArticle(){
    await this.Page.locator('[data-test="remove-sauce-labs-backpack"]').click()
    await this.Page.locator('[data-test="continue-shopping"]').click();
   }

   async menu(){
    await this.Page.getByRole('button', { name: 'Open Menu' }).click();
    await this.Page.getByRole('link', { name: 'All Items' }).click();
   }

   async reset(){
    await this.Page.locator('[data-test="reset-sidebar-link"]').click();
   }
}

export default Panier;