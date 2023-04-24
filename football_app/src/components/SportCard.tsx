import React, { useState } from "react";
import { getLeagues } from "../utils/apis";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type SportProps = {
  sport: string;
  img: string;
};
const SportCard: React.FC<SportProps> = (sport) => {
  const [selected, setSeclected] = useState<string>("Football");

  const [open, setOpen] = useState<boolean>(false);

  const selectSport = (name: string) => {
    setSeclected(name);
    setOpen(true);
  };

  const unSelectSport = () => {
    setOpen(false);
  };

  const { data } = useQuery({
    queryKey: ["football_league", selected],
    queryFn: () => getLeagues(selected),
  });
  return (
    <div className="lg:w-[280px] md:w-[140px] sm:w-[100px]  flex flex-col my-2">
      <div
        className={`flex items-center justify-between  bg-[#6d32af] 
        px-[10px] py-[14px] rounded-lg w-full gap-y-6 sticky`}
      >
        <div className="flex items-center gap-x-2 ">
          <img
            src={sport.img}
            alt="logo_ball"
            className="h-6 w-6 object-cover rounded-full"
          />
          <h1 className="tracking-widest">{sport.sport}</h1>
        </div>
        {open ? (
          <button
            onClick={() => unSelectSport()}
            className="triangle_up1"
          ></button>
        ) : (
          <button
            onClick={() => selectSport(sport.sport)}
            className="triangle_down1"
          ></button>
        )}
      </div>
      <div>
        {open ? (
          <div className="flex items-center gap-x-10 h-full mt-2">
            <div className="h-full w-[1px] bg-[#444444] items-center ml-5" />
            <div className="flex flex-col gap-y-4 max-h-[200px] w-full overflow-y-scroll scrollbar">
              {data?.slice(1, 20).map((league) => {
                return (
                  <div key={league.league.id} className="flex gap-x-4">
                    <img
                      src={league.league.logo}
                      className="h-6 w-6 object-cover rounded-full"
                    />
                    <Link to="/premierleague">
                      <h1>{league.league.name}</h1>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  );
};

export default SportCard;
