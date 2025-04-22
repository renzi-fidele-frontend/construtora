import Image from "next/image";
import Container from "./Container";
import { Building, Calendar, MapPin } from "lucide-react";
import Foto from "../../public/img/Fundo.jpg";
import { IEmpreendimento } from "@/app/types";
import verificarCorCategoria from "@/utils/verificarCorCategoria";

const Slide = ({ empreendimento }: { empreendimento: IEmpreendimento }) => {
   return (
      <div className="relative">
         <Image src={Foto} alt="" />
         <div id="banner" className="absolute inset-0 opacity-95"></div>
         <Container>
            <div className="relative w-[70%]">
               <div className="flex flex-col gap-[45px] text-white bottom-[6rem] absolute z-3">
                  <div className="flex flex-col gap-[15px]">
                     <span
                        className={`${verificarCorCategoria(
                           empreendimento.categoria
                        )} px-2 py-[3px] rounded-xl w-fit uppercase text-[14px] font-semibold`}
                     >
                        {empreendimento.categoria}
                     </span>
                     <h1 className="font-bold text-7xl">{empreendimento.titulo}</h1>
                     <p className="font-medium text-xl">{empreendimento.descricao}</p>
                  </div>
                  <button className="bg-primary px-[30px] py-[9px] text-[18px] font-semibold rounded-lg w-fit shadow-2xl shadow-emerald-900">
                     Conheça o empreendimento
                  </button>
                  <ul className="flex gap-[27px] *:flex *:items-center *:gap-2 text-lg ">
                     <li>
                        <MapPin className="text-primary" />
                        <p>{empreendimento.endereco_completo}</p>
                     </li>
                     <li>
                        <Building className="text-primary" />
                        <p>{empreendimento.destaques}</p>
                     </li>
                     <li>
                        <Calendar className="text-primary" />
                        <p>Entregue em 2025</p>
                     </li>
                  </ul>
               </div>
            </div>
         </Container>
      </div>
   );
};
export default Slide;
