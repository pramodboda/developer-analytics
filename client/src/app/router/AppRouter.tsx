// app/router/AppRouter.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy, Suspense } from "react";


import { MainLayout } from "../layouts/MainLayout";
// import { AuthLayout } from "../../layouts/AuthLayout";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const CareerGoalsLayout = lazy(() => import("../pages/Tech/CareerGoals/CareerGoalsLayout"));
const UIGuidelinesPage = lazy(() => import("../pages/UIGuidelines/UIGuidelinesPage"));
// import { LoginPage } from "../../pages/Login/LoginPage";
const NotFoundPage = lazy(() => import("../pages/NotFound/NotFoundPage"));

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>,
            },
            {
                path: "tech",
                // element:<TechLayout />,
                children: [

                    {
                        path: "career-goals",
                        element: <Suspense fallback={<div>Loading...</div>}><CareerGoalsLayout /></Suspense>,
                    },

                ],
            },
            {
                path: "proui",
                // element:<ProUILayout />,
                children: [

                    {
                        path: "ui-guidelines",
                        element: <Suspense fallback={<div>Loading...</div>}><UIGuidelines /></Suspense>,
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
                element: <Suspense fallback={<div>Loading...</div>}><NotFoundPage /></Suspense>,
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
        element: <Suspense fallback={<div>Loading...</div>}><NotFoundPage /></Suspense>,
    },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}