const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://tsvetomirbahov-exam.onrender.com/');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  