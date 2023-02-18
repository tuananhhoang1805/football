import http from "./http";
import {
  League,
  MatchFixturesDay,
  Standing,
  Teams,
  TeamStatistics,
} from "./types";

type TeamResponse = {
  response: Teams[];
};

type LeagueResponse = {
  response: League[];
};

type TeamStatisticsResponse = {
  response: TeamStatistics;
};

type StandingsResponse = {
  response: Standing[];
};

type MatchFixturesDayResponse = {
  response: MatchFixturesDay[];
};
export const getLeagues = async (league: string) => {
  if (league === "Football") {
    const res = await http.get<LeagueResponse>("leagues");
    return res.data?.response;
  } else if (league === "Baseball") {
    const res = await http.get<LeagueResponse>("leagues");
    return res.data?.response;
  } else {
    return;
  }
};

export const getTeam = async (league: number, season: number) => {
  const res = await http.get<TeamResponse>("teams", {
    params: {
      league: league,
      season: season,
    },
  });
  return res.data?.response;
};

// export const getTeamStatistics = (
//   league: number,
//   season: number,
//   team: number | undefined
// ) => {
//   return http.get<TeamResponse>("teams/statistics", {
//     params: {
//       league: league,
//       season: season,
//       team: team,
//     },
//   });
// };

export const getTeamStatistics = async (
  league: number,
  season: number,
  team: number | undefined | string
) => {
  const res = await http.get<TeamStatisticsResponse>("teams/statistics", {
    params: {
      league: league,
      season: season,
      team: team,
    },
  });

  return res.data?.response;
};

export const getStanding = async (season: number, league: number) => {
  const res = await http.get<StandingsResponse>("standings", {
    params: {
      season: season,
      league: league,
    },
  });

  return res.data?.response;
};

export const getMatch = async (date: string) => {
  const res = await http.get<MatchFixturesDayResponse>("fixtures", {
    params: {
      date: date,
    },
  });

  return res.data?.response;
};
