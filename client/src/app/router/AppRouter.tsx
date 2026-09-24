// app/router/AppRouter.tsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "../../layouts/MainLayout";
import { AuthLayout } from "../../layouts/AuthLayout";

import { HomePage } from "../../pages/Home/HomePage";
import { DashboardPage } from "../../pages/Dashboard/DashboardPage";
import { ProjectsPage } from "../../pages/Projects/ProjectsPage";
import { LoginPage } from "../../pages/Login/LoginPage";
import { NotFoundPage } from "../../pages/NotFound/NotFoundPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}