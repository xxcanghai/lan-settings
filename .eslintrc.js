
module.exports = {
  "extends": "eslint-config-imweb",
  "rules": {
    "no-use-before-define": ["error", { "functions": false }],
    "import/no-dynamic-require": 0
  }
};
