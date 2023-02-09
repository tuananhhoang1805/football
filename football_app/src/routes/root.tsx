import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getLeagues } from "../utils/apis";

import { league } from "../utils/data";
import { League } from "../utils/types";

export default function Root() {
  const [leagues, setLeagues] = useState<League[]>([]);

  const [selected, setSelected] = useState<number | undefined>(0);
  const [open, setOpen] = useState<boolean>(false);

  const { data } = useQuery({ queryKey: ["leagues"], queryFn: getLeagues });

  const selectSport = (id: number) => {
    setSelected(id);
    setOpen(true);
  };

  const unSelectSport = () => {
    setSelected(0);
    setOpen(false);
  };

  return (
    <section className="relative flex bg-[#000000] w-full min-h-screen">
      <div className="flex flex-col items-start w-full sm:1/3 md:w-[40%] lg:w-1/4 h-screen bg-[#141414] px-8 min-h-screen">
        <div className="flex items-center gap-4 w-full">
          <img
            src="https://th.bing.com/th/id/R.b481350ffd75f7192ba3bf64bae22fad?rik=02EMHLxyW5s60Q&pid=ImgRaw&r=0"
            alt="logo"
            className="h-6 w-6 object-cover rounded-full scale-150"
          />
          <Link to="/" className="my-8 w-full">
            Football Leagues
          </Link>
        </div>

        <h4 className="text-[12px] my-4 text-[#777]">Sport</h4>

        {data?.slice(5, 10).map((leagues: League) => {
          return (
            <div className="w-full flex flex-col my-2" key={leagues.league.id}>
              <div
                className={`flex items-center justify-between ${
                  leagues.league.id === selected ? "bg-[#6d32af] " : ""
                }px-[10px] py-[14px] rounded-md w-full gap-y-6`}
              >
                <div className="flex items-center gap-x-2">
                  <img
                    src={leagues.league.logo}
                    alt="logo_ball"
                    className="h-6 w-6 object-cover rounded-full"
                  />
                  <h1 className="">{leagues.league.name}</h1>
                </div>
                {open && selected === leagues.league.id ? (
                  <button onClick={() => unSelectSport()}>Dow</button>
                ) : (
                  <button onClick={() => selectSport(leagues.league.id)}>
                    Up
                  </button>
                )}
              </div>
              {selected === leagues.league.id ? (
                <div className="flex items-center gap-x-10 h-full mt-2">
                  <div className="h-full w-[1px] bg-[#444444] items-center ml-5" />
                  <div className="flex flex-col gap-y-4">
                    {league.map((league) => {
                      return <div key={league.id}>{league.name}</div>;
                    })}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>

      <div id="detail" className="min-h-screen">
        <Outlet />
      </div>
    </section>
  );
}
