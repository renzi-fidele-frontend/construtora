"use client";

import { TypeCategoria } from "@/app/types";
import { useState } from "react";

const Tabs = () => {
   const [ativo, setAtivo] = useState("");
   const links: (TypeCategoria | "Todos")[] = ["Todos", "Lançamento", "Pronto para morar", "Em Construção"];
   return (
      <nav className="flex items-center gap-2 pt-2 *:px-[18] *:py-[5px] *:rounded *:hover:cursor-pointer *:font-semibold *:hover:bg-white *:transition-all">
         {links.map((v, k) => (
            <p className={v === ativo ? "bg-white shadow text-black" : "text-gray-500"} onClick={() => setAtivo(v)} key={k}>
               {v}
            </p>
         ))}
      </nav>
   );
};
export default Tabs;
