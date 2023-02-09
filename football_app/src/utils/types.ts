export interface Team {
  id: number;
  name: string;
  founded: number;
  logo: string;
}

export interface TeamStatistics {
  league: {};
  team: Team;
  form: string;
  fixtures: {
    played: {};
    win: {};
    draws: {};
    loses: {};
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
    0: {
      formation: string;
    };
    1?: {
      formation: string;
    };
    2?: {
      formation: string;
    };
  };
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
