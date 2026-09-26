// app/router/AppRouter.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy, Suspense } from "react";


import { MainLayout } from "../layouts/MainLayout";
// import { AuthLayout } from "../../layouts/AuthLayout";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const CareerGoalsPage = lazy(() => import("../pages/Tech/CareerGoals/CareerGoalsPage"));
const UIGuidelinesPage = lazy(() => import("../pages/UIGuidelines/UIGuidelinesPage"));
// import { LoginPage } from "../../pages/Login/LoginPage";
const NotFoundPage = lazy(() => import("../pages/NotFound/NotFoundPage"));


// // ==================================================
// // Custom LazyPage is a reusable lazy-page wrapper
// // ==================================================
// function LazyPage({ Component }: { Component: ComponentType }) {
//     return (<Suspense fallback={<div>Loading...</div>}></Suspense >)
// }

// const router = createBrowserRouter([
//     {
//         element: <MainLayout />,
//         children: [
//             {
//                 path: "/",
//                 element: <LazyPage Component={HomePage} />,
//             },
//             {
//                 path: "tech",
//                 // element:<TechLayout />,
//                 children: [

//                     {
//                         path: "career-goals",
//                         element: <LazyPage Component={CareerGoalsPage} />,
//                     },

//                 ],
//             },
//             {
//                 path: "proui",
//                 // element:<ProUILayout />,
//                 children: [

//                     {
//                         path: "ui-guidelines",
//                         element: <LazyPage Component={UIGuidelinesPage} />,
//                     },

//                 ],
//             },
//             //   {
//             //     path: "/dashboard",
//             //     element: <DashboardPage />,
//             //   },
//             //   {
//             //     path: "/projects",
//             //     element: <ProjectsPage />,
//             //   },

//             {
//                 path: "*",
//                 element: <LazyPage Component={NotFoundPage} />,
//             },
//         ],
//     },

//     //   {
//     //     element: <AuthLayout />,
//     //     children: [
//     //       {
//     //         path: "/login",
//     //         element: <LoginPage />,
//     //       },
//     //     ],
//     //   },

//     {
//         path: "*",
//         element: <LazyPage Component={NotFoundPage} />,
//     },
// ]);

// export function AppRouter() {
//     return <RouterProvider router={router} />;
// }


// // ==================================================
// // Custom LazyPage is a reusable lazy-page wrapper
// // ==================================================
// function LazyPage({ Component }: { Component: ComponentType }) {
//     return (<Suspense fallback={<div>Loading...</div>}></Suspense >)
// }

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
                        element: <CareerGoalsPage />,
                    },

                ],
            },
            {
                path: "proui",
                // element:<ProUILayout />,
                children: [

                    {
                        path: "ui-guidelines",
                        element: <UIGuidelinesPage />,
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
    return
    <Suspense fallback={<>Loading....</>}>
        <RouterProvider router={router} />;

    </Suspense>

}