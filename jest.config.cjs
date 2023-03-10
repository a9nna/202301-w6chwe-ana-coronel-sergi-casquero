/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts"],
  resolver: "jest-ts-webcompat-resolver",
  testTimeout: 20000,
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/react-app-env.d.ts",
    "!src/server/startServer.ts",
    "!src/database/connectDatabase.ts",
    "!src/**/index.ts",
    "!src/loadEnvironment.ts",
  ],
};
