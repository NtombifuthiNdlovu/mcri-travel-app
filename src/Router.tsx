import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PakingPage from "./pages/ExamplePage/ExamplePage";import PackingPage from "./pages/pokemon/pokemon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "example",
    element: <PackingPage />,
  },
  {
    path: "packing",
    element: <PackingPage />,
  },
  // 
  //   path: "flights",
  //   element: <FlightInfo />,
  // },
  // {
  //   path: "sightseeing",
  //   element: <Sightseeing />,
      // },
]);
