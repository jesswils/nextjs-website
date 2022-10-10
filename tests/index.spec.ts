import { test, expect } from '@playwright/test';

test('page title is sample website', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sample Wesbite/);
});

test('page header should have my name', async ({page}) => {
  const name = page.locator('h1', {hasText: 'Jess Wilson'});
  // expect(name).toBe('Jess Wilson')
});

test('homepage has links to blog posts',async ({page}) => {
  await page.goto('http://localhost:3000/');

  const blogPost1 = page.locator('text=When to Use Static Generation v.s. Server-side Rendering');
  const blogPost2 = page.locator('text=Two Forms of Pre-rendering')

  await expect(blogPost1).toHaveAttribute('href', '/posts/ssg-ssr');
  await expect(blogPost2).toHaveAttribute('href', '/posts/pre-rendering'); 
})