import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
   return (
      <button className="px-[23px] py-[10px] w-fit border border-gray-600 bg-white rounded-[5px] text-lg font-semibold flex gap-2 items-center hover:cursor-pointer transition-all hover:scale-105 ">
         {children}
      </button>
   );
};
export default Button;
