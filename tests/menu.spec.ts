import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import MenuPage from '../pages/MenuPage';

test.describe('@menuTests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const loginPage = new LoginPage(page);
    await loginPage.saisirUsername('standard_user');
    await loginPage.saisirPassword('secret_sauce');
    await loginPage.clicSurLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Menu visible', { tag: ['@Tc-001'] }, async ({ page }) => {
    const menuPage = new MenuPage(page);
    await menuPage.ouvrirMenu();
    await expect(menuPage.elements.menuButton()).toBeVisible();
  });

  test('All items visible', { tag: ['@Tc-002'] }, async ({ page }) => {
    const menuPage = new MenuPage(page);
    await menuPage.ouvrirMenu();
    await expect(menuPage.elements.allItemsLink()).toBeVisible();
  });

  test('About visible', { tag: ['@Tc-003'] }, async ({ page }) => {
    const menuPage = new MenuPage(page);
    await menuPage.ouvrirMenu();
    await expect(menuPage.elements.aboutLink()).toBeVisible();
  });

  test('Reset App State visible', { tag: ['@Tc-004'] }, async ({ page }) => {
    const menuPage = new MenuPage(page);
    await menuPage.ouvrirMenu();
    await expect(menuPage.elements.resetAppStateLink()).toBeVisible();
  });

  test('Logout works', { tag: ['@Tc-005'] }, async ({ page }) => {
    const menuPage = new MenuPage(page);
    await menuPage.ouvrirMenu();
    await menuPage.seDeconnecter();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
