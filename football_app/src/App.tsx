import {
  HomeLeague,
  Favorite,
  Home,
  PremierLeague,
  Root,
  Support,
  TeamStatistics,
} from "./routes";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/premierleague" element={<PremierLeague />}>
        <Route index element={<HomeLeague />} />
        <Route path="/premierleague/:teamId" element={<TeamStatistics />} />
      </Route>
      <Route path="/favourite" element={<Favorite />} />
      <Route path="/support" element={<Support />} />
    </Route>
  )
);
function App() {
  return (
    <div className="flex justify-center items-center h-screen text-white bg-[#eeecec]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
