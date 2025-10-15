// babel.config.js

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // 1. O plugin de métodos privados deve estar AQUI
      //    e DEVE ter o modo { loose: true } para compatibilidade RN.
      ["@babel/plugin-transform-private-methods", { loose: true }],

      // 2. QUALQUER OUTRO PLUGIN (que não seja o Reanimated)

      // 3. O plugin do Reanimated DEVE ser o ÚLTIMO
      "react-native-reanimated/plugin",
    ],
  };
};
