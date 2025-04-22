import { IDepoimento } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

const CardDepoimento = ({ depoimento }: { depoimento: IDepoimento }) => {
   return (
      <div id="cardDepoimento" className="border border-gray-300 text-start">
         <Image src={depoimento.foto} alt="" />
         <div className="px-[25] py-[23] flex flex-col gap-[10]">
            <p className="line-clamp-2 text-gray-500">{depoimento.declaracao}</p>
            <h6 className="text-[20px] font-bold">{depoimento.cliente}</h6>
            <p className="text-[15px] text-gray-500">{depoimento.empreendimento}</p>
            <Link className="text-primary font-bold" href="">
               Ler depoimento completo
            </Link>
         </div>
      </div>
   );
};
export default CardDepoimento;
