import React from "react";
import { Link } from "react-router-dom";
import { Team } from "../utils/types";

interface TeamProps {
  data: Team;
}
const TeamCard: React.FC<TeamProps> = ({ data }) => {
  return (
    <Link
      to={`${data.id}`}
      className="flex items-center justify-center w-[40px] h-[30px] card gap-y-2 hover:scale-75"
    >
      <img src={data.logo} className="h-16 w-16 object-cover" alt="logo" />
    </Link>
  );
};

export default TeamCard;
