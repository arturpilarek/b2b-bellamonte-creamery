import { test, expect } from '@playwright/test'

// Tests:
// 1. login page loads correctly
// 2. user can interact with login form

// TODO when the rest of functionality is added:
// 3. user can login with valid credentials
// 4. user can't login with invalid credentials
// 5. error message is displayed when invalid credentials are entered
// 6. input fields are validated
// 7. user is redirected to home page after successful login

test.describe('Login', () => {
  test('login page loads correctly', async ({ page }) => {
    await page.goto('/login')
    await page.waitForLoadState('networkidle')
    await page.getByRole('heading', { name: 'Welcome Back' })
  })

  test('user can interact with login form', async ({ page }) => {
    await page.goto('/login')
    await page.waitForLoadState('networkidle')
    
    await expect(page.locator('text=Welcome Back')).toBeVisible({ timeout: 10000 })
    
    const emailInput = page.locator('input[type="email"]').first()
    const passwordInput = page.locator('input[type="password"]').first()
    const submitButton = page.locator('button[type="submit"]').first()
    
    await expect(emailInput).toBeVisible()
    await expect(passwordInput).toBeVisible()
    await expect(submitButton).toBeVisible()
    
    await emailInput.fill('test@example.com')
    await passwordInput.fill('password123')
    await submitButton.click()
    
    await expect(page.locator('[role="alert"]')).not.toBeVisible()
  })
}) 