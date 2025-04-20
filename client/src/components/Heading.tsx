import { ReactNode } from "react";

const Heading = ({ children, customClass }: { children: ReactNode; customClass?: string }) => {
   return <h2 className={"text-[35px] font-bold " + customClass}>{children}</h2>;
};
export default Heading;
