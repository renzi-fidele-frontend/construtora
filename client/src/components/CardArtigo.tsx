import { ICardArtigo } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

const CardArtigo = ({ artigo }: { artigo: ICardArtigo }) => {
   return (
      <div className="rounded-lg bg-white">
         <Image className="w-full h-[210px] object-cover rounded-t-lg" src={artigo.foto} alt="" />
         <div className="flex flex-col text-start gap-[10px] px-[25px] py-[25px]">
            <p className="text-gray-500 text-[15px]">{artigo.data_de_publicacao}</p>
            <h6 className=" line-clamp-2 font-bold text-[19px]">{artigo.titulo}</h6>
            <p className=" line-clamp-3 text-gray-500">{artigo.descricao}</p>
            <Link href="" className="text-primary font-bold hover:underline">
               Ler mais
            </Link>
         </div>
      </div>
   );
};
export default CardArtigo;
