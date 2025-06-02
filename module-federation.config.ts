export const mfConfig = {
  name: "app_team",
  filename: "remoteEntry.js",
  exposes: {
    "./TeamView": "./src/pages/TeamView",
    "./TeamEdit": "./src/components/TeamEdit",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};
