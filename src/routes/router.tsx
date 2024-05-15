import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OrganisationPage from "../pages/OrganisationPage";
import MitgliederPage from "../pages/MitgliederPage";
import App from "../App";
import KontaktPage from "../pages/KontaktPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/home",
        element: <HomePage />,
      },

      {
        path: "/organisation",
        element: <OrganisationPage />,
      },
      {
        path: "/mitglieder",
        element: <MitgliederPage />,
      },
      {
        path: "/kontakt",
        element: <KontaktPage />,
      },
    ],
  },
]);

export default router;
