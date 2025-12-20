module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./src",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@navigation": "./src/navigation",
            "@store": "./src/store",
            "@models": "./src/types",
            "@utils": "./src/utils",
            "@api": "./src/api",
            "@services": "./src/services",
            "@hooks": "./src/hooks",
            "@config": "./src/config",
          },
        },
      ],
    ],
  };
};
