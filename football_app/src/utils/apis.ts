import http from "./http";
import { League, Team } from "./types";

type TeamResponse = {
  response: {
    team: Team[];
  };
};


type LeagueResponse = {
  response : League[]
}
export const getLeagues = async () => {
  const res = await http.get<LeagueResponse>("leagues");
  return res.data?.response;
};

export const getTeam = (league: string, season: string) => {
  return http.get<TeamResponse>("teams", {
    params: {
      league: league,
      season: season,
    },
  });
};

export const getTeamStatistics = (
  league: number,
  season: number,
  team: number
) => {
  return http.get<TeamResponse>("teams/statistics", {
    params: {
      league: league,
      season: season,
      team: team,
    },
  });
};
