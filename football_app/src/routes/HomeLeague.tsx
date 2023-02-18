import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import { TeamRank, Teams, Standing } from "../utils/types";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getMatch, getStanding, getTeam } from "../utils/apis";
import { dataTeam, league, standing } from "../utils/data";
import PageMatches from "../components/PageMatches";

const model = ["standings", "matches"];

const HomeLeague = () => {
  const [selected] = useOutletContext<number[]>();
  const [selectModel, setSeclectModel] = useState<string>("standings");

  const navigate = useNavigate();
  const data: any[] = [];

  // const { data } = useQuery({
  //   queryKey: ["standing", selected],
  //   queryFn: () => getStanding(selected, 39),
  // });

  // const team = data?.map((team) => {
  //   return team.league;
  // });

  // const rank = team?.map((team) => {
  //   return team.standings.map((standing) => {
  //     return standing;
  //   });
  // });

  const handleGoTeam = (id: number) => {
    console.log("handleGoTeam", id);
    navigate(`/premierleague/${id}`);
  };
  return (
    <div className="flex items-center justify-center flex-col gap-y-4">
      <div>
        {model.map((model) => {
          return (
            <button
              key={model}
              className={`${
                selectModel === model ? "bgGradient" : ""
              } bg-[#1a1a1a] p-2 rounded-md uppercase tracking-widest mx-2 boxSha`}
              onClick={() => setSeclectModel(model)}
            >
              {model}
            </button>
          );
        })}
      </div>

      {/* {selectModel === "standings" && (
        <div className="w-4/5">
          <div className="flex flex-col">
            {team?.map((team) => {
              return (
                <div key={team.id} className="mb-4">
                  <div className="flex justify-center items-center gap-x-2">
                    <img
                      src={team.logo}
                      className="h-6 w-6 object-cover rounded-full"
                      alt={team.name}
                    />
                    <h1>{team.name}</h1>
                  </div>
                </div>
              );
            })}
            <table className="border-spacing-3.5 p-2">
              <thead className="bg-[#646464]">
                <tr>
                  <th scope="col" className="w-[100px]">
                    <abbr title="Position">Pos</abbr>
                  </th>
                  <th scope="col" className="w-[300px]">
                    Club
                  </th>
                  <th scope="col" className="w-[100px]">
                    <abbr title="Played">Pl</abbr>
                  </th>
                  <th scope="col" className="w-[50px]">
                    <abbr title="Win">W</abbr>
                  </th>
                  <th scope="col" className="w-[50px]">
                    <abbr title="Draw">D</abbr>
                  </th>
                  <th scope="col" className="w-[50px]">
                    <abbr title="Lose">L</abbr>
                  </th>
                  <th scope="col" className="w-[50px]">
                    <abbr title="Goals For">GF</abbr>
                  </th>
                  <th scope="col" className="w-[50px]">
                    <abbr title="Goals Against">GA</abbr>
                  </th>
                  <th scope="col">
                    <abbr title="Goal Difference">GD</abbr>
                  </th>
                  <th scope="col">
                    <abbr title="Points">Pts</abbr>
                  </th>
                  <th scope="col">Last 5</th>
                </tr>
              </thead>
              <tbody>
                {rank?.map((standing) => {
                  return standing.map((stand) => {
                    return stand.map((rank) => {
                      return (
                        <tr
                          className="cardBg border-spacing-3.5"
                          onClick={() => handleGoTeam(rank.team.id)}
                        >
                          <td className="text-center p-[2px] font-bold">
                            <span>{rank.rank}</span>
                          </td>
                          <td className="flex gap-x-2 items-center justify-start">
                            <img
                              src={rank.team.logo}
                              className="h-4 w-4 object-cover"
                            />
                            <span>{rank.team.name}</span>
                          </td>
                          <td className="text-center font-bold">
                            {rank.all.played}
                          </td>
                          <td className="text-center">{rank.all.win}</td>
                          <td className="text-center">{rank.all.draw}</td>
                          <td className="text-center">{rank.all.lose}</td>
                          <td className="text-center">{rank.all.goals.for}</td>
                          <td className="text-center">
                            {rank.all.goals.against}
                          </td>
                          <td className="text-center font-bold">
                            {rank.goalsDiff}
                          </td>
                          <td className="text-center font-bold">
                            {rank.points}
                          </td>
                          <td className="text-center flex justify-center items-center">
                            {rank.form.split("").map((form) => {
                              return (
                                <span
                                  className={`form ${
                                    form === "W"
                                      ? "win"
                                      : form === "L"
                                      ? "lose"
                                      : "draw"
                                  }`}
                                >
                                  {form}
                                </span>
                              );
                            })}
                          </td>
                        </tr>
                      );
                    });
                  });
                })}
              </tbody>
            </table>
          </div>
        </div>
      )} */}

      {selectModel === "matches" && (
        <div className="w-full">
          <PageMatches />
        </div>
      )}
    </div>
  );
};

export default HomeLeague;
