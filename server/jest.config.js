module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.js'],
  testMatch: ['**/__tests__/**/*.test.js'],
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './test-report',
      filename: 'index.html',
      expand: true,
      pageTitle: 'Together Forge - Backend Tests'
    }]
  ]
};
