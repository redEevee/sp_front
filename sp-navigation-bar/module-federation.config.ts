export const mfConfig = {
  name: "spNavigationBar",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App",
  },
  shared: {
    react: {singleton: true, requiredVersion: "^18.2.0"},
    "react-dom": {singleton: true, requiredVersion: "^18.2.0"},
    "react-router-dom": {singleton: true, requiredVersion: "^6.30.0"},
    "shared-utils": {singleton: true},
  },
};
