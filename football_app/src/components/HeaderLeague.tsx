import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getTeam } from "../utils/apis";
import { Teams } from "../utils/types";
import TeamCard from "./TeamCard";

const session = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
].reverse();

interface HeaderProps {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}
const HeaderLeague: React.FC<HeaderProps> = ({ selected, setSelected }) => {
  // const { data } = useQuery({
  //   queryKey: ["team", selected],
  //   queryFn: () => getTeam(39, selected),
  // });
  return (
    <header>
      <section className="flex items-center gap-x-4">
        <img
          src="https://flyclipart.com/thumb2/premier-league-lions-head-vector-logo-free-vector-silhouette-191602.png"
          alt="premier league"
          className="h-14 w-14 object-cover rounded-full"
        />
        <h1 className="text-lg tracking-wider text-[#ff2882]">
          Premier League
        </h1>

        <div className="flex gap-x-2">
          {/* {data
            ?.sort((a, b) => {
              return a.team.name.localeCompare(b.team.name);
            })
            .map((team: Teams) => {
              return <TeamCard key={team.team.id} data={team.team} />;
            })} */}
        </div>
      </section>

      <section className="flex gap-x-2 items-center mt-2">
        <h1 className="capitalize">Session : </h1>
        <div className="flex gap-x-8">
          {session.map((session) => {
            return (
              <button
                key={session}
                className={`${
                  selected === session ? "bgGradient" : ""
                } bg-[#1a1a1a] p-2 rounded-md boxSha`}
                onClick={() => setSelected(session)}
              >
                {session}
              </button>
            );
          })}
        </div>
      </section>

      <div className="h-[2px] w-full bg-black mt-4"></div>
    </header>
  );
};

export default HeaderLeague;
