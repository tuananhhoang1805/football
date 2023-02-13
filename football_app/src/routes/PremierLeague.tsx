import { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderLeague from "../components/HeaderLeague";

const PremierLeague = () => {
  const [selected, setSelected] = useState<number>(2022);

  return (
    <div className="p-8 bg-[#141414] h-full w-full rounded-[30px]">
      <HeaderLeague selected={selected} setSelected={setSelected} />

      <div className="mt-12 mb-4">
       
          <Outlet context={[selected]} />
        
      </div>
    </div>
  );
};

export default PremierLeague;
