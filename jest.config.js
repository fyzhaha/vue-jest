module.exports = {
  snapshotSerializers: ["jest-serializer-vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)",
  ],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: ["src/components/**/*.vue"],
  transform: {
    "^.+\\.vue$": require.resolve(`@vue/vue2-jest`),
    ".+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|avif)$":
      require.resolve("jest-transform-stub"),
    "^.+\\.jsx?$": require.resolve("babel-jest"),
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  testEnvironment: "jsdom",
};
