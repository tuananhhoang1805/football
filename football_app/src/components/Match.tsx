import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  getPlayersByFixturesStatistics,
  getTeamStatistics,
} from "../utils/apis";
import { MatchFixturesDay } from "../utils/types";

interface MatchProps {
  match: MatchFixturesDay;
}

export const getDay = (time: number) => {
  const date = new Date(time * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return date.getDate() + " " + months[date.getMonth()];
};
export const getTime = (time: number) => {
  const date = new Date(time * 1000);
  const mins = date.getMinutes() === 0 ? "00" : date.getMinutes();
  return date.getHours() + " : " + mins;
};

const Match: React.FC<MatchProps> = ({ match }) => {
  const [openDetails, setOpenDetails] = React.useState<boolean>(false);
  const time = getTime(match.fixture.timestamp);
  const day = getDay(match.fixture.timestamp);

  const { data } = useQuery({
    queryKey: ["player", match.fixture.id],
    queryFn: () => getPlayersByFixturesStatistics(match.fixture.id),
  });

  console.log(match);

  return (
    <div>
      {!match && <div className="flex justify-center items-center">No match found</div>}
      <div
        className={`w-[420px] h-[200px] rounded-[30px] bg-[#1f1f1f] text-white relative boxSha justify-center `}
      >
        <div
          className="absolute right-4 top-2 cursor-pointer"
          onClick={() => setOpenDetails(true)}
        >
          More
        </div>
        <div
          className={`absolute left-4 top-[-5%] py-1 px-4 bg-[#f34747] text-[13px] rounded-md`}
        >
          {match.fixture.status.short}
        </div>
        <div className="flex justify-around items-center w-full h-full">
          <div className="flex flex-col items-center gap-y-1 w-[30%]">
            <img
              src={match.teams.home.logo}
              alt=""
              className="h-12 w-12 object-cover"
            />
            <h1 className="text-[12px] ">{match.teams.home.name}</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-[30%]">
            <div className="flex gap-x-4 my-4 items-center text-red-600">
              <p className="text-[25px]">{match.goals.home || "0"}</p> :{" "}
              <p className="text-[25px]">{match.goals.away || "0"}</p>
            </div>
            <div className="text-[13px] text-center">
              <p>{time}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-y-1 w-[30%]">
            <img
              src={match.teams.away.logo}
              alt=""
              className="h-12 w-12 object-cover"
            />
            <h1 className="text-[12px] ">{match.teams.away.name}</h1>
          </div>
        </div>
      </div>
      {openDetails && (
        <div className="w-full h-[530px] bg-[#424242] absolute top-0 left-0 flex rounded-[30px] z-10">
          <div
            onClick={() => setOpenDetails(false)}
            className="text-white absolute top-4 right-4 cursor-pointer"
          >
            Close
          </div>

          <div className="text-white absolute top-4 left-4">
            <p className="font-bold text-[16px]">{time}</p>
            <p className="text-[14px]">{day}</p>
          </div>

          <div className="flex w-full">
            <div className="p-12 mt-4 w-[40%] relative">
              <div
                className={`absolute top-0 translate-x-[-50%] left-[50%] py-1 px-4 bg-[#f34747] text-[13px] rounded-md `}
              >
                {match.fixture.status.long}
              </div>
              <h1 className="text-[14px] text-[#777] text-center mx-auto">
                {match.fixture.venue.name}, {match.fixture.venue.city}
              </h1>
              <h2 className="text-[14px] text-[#f7f5f5] text-center mx-auto mb-4">
                Referee : {match.fixture.referee || ""}
              </h2>
              <div className="flex justify-center items-center gap-x-2 mb-8">
                <img
                  src={match.league.logo}
                  alt="logo"
                  className="h-10 w-10 object-cover"
                />
                <h1>{match.league.name}</h1>
              </div>
              <div className="flex justify-around">
                <div className="flex flex-col items-center gap-y-1 w-[30%]">
                  <img
                    src={match.teams.home.logo}
                    alt=""
                    className="h-12 w-12 object-cover"
                  />
                  <h1 className="text-[12px] text-center">
                    {match.teams.home.name}
                  </h1>
                </div>

                <div className="flex flex-col items-center gap-y-1 w-[30%]">
                  <img
                    src={match.teams.away.logo}
                    alt=""
                    className="h-12 w-12 object-cover"
                  />
                  <h1 className="text-[12px] text-center">
                    {match.teams.away.name}
                  </h1>
                </div>
              </div>

              <div className="flex justify-around relative">
                <span className="text-[14px] text-[#888]">Home</span>
                <span className="text-[14px] text-[#888]">Away</span>
              </div>
              <div className="flex justify-around relative">
                <p className="text-[45px]">{match.goals.home || "0"}</p>
                <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  FT
                </p>
                <p className="text-[45px]">{match.goals.away || "0"}</p>
              </div>
              <div className="flex justify-around relative">
                <p className="text-[20px]">
                  {match.score.halftime.home || "0"}
                </p>
                <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[12px]">
                  HT
                </p>
                <p className="text-[20px]">
                  {match.score.halftime.away || "0"}
                </p>
              </div>
            </div>
            <div className="h-full w-[1px] bg-black"></div>
            <div className="p-12 mt-4 w-[60%] flex justify-between">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Match;
