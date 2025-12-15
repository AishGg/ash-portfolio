/**
 * Test fixtures for contact form validation
 * Includes valid inputs, invalid inputs, and edge cases
 */

export const validContactData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  message: 'This is a valid message for testing purposes.',
};

export const invalidContactData = {
  // Missing name
  missingName: {
    email: 'test@example.com',
    message: 'Test message',
  },
  // Missing email
  missingEmail: {
    name: 'Jane Doe',
    message: 'Test message',
  },
  // Missing message
  missingMessage: {
    name: 'Bob Smith',
    email: 'bob@example.com',
  },
  // Invalid email formats
  invalidEmailFormats: [
    'not-an-email',
    'missing@domain',
    '@missinglocal.com',
    'spaces in@email.com',
    'double..dots@example.com',
    '.starts.with.dot@example.com',
    'ends.with.dot.@example.com',
    '',
    '   ',
  ],
  // Edge cases
  edgeCases: {
    // Very long name
    longName: {
      name: 'A'.repeat(1000),
      email: 'test@example.com',
      message: 'Test',
    },
    // Very long email
    longEmail: {
      name: 'Test',
      email: 'a'.repeat(250) + '@example.com',
      message: 'Test',
    },
    // Very long message
    longMessage: {
      name: 'Test',
      email: 'test@example.com',
      message: 'A'.repeat(10000),
    },
    // Empty strings
    emptyStrings: {
      name: '',
      email: '',
      message: '',
    },
    // Only whitespace
    whitespaceOnly: {
      name: '   ',
      email: '   ',
      message: '   ',
    },
  },
};

export const validEmailAddresses = [
  'user@example.com',
  'test.email@domain.co.uk',
  'user+tag@example.com',
  'user_name@example-domain.com',
  'user123@test123.com',
  'a@b.co',
];

export const invalidEmailAddresses = [
  'not-an-email',
  'missing@domain',
  '@missinglocal.com',
  'spaces in@email.com',
  'double..dots@example.com',
  '.starts.with.dot@example.com',
  'ends.with.dot.@example.com',
  '',
  '   ',
  'missing@tld',
  '@example.com',
  'user@',
  'user@.com',
  'user@com',
];

