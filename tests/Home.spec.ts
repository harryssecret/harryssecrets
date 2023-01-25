import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Accueil/);
});

test("check navbar links", async ({ page }) => {
  const NAVBAR_LINKS = [
    { name: /Articles/, url: /.*article/ },
    { name: /propos/, url: /.*about/ },
  ];

  for (const link of NAVBAR_LINKS) {
    await page.getByRole("link", { name: link.name }).click();
    await expect(page).toHaveURL(link.url);
    await page.goBack();
  }
});
