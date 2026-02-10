const config = {
  plugins: ["stylelint-order", "stylelint-prettier"],
  extends: "stylelint-config-idiomatic-order",
  rules: {
    "prettier/prettier": true,
  },
};

export default config;
