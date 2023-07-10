import { defineConfig } from "cypress";

export default defineConfig({
  screenshotOnRunFailure: false,
  video: true,
  viewportHeight: 560,
  viewportWidth: 915,
  reporter: "cypress-multi-reporters",



  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },



  e2e: {
    baseUrl: "http://localhost:3000",
  },



});
