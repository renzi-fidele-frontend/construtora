"use client";

import { useState } from "react";

const Tabs = () => {
   const [ativo, setAtivo] = useState("");
   const links = ["Todos", "Lançamentos", "Obras", "Prontos"];
   return (
      <nav className="flex items-center gap-2 pt-2 *:px-[18] *:py-[5px] *:rounded *:hover:cursor-pointer *:hover:bg-white">
         {links.map((v, k) => (
            <p className={v === ativo ? "bg-white" : ""} onClick={() => setAtivo(v)} key={k}>
               {v}
            </p>
         ))}
      </nav>
   );
};
export default Tabs;
