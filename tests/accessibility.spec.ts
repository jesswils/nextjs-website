// import { test, expect } from '@playwright/test';
// import AxeBuilder from '@axe-core/playwright';
// import { test, expect } from './fixture';

// test.describe('homepage', () => { // 2
//   test('should not have any automatically detectable accessibility issues', async ({ page }) => {
//     await page.goto('http://localhost:3000/'); // 3

//     const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

//     expect(accessibilityScanResults.violations).toEqual([]); // 5
//   });
// });

// test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
//   await page.goto('http://localhost:3000/');

//   const accessibilityScanResults = await new AxeBuilder({ page })
//     .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
//     .analyze();

//   expect(accessibilityScanResults.violations).toEqual([]);
// });



// // test('example using custom fixture', async ({ page, makeAxeBuilder }) => {
// //   await page.goto('http://localhost:3000/');

// //   const accessibilityScanResults = await makeAxeBuilder()
// //      // Automatically uses the shared AxeBuilder configuration,
// //      // but supports additional test-specific configuration too
// //     .include('#specific-element-under-test')
// //     .analyze();

// //   expect(accessibilityScanResults.violations).toEqual([]);
// // });