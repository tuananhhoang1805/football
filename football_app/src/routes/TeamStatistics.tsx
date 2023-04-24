import { useOutletContext, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTeamStatistics } from "../utils/apis";
import { team } from "../utils/data";
import { useState } from "react";
const model = ["fixtures", "lineups", "goals", "players"];

const TeamStatistics = () => {
  const { teamId } = useParams();
  const [selected] = useOutletContext<number[]>();
  const [selectModel, setSeclectModel] = useState<string>("");
  const { data } = useQuery({
    queryKey: ["teamStatistics", selected, teamId],
    queryFn: () => getTeamStatistics(39, selected, teamId),
  });

  return (
    <div className="flex flex-col gap-y-4">
      <div className="bgGradient p-4 w-full flex justify-around items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src={data?.team.logo}
            alt=""
            className="h-20 w-20 object-cover"
          />
          <h1>{data?.team.name}</h1>
        </div>
      </div>

      <div className="flex gap-x-4">
        {model.map((model) => {
          return (
            <button
              key={model}
              className={`${
                selectModel === model ? "bgGradient" : ""
              } bg-[#1a1a1a] p-2 rounded-md uppercase tracking-widest`}
              onClick={() => setSeclectModel(model)}
            >
              {model}
            </button>
          );
        })}
      </div>
      {selectModel === "fixtures" && (
        <div className="flex flex-col gap-y-4 w-full h-full">
          <div className="bg-[#000] flex justify-center items-center p-12 flex-col rounded-[30px] gap-4">
            <div>Stats in {data?.fixtures.played.total} games</div>
            <h1 className="flex items-center gap-x-4">
              Win :
              <p>
                Home : <span>{data?.fixtures.wins.home}</span>
              </p>
              <p>
                Away : <span>{data?.fixtures.wins.away}</span>
              </p>
            </h1>
            <h1 className="flex items-center gap-x-4">
              Draw :
              <p>
                Home : <span>{data?.fixtures.draws.home}</span>
              </p>
              <p>
                Away : <span>{data?.fixtures.draws.away}</span>
              </p>
            </h1>
            <h1 className="flex items-center gap-x-4">
              Lose :
              <p>
                Home : <span>{data?.fixtures.loses.home}</span>
              </p>
              <p>
                Away : <span>{data?.fixtures.loses.away}</span>
              </p>
            </h1>

            <div className="flex flex-wrap gap-4">
              {data?.form.split("").map((form) => {
                return (
                  <span
                    className={`form ${
                      form === "W" ? "win" : form === "L" ? "lose" : "draw"
                    }`}
                  >
                    {form}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {selectModel === "lineups" && (
        <div className="bg-[#000] flex flex-col gap-y-4 w-full h-full p-4 rounded-[30px]">
          {data?.lineups.map((lineup) => {
            return (
              <div>
                <h1>Formation : {lineup.formation}</h1>
                <h1>Played : {lineup.played}</h1>
              </div>
            );
          })}
        </div>
      )}

      {selectModel === "goals" && (
        <div className="flex flex-col gap-y-4 w-full h-full bg-[#000] p-8 rounded-[30px]">
          <div className="flex items-center">
            <div className="w-1/2 flex flex-col">
              <div className="flex flex-col">
                <h1 className="teamName">For</h1>
                <span>
                  Total : <span>{data?.goals.for.total.total}</span>
                </span>
                <span>
                  Home : <span>{data?.goals.for.total.home}</span>
                </span>
                <span>
                  Away : <span>{data?.goals.for.total.away}</span>
                </span>
              </div>

              <h1 className="teamName">Average</h1>
              <span>
                Total : <span>{data?.goals.for.average.total}</span>
              </span>
              <span>
                Home : <span>{data?.goals.for.average.home}</span>
              </span>
              <span>
                Away : <span>{data?.goals.for.average.away}</span>
              </span>
              <h1 className="teamName">Minute</h1>
              <p className="flex gap-x-4">
                0 - 15 :
                <span>{data?.goals.for.minute["0-15"].total} goals</span>
                <span>
                  Percentage : {data?.goals.for.minute["0-15"].percentage}
                </span>
              </p>
              <p className="flex gap-x-4">
                16 - 30 :
                <span>{data?.goals.for.minute["16-30"].total} goals</span>
                <span>
                  Percentage : {data?.goals.for.minute["16-30"].percentage}
                </span>
              </p>
              <p className="flex gap-x-4">
                31 - 45 :
                <span>{data?.goals.for.minute["31-45"].total} goals</span>
                <span>
                  Percentage : {data?.goals.for.minute["31-45"].percentage}
                </span>
              </p>
              <p className="flex gap-x-4">
                46 - 60 :
                <span>{data?.goals.for.minute["46-60"].total} goals</span>
                <span>
                  Percentage : {data?.goals.for.minute["46-60"].percentage}
                </span>
              </p>
              <p className="flex gap-x-4">
                61 - 75 :
                <span>{data?.goals.for.minute["61-75"].total} goals</span>
                <span>
                  Percentage : {data?.goals.for.minute["61-75"].percentage}
                </span>
              </p>
              <p className="flex gap-x-4">
                79 - 90 :
                <span>{data?.goals.for.minute["76-90"].total} goals</span>
                <span>
                  Percentage : {data?.goals.for.minute["76-90"].percentage}
                </span>
              </p>
              <p className="flex gap-x-4">
                91 - 105 :
                <span>{data?.goals.for.minute["91-105"].total || 0} goals</span>
                <span>
                  Percentage :{" "}
                  {data?.goals.for.minute["91-105"].percentage || "0%"}
                </span>
              </p>
              <p className="flex gap-x-4">
                106 - 120 :
                <span>
                  {data?.goals.for.minute["106-120"].total || 0} goals
                </span>
                <span>
                  Percentage :{" "}
                  {data?.goals.for.minute["106-120"].percentage || "0%"}
                </span>
              </p>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="flex flex-col">
                <h1 className="teamName">Against</h1>
                <span>
                  Total : <span>{data?.goals.against.total.total}</span>
                </span>
                <span>
                  Home : <span>{data?.goals.against.total.home}</span>
                </span>
                <span>
                  Away : <span>{data?.goals.against.total.away}</span>
                </span>
                <h1 className="teamName">Average</h1>
                <span>
                  Total : <span>{data?.goals.against.average.total}</span>
                </span>
                <span>
                  Home : <span>{data?.goals.against.average.home}</span>
                </span>
                <span>
                  Away : <span>{data?.goals.against.average.away}</span>
                </span>
                <h1 className="teamName">Minute</h1>
                <p className="flex gap-x-4">
                  0 - 15 :
                  <span>{data?.goals.against.minute["0-15"].total} goals</span>
                  <span>
                    Percentage : {data?.goals.against.minute["0-15"].percentage}
                  </span>
                </p>
                <p className="flex gap-x-4">
                  16 - 30 :
                  <span>{data?.goals.against.minute["16-30"].total} goals</span>
                  <span>
                    Percentage :{" "}
                    {data?.goals.against.minute["16-30"].percentage}
                  </span>
                </p>
                <p className="flex gap-x-4">
                  31 - 45 :
                  <span>{data?.goals.against.minute["31-45"].total} goals</span>
                  <span>
                    Percentage :{" "}
                    {data?.goals.against.minute["31-45"].percentage}
                  </span>
                </p>
                <p className="flex gap-x-4">
                  46 - 60 :
                  <span>{data?.goals.against.minute["46-60"].total} goals</span>
                  <span>
                    Percentage :{" "}
                    {data?.goals.against.minute["46-60"].percentage}
                  </span>
                </p>
                <p className="flex gap-x-4">
                  61 - 75 :
                  <span>{data?.goals.against.minute["61-75"].total} goals</span>
                  <span>
                    Percentage :{" "}
                    {data?.goals.against.minute["61-75"].percentage}
                  </span>
                </p>
                <p className="flex gap-x-4">
                  79 - 90 :
                  <span>{data?.goals.against.minute["76-90"].total} goals</span>
                  <span>
                    Percentage :{" "}
                    {data?.goals.against.minute["76-90"].percentage}
                  </span>
                </p>
                <p className="flex gap-x-4">
                  91 - 105 :
                  <span>
                    {data?.goals.against.minute["91-105"].total || 0} goals
                  </span>
                  <span>
                    Percentage :{" "}
                    {data?.goals.against.minute["91-105"].percentage || "0%"}
                  </span>
                </p>
                <p className="flex gap-x-4">
                  106 - 120 :
                  <span>
                    {data?.goals.against.minute["106-120"].total || 0} goals
                  </span>
                  <span>
                    Percentage :{" "}
                    {data?.goals.against.minute["106-120"].percentage || "0%"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamStatistics;
