export interface Team {
  code?: string;
  country?: string;
  founded?: number;
  id: number;
  logo: string;
  name: string;
  national?: boolean;
}

export interface Teams {
  team: Team;
  venue: any;
}
export interface TeamStatistics {
  league: {};
  team: Team;
  form: string;
  fixtures: {
    played: {
      home: number;
      away: number;
      total: number;
    };
    wins: {
      home: number;
      away: number;
      total: number;
    };
    draws: {
      home: number;
      away: number;
      total: number;
    };
    loses: {
      home: number;
      away: number;
      total: number;
    };
  };
  goals: {
    for: {
      total: {
        home: number | null;
        away: number | null;
        total: number | null;
      };
      average: {
        home: number | null;
        away: number | null;
        total: number | null;
      };
      minute: {
        "0-15": {
          total: number | null;
          percentage: number | null;
        };
        "16-30": {
          total: number | null;
          percentage: number | null;
        };
        "31-45": {
          total: number | null;
          percentage: number | null;
        };
        "46-60": {
          total: number | null;
          percentage: number | null;
        };
        "61-75": {
          total: number | null;
          percentage: number | null;
        };
        "76-90": {
          total: number | null;
          percentage: number | null;
        };
        "91-105": {
          total: number | null;
          percentage: number | null;
        };
        "106-120": {
          total: number | null;
          percentage: number | null;
        };
      };
    };
    against: {
      total: {
        home: number | null;
        away: number | null;
        total: number | null;
      };
      average: {
        home: number | null;
        away: number | null;
        total: number | null;
      };
      minute: {
        "0-15": {
          total: number | null;
          percentage: number | null;
        };
        "16-30": {
          total: number | null;
          percentage: number | null;
        };
        "31-45": {
          total: number | null;
          percentage: number | null;
        };
        "46-60": {
          total: number | null;
          percentage: number | null;
        };
        "61-75": {
          total: number | null;
          percentage: number | null;
        };
        "76-90": {
          total: number | null;
          percentage: number | null;
        };
        "91-105": {
          total: number | null;
          percentage: number | null;
        };
        "106-120": {
          total: number | null;
          percentage: number | null;
        };
      };
    };
  };

  biggest: {
    streak: {
      wins: number | null;
      draws: number | null;
      loses: number | null;
    };
    wins: {
      home: string | null;
      away: string | null;
    };
    loses: {
      home: string | null;
      away: string | null;
    };
    goals: {
      for: {
        home: number | null;
        away: number | null;
      };
      against: {
        home: number | null;
        away: number | null;
      };
    };
  };

  clean_sheet: {
    home: number | null;
    away: number | null;
    total: number | null;
  };
  failed_to_score: {
    home: number | null;
    away: number | null;
    total: number | null;
  };
  penalty: {
    scored: {
      total: number | null;
      percentage: number | null;
    };
    missed: {
      total: number | null;
      percentage: number | null;
    };
    total: number | null;
  };
  lineups: {
    formation: string;
    played: number;
  }[];
  card: {
    yellow: {
      "0-15": {
        total: number | null;
        percentage: number | null;
      };
      "16-30": {
        total: number | null;
        percentage: number | null;
      };
      "31-45": {
        total: number | null;
        percentage: number | null;
      };
      "46-60": {
        total: number | null;
        percentage: number | null;
      };
      "61-75": {
        total: number | null;
        percentage: number | null;
      };
      "76-90": {
        total: number | null;
        percentage: number | null;
      };
      "91-105": {
        total: number | null;
        percentage: number | null;
      };
      "106-120": {
        total: number | null;
        percentage: number | null;
      };
    };
    red: {
      "0-15": {
        total: number | null;
        percentage: number | null;
      };
      "16-30": {
        total: number | null;
        percentage: number | null;
      };
      "31-45": {
        total: number | null;
        percentage: number | null;
      };
      "46-60": {
        total: number | null;
        percentage: number | null;
      };
      "61-75": {
        total: number | null;
        percentage: number | null;
      };
      "76-90": {
        total: number | null;
        percentage: number | null;
      };
      "91-105": {
        total: number | null;
        percentage: number | null;
      };
      "106-120": {
        total: number | null;
        percentage: number | null;
      };
    };
  };
}

export interface League {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
}

export interface Standing {
  league: {
    id: number;
    country: string;
    name: string;
    logo: string;
    season: number;
    standings: {
      rank: number;
      team: Team;
      points: number;
      goalsDiff: number;
      group: string;
      form: string;
      description: string;
      all: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: { for: number; against: number };
      };
      home: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: { for: number; against: number };
      };
      away: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: { for: number; against: number };
      };
      update: string;
    }[][];
  };
}

export interface TeamRank {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  form: string;
}

export interface MatchFixturesDay {
  fixture: {
    id: number;
    referee: string | null;
    timestamp: number;
    timezone: string;
    date: string;
    status: {
      elapsed: string | number | null;
      long: string;
      short: string;
    };
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      city: string;
      id: number;
      name: string;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
  };

  teams: {
    away: Team;
    home: Team;
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    extratime: {
      home: number | string | null;
      away: number | string | null;
    };
    fulltime: {
      home: number | string | null;
      away: number | string | null;
    };
    halftime: {
      home: number | string | null;
      away: number | string | null;
    };
    penalty: {
      home: number | string | null;
      away: number | string | null;
    };
  };
}
