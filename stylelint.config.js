module.exports = {
  plugins: ["stylelint-order", "stylelint-prettier"],
  extends: "stylelint-config-idiomatic-order",
  rules: {
    "prettier/prettier": true,
  },
};
