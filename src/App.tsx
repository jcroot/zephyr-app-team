import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";

import TeamView from "./pages/TeamView";
import TeamEdit from "./components/TeamEdit";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path="/" element={<TeamView />} />
        <Route path="/add-team" element={<TeamEdit />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
