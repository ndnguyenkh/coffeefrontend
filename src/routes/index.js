
// pages
import Home from "~/pages/Home";
import Register from "~/pages/Register";
import Login from "~/pages/Login";
import Profile from "~/pages/Profile";
import Menu from "~/pages/Menu";

// layouts
import { FooterOnlyLayout, MenuLayout } from "~/components/Layouts";

const PublicRoutes = [
  { path: "/", component: Home, },
  { path: "/login", component: Login, layout: FooterOnlyLayout },
  { path: "/register", component: Register, layout: FooterOnlyLayout },
  { path: "/menu", component: Menu, layout: MenuLayout },
];

const PrivateRoutes = [
  { path: "/profile", component: Profile, },
];

export { PublicRoutes, PrivateRoutes };
