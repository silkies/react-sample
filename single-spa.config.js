import { registerApplication, start } from "single-spa";
registerApplication(
  // Name of our single-spa application
  "@local/react-sample",
  // loadingFunction
  () => import("./src/local-react-sample"),
  // activityFunction
  (location) =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/react-sample")
);
start();
