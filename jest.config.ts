import type { Config } from 'jest'

export default {
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  testMatch: ['**/tests/**/*.(spec|test).tsx'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ],
    '^.+\\.(s?css|sass)$': 'jest-transform-css'
  },
  testEnvironment: 'jsdom'
} as Config
