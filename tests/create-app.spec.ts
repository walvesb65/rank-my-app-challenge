import { test, expect } from "@playwright/test";

test("Deve cadastrar um novo aplicativo", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByTestId("input-nome")).toBeVisible();

  await page.getByTestId("input-nome").fill("Will App");
  await page.getByTestId("input-url").fill("https://will.desafio.com");

  await page.getByTestId("select-categoria").click();
  await page
    .locator(".ant-select-item-option")
    .filter({ hasText: "Games" })
    .click();

  await page.getByTestId("select-plataforma").click();
  await page
    .locator(".ant-select-item-option")
    .filter({ hasText: "Android" })
    .click();

  await page.getByRole("button", { name: /cadastrar/i }).click();

  await expect(page.getByText("Will App")).toBeVisible();
});
