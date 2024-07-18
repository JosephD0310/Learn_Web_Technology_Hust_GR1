import { ComponentType } from "react";
import config from "../config";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DefaultLayout from "../layout/DefaultLayout";

interface IRoute {
    path: string;
    component: ComponentType<any>;
    layout?: ComponentType<any>
}

const publicRoutes : IRoute[] = [
    { path: config.routes.home, component:Home, layout:DefaultLayout },
    { path: config.routes.page1, component:Home, layout:DefaultLayout },
    { path: config.routes.page2, component:Home, layout:DefaultLayout },
    { path: config.routes.page3, component:Home, layout:DefaultLayout },
    { path: config.routes.login, component:Login },
    { path: config.routes.register, component:Register }
]

export {publicRoutes}