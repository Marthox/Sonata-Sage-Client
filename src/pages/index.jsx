import Landing from "./Landing";
import Login from "./Login";
import Test from "./Test";
import NotFound from "./NotFound";

// The first route will be bounded to "/"
const routes = [
  { path: "/", name: "Landing", navigable: false, component: Landing },
  { path: "/login", name: "Login", navigable: true, component: Login },
  { path: "/test", name: "Test", navigable: true, component: Test },
  // The last route will be bounded to "*"
  { path: "*", name: "NotFound", navigable: false, component: NotFound },
];

export default routes;
