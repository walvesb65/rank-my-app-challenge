import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/ui/pages/Dashboard";
import Details from "@/ui/pages/Details";
import AppLayout from "@/ui/components/Layout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
    ],
  },
]);
