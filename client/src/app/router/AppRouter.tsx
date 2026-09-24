// app/router/AppRouter.tsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
// import { AuthLayout } from "../../layouts/AuthLayout";

import HomePage from "../pages/Home/HomePage";
import CareerGoalsLayout from "../pages/Tech/CareerGoals/CareerGoalsLayout";
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
                path: "tech",
                // element:<TechLayout />,
                children: [

                    {
                        path: "career-goals",
                        element: <CareerGoals />,
                    },

                ],
            },
            {
                path: "proui",
                // element:<ProUILayout />,
                children: [

                    {
                        path: "ui-guidelines",
                        element: <UIGuidelines />,
                    },

                ],
            },
            //   {
            //     path: "/dashboard",
            //     element: <DashboardPage />,
            //   },
            //   {
            //     path: "/projects",
            //     element: <ProjectsPage />,
            //   },

            {
                path: "*",
                element: <NotFoundPage />,
            },
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