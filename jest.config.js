module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["babel-jest", { configFile: "./babel-jest.config.js" }]
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};