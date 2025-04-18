import Image, { StaticImageData } from "next/image";
import Container from "./Container";
import { Building, Calendar, MapPin } from "lucide-react";
import Foto from "../../public/img/Fundo.jpg";

interface ISlide {
   empreendimento: {
      titulo: string;
      categoria: string;
      descricao: string;
      endereco: string;
      destaques: string;
      data_entrega: string;
      foto: StaticImageData;
   };
}
const Slide = ({ empreendimento }: ISlide) => {
   return (
      <div className="relative">
         <Image src={Foto} alt="" />
         <div id="banner" className="absolute inset-0"></div>
         <Container>
            <div className="relative w-1/2">
               <div className="flex flex-col gap-[45px] text-white bottom-[6rem] absolute z-3">
                  <div className="flex flex-col gap-[15px]">
                     <span className="bg-primary px-2 py-[3px] rounded-xl w-fit uppercase text-[14px] font-semibold">
                        {empreendimento.categoria}
                     </span>
                     <h1 className="font-bold text-7xl">{empreendimento.titulo}</h1>
                     <p className="font-medium text-xl">{empreendimento.descricao}</p>
                  </div>
                  <button className="bg-primary px-[30px] py-[9px] text-[18px] font-semibold rounded-lg w-fit">Conheça o empreendimento</button>
                  <ul className="flex gap-[27px] *:flex *:items-center *:gap-2 text-lg ">
                     <li>
                        <MapPin className="text-primary" />
                        <p>Tijuca, Rio de Janeiro</p>
                     </li>
                     <li>
                        <Building className="text-primary" />
                        <p>2 e 3 quartos</p>
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
