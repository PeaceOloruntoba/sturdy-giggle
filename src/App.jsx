import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootRoutes } from "./routes/root.routes";
import { Toaster } from "sonner";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element,
      children: rootRoutes,
    },
  ]);
  return (
    <>
      <Toaster position="top-right" richColors />
      <RouterProvider router={router} />
    </>
  );
}
