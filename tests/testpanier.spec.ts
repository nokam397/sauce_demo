import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import Panier from '../pages/PanierPag';
test('test panier ',{tag:['@tc-005',"@regression"]}, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();
  await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); 
  const panier = new Panier(page);
  await panier.ajouterArticle();
  await panier.ouvrirPanier();
  await panier.supprimerArticle();
  await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); 
});