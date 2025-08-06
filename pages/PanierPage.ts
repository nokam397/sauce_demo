import { Page } from "@playwright/test";

class Panier {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  elements = {
    addBackpack: () => this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
    addBikeLight: () => this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]'),
    addBoltShirt: () => this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
    cartLink: () => this.page.locator('[data-test="shopping-cart-link"]'),
    removeBackpack: () => this.page.locator('[data-test="remove-sauce-labs-backpack"]'),
    continueShopping: () => this.page.locator('[data-test="continue-shopping"]'),
    badgeCount: () => this.page.locator('.shopping_cart_badge'),
  };

  async ajouterArticle() {
    await this.elements.addBackpack().click();
    await this.elements.addBikeLight().click();
    await this.elements.addBoltShirt().click();
  }

  async ouvrirPanier() {
    await this.elements.cartLink().click();
  }

  async supprimerArticle() {
    await this.elements.removeBackpack().click();
    await this.elements.continueShopping().click();
  }

  async compterArticlesPanier(): Promise<number> {
    const badge = this.elements.badgeCount();
    if (await badge.count() === 0) {
      return 0;
    }
    const countText = await badge.textContent();
    return parseInt(countText || '0', 10);
  }
}

export default Panier;
