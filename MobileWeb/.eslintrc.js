//
module.exports = {
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "amd": true,
    "jest": true
  },
  "plugins": [
    "react",
    "compat",
    "import",
    "jsx-a11y",
    "promise"
  ],
  "parserOptions": {

  },
  "rules": {
    "no-console": "off"
  },
  "root": true
};
