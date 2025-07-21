import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/ui/pages/Dashboard";
import Details from "@/ui/pages/Details";
import AppLayout from "@/ui/components/Layout/AppLayout";
import EditApp from "@/ui/pages/EditApp";

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
      {
        path: "edit/:id",
        element: <EditApp />,
      },
    ],
  },
]);
