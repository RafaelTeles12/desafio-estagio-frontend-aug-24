import { test, expect } from '@playwright/test';

test.describe('Chat List', () => {
  test.beforeEach(async ({ page }) => {
    // Inicializa a página com a URL da aplicação
    await page.goto('http://localhost:5174');
  });

  test('Verificar se a lista de chats está carregando corretamente', async ({ page }) => {
    // Verifica se o título da página aparece corretamente
    await expect(page.locator('h2.text-xl')).toHaveText('Conversas');
  });

  test('Pesquisar chats pelo nome', async ({ page }) => {
    // Simula a digitação na barra de pesquisa
    const searchInput = page.locator('input[placeholder="Pesquisar"]');
    await searchInput.fill('Rafael');

    // Verifica se o chat com nome "Rafael" aparece
    await expect(page.locator('text=Rafael')).toBeVisible();

    // Verifica que outros chats não estão sendo exibidos
    await expect(page.locator('text=Família')).not.toBeVisible();
    await expect(page.locator('text=Fulano')).not.toBeVisible();
  });

  test('Filtrar chats por grupos', async ({ page }) => {
    // Clica no botão "Grupos"
    await page.locator('button:has-text("Grupos")').click();

    // Verifica se apenas chats de grupo estão sendo exibidos
    await expect(page.locator('text=Família')).toBeVisible();
    await expect(page.locator('text=Amigos')).toBeVisible();
    await expect(page.locator('text=Rafael')).not.toBeVisible();
    await expect(page.locator('text=Carla')).not.toBeVisible();
  });

  test('Filtrar chats por não lidas', async ({ page }) => {
    // Clica no botão "Não Lidas"
    await page.locator('button:has-text("Não Lidas")').click();

    // Verifica se apenas chats com mensagens não lidas estão sendo exibidos
    await expect(page.locator('text=Trabalho')).toBeVisible();
    await expect(page.locator('text=Pedro')).toBeVisible();
    await expect(page.locator('text=Maria')).not.toBeVisible();
    await expect(page.locator('text=Amigos')).not.toBeVisible();
  });

  test('Combinação de filtros', async ({ page }) => {
    // Aplica filtro de grupos
    await page.locator('button:has-text("Grupos")').click();

    // Aplica filtro de não lidas
    await page.locator('button:has-text("Não Lidas")').click();

    // Verifica se os chats que são grupos e têm mensagens não lidas aparecem
    await expect(page.locator('text=Trabalho')).toBeVisible();
    await expect(page.locator('text=Viagem')).toBeVisible();
    await expect(page.locator('text=Rafael')).not.toBeVisible();
    await expect(page.locator('text=Amigos')).not.toBeVisible();
    await expect(page.locator('text=Fulano')).not.toBeVisible();
  });
});
