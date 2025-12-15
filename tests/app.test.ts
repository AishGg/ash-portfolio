/**
 * Tests for Portfolio Application
 * Includes functional tests and smoke tests
 */

import { validateEmail } from '../src/lib/utils';

describe('Portfolio Application Tests', () => {
  // Functional Test: Email Validation
  test('should reject invalid email', () => {
    const result = validateEmail('not-an-email');
    expect(result.valid).toBe(false);
  });

  // Smoke Test: Health Endpoint
  test('Health endpoint returns 200', async () => {
    const baseUrl = process.env.TEST_URL || 'http://localhost:5000';
    const response = await fetch(`${baseUrl}/api/health`);
    
    expect(response.status).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('status');
    expect(data.status).toBe('healthy');
  });
});

