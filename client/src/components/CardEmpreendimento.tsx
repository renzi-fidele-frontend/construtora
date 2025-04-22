import { IEmpreendimento } from "@/app/types";
import verificarCorCategoria from "@/utils/verificarCorCategoria";
import { Building, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CardEmpreendimento = ({ empreendimento }: { empreendimento: IEmpreendimento }) => {
   return (
      <Link href="">
         <div className="relative border rounded-[9px] border-[#E4E4E7] transition hover:scale-101 bg-white overflow-hidden">
            <Image className="w-full bg-gray-300 h-[250px]" src={""} alt="" />
            <div className="flex p-[23px] gap-[10px]">
               <div className="">
                  <h3 className="text-lg font-bold">{empreendimento.titulo}</h3>
                  <p className="mb-2 mt-1">{empreendimento.endereco_completo}</p>
                  <div className="flex gap-3 *:flex *:gap-1 *:items-center *:text-[14px] ">
                     <p>
                        <Building size={17} className="text-primary" /> {empreendimento.destaques}
                     </p>
                     <p>
                        <MapPin size={17} className="text-primary" /> {empreendimento.estado}
                     </p>
                  </div>
               </div>
               <p
                  className={`px-[9px] py-1 ${verificarCorCategoria(
                     empreendimento.categoria
                  )} rounded-xl absolute top-2 start-2 text-white text-[12px] uppercase font-semibold`}
               >
                  {empreendimento.categoria}
               </p>
            </div>
         </div>
      </Link>
   );
};
export default CardEmpreendimento;
