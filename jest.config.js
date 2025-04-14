const { pathsToModuleNameMapper } = require("ts-jest/dist");

module.exports = {
    preset:'ts-jest',
    testEnvironment: 'jsdom',
    moduleDirectories:['node_modules','src'],
 
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};