import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getMatch } from "../utils/apis";
import { matches } from "../utils/data";
import Match from "./Match";
const PageMatches = () => {
  const date = new Date();
  const newDate = date.toLocaleDateString("sv-SE").toString();
  const [selectDate, setSelectDate] = useState<string>(newDate);

  const { data: matches, isLoading } = useQuery({
    queryKey: ["matches", selectDate],
    queryFn: () => getMatch(selectDate),
  });

  const dataPremier = matches?.filter((league) => {
    return league.league.id === 39;
  });

  return (
    <div>
      <div>
        <div>
          <input
            type="date"
            value={selectDate}
            className="text-black date"
            onChange={(e) => setSelectDate(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-y-scroll scrollbar scrollbar1 h-[550px]">
        <div className="mt-4 flex flex-wrap gap-8 relative h-[550px] w-full">
          {isLoading ? (
            <div className="">
              Loading...
            </div>
          ) : (
            dataPremier?.map((match) => {
              return <Match key={match.fixture.id} match={match} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default PageMatches;
