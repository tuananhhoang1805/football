import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getTeam, getTeamStatistics } from "./utils/apis";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./routes/root"
import Data from "./routes/data";
import { Contact } from "./routes/contact";
import Leagues from "./routes/leagues";
import Home from "./routes/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      
  )
);
function App() {
  return (
    <div className="min-h-screen text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
