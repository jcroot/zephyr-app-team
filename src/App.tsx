import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

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

export default App;
