import { ReactNode } from "react";

export const Heading = ({ children, customClass }: { children: ReactNode; customClass?: string }) => {
   return <h2 className={"text-[35px] font-bold " + customClass}>{children}</h2>;
};

export const SubHeading = ({ children, customClass }: { children: ReactNode; customClass?: string }) => {
   return <p className={"text-[18px] font-medium " + customClass}>{children}</p>;
};
