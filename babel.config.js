// -*- mode: web; standard-indent: 2; fill-column: 80; -*-

export default function (api) {
  api.cache(true);
  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: [],
  };
};
