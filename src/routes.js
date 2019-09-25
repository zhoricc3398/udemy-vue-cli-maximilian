import Home from "./components/Home";
import User from "./components/user/User";

export const routes = [
  { path: "", component: Home },
  { path: "/user/:id", component: User }
];
