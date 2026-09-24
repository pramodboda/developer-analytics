// app/router/routes.tsx

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
  
    DASHBOARD: "/dashboard",
    PROUI:"/proui",
  
    PROJECTS: "/projects",
    PROJECT_DETAILS: (id: string) => `/projects/${id}`,
  
    SETTINGS: "/settings",
  } as const;