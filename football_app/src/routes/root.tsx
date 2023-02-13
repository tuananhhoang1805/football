import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getLeagues } from "../utils/apis";

import { league } from "../utils/data";
import { League } from "../utils/types";
import SportCard from "../components/SportCard";

const sport = [
  {
    name: "Football",
    image:
      "https://img.freepik.com/free-vector/vector-isolated-realistic-soccer-ball-white_1284-41932.jpg?w=826&t=st=1675935812~exp=1675936412~hmac=3cdbe6880db3b928cf6982335e8a1ef09c4f22f4f134d0927c1399fcd7a2410c",
  },
  {
    name: "Baseball",
    image:
      "https://img.freepik.com/free-vector/doodle-baseball_1034-761.jpg?w=826&t=st=1675966496~exp=1675967096~hmac=b83237094d484339f82a3dc46c06dbd5284d8a0fa0f122238e16f26836276b2e",
  },
  {
    name: "Volleybal",
    image:
      "https://img.freepik.com/premium-vector/ball-volly-illustration_320979-35.jpg?w=826",
  },
  {
    name: "Basketball",
    image:
      "https://img.freepik.com/free-vector/ball_1308-18679.jpg?t=st=1675966608~exp=1675967208~hmac=5925ac51a41a951075b03d48703fb50774476e96528d996100907846d1972383",
  },
];

export default function Root() {
  return (
    <div className="flex w-[94%] h-[94%] bg-[#000] rounded-[30px] overflow-hidden">
      <div className="w-1/4 lg:w-1/5 min-h-screen bg-[#141414] py-12 px-8 flex flex-col">
        <div className="flex items-center gap-4 w-full">
          <img
            src="https://th.bing.com/th/id/R.b481350ffd75f7192ba3bf64bae22fad?rik=02EMHLxyW5s60Q&pid=ImgRaw&r=0"
            alt="logo"
            className="h-6 w-6 object-cover rounded-full scale-150"
          />
          <Link to="/" className="w-full">
            Sportial
          </Link>
        </div>

        <h4 className="text-[12px] mb-2 mt-16 text-[#777]">Sports</h4>

        <div className="max-h-[500px] w-[300px] overflow-y-scroll scrollbar scrollbar1">
          {sport.map((sport) => {
            return (
              <SportCard
                key={sport.name}
                sport={sport.name}
                img={sport.image}
              />
            );
          })}
        </div>

        <h4 className="text-[12px] mb-2 mt-16 text-[#777]">Other Menu</h4>

        <div className="flex flex-col gap-y-4 mt-4">
          <Link to="/favourite" className="tracking-widest text-[#666]">
            Favourites
          </Link>
          <Link to="/support" className="tracking-widest text-[#666]">
            Support
          </Link>
        </div>
      </div>
      <div className="p-4  w-full">
        <Outlet />
      </div>
    </div>
  );
}
