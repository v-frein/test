import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "reset-css";
import { Segment, Taxonomy } from "./pages";

const router = createBrowserRouter([
  {
    path: "/segment",
    element: <Segment />,
  },
  {
    path: "/taxonomy",
    element: <Taxonomy />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
