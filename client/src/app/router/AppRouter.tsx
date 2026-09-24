// app/router/AppRouter.tsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
// import { AuthLayout } from "../../layouts/AuthLayout";

import HomePage from "../pages/Home/HomePage";
import UIGuidelines from "../pages/UIGuidelines/UIGuidelinesPage";
// import { LoginPage } from "../../pages/Login/LoginPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path:"/proui",
                element:<></>,
                children: [
                  
                    {
                      path: "ui-guidelines",
                      element: <UIGuidelines />,
                    },
                   
                  ],
            }
            //   {
            //     path: "/dashboard",
            //     element: <DashboardPage />,
            //   },
            //   {
            //     path: "/projects",
            //     element: <ProjectsPage />,
            //   },
        ],
    },

    //   {
    //     element: <AuthLayout />,
    //     children: [
    //       {
    //         path: "/login",
    //         element: <LoginPage />,
    //       },
    //     ],
    //   },

    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}