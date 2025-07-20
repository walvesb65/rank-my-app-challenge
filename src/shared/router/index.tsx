import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/ui/pages/Dashboard";
import Details from "@/ui/pages/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/app/:id",
    element: <Details />,
  },
]);
