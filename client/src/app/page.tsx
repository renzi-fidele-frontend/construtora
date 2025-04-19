import Slide from "@/components/Slide";
import fundo from "../../public/img/Fundo.jpg";
import Container from "@/components/Container";
import Tabs from "@/components/Tabs";
import { IEmpreendimento } from "./global";
import CardEmpreendimento from "@/components/CardEmpreendimento";
import Image from "next/image";
import fotoSobre from "@/../public/img/home-sobre.jpg";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";

const empreendimentos: IEmpreendimento[] = [
   {
      foto: fundo,
      categoria: "Pronto para morar",
      data_entrega: "Novembro de 2022",
      descricao: "Seu novo lar com conforto e elegância no melhor bairro da cidade",
      destaques: "2 e 3 quartos",
      endereco_completo: "Bairro Areias, Tijucas",
      titulo: "Villa di Napoli",
      estado: "Santa Catarina",
   },
   {
      foto: fundo,
      categoria: "Pronto para morar",
      data_entrega: "Novembro de 2022",
      descricao: "Seu novo lar com conforto e elegância no melhor bairro da cidade",
      destaques: "2 e 3 quartos",
      endereco_completo: "Bairro Areias, Tijucas",
      titulo: "Villa di Napoli",
      estado: "Santa Catarina",
   },
   {
      foto: fundo,
      categoria: "Pronto para morar",
      data_entrega: "Novembro de 2022",
      descricao: "Seu novo lar com conforto e elegância no melhor bairro da cidade",
      destaques: "2 e 3 quartos",
      endereco_completo: "Bairro Areias, Tijucas",
      titulo: "Villa di Napoli",
      estado: "Santa Catarina",
   },
];

export default function Home() {
   return (
      <div className="Home ">
         {/* Banner Topo */}
         <Slide
            empreendimento={{
               foto: fundo,
               categoria: "Pronto para morar",
               data_entrega: "Novembro de 2022",
               descricao: "Seu novo lar com conforto e elegância no melhor bairro da cidade",
               destaques: "2 e 3 quartos",
               endereco_completo: "Tijuca, Rio de Janeiro",
               titulo: "Villa di Napoli",
            }}
         />

         {/* Empreendimentos */}
         <div className="py-[75px] bg-foreground">
            <Container>
               <div className="flex justify-between">
                  <div>
                     <h2 className="text-[35px] font-bold">Empreendimentos</h2>
                     <p className="text-[18px]">Conheça os nossos imóveis e encontre seu novo lar</p>
                  </div>
                  <Tabs />
               </div>
               <div className="columns-3 gap-7 mt-6">
                  {empreendimentos.map((v, k) => (
                     <CardEmpreendimento empreendimento={v} key={k} />
                  ))}
               </div>
               <div className="flex justify-center mt-7">
                  <Button>
                     Ver mais empreendimentos <ArrowRight />
                  </Button>
               </div>
            </Container>
         </div>

         {/* Cta Sobre */}
         <Container>
            <div className="pt-[75px] pb-[85px] flex flex-nowrap ">
               <div className="basis-[45%] ">
                  <div id="prettyBox" className="flex flex-col gap-[26px] px-[50px] py-[70px] rounded-lg">
                     <h2 className="text-[35px] font-bold">Imóveis com a qualidade Construtora</h2>
                     <p className="text-[19px] font-medium">
                        Somos uma empresa de construção civil pesada. Especializados em saneamento, pavimentação, redes enterradas, obras de arte
                        especial, estruturas de concreto armado, urbanização, estruturas metálicas e tubulações.
                     </p>
                     <button className="px-[23px] py-[10px] w-fit bg-black text-white rounded-[5px]">Saiba mais</button>
                  </div>
               </div>
               <div className="basis-[58%] pt-[56px]">
                  <Image className="relative start-[-20px] end-0 w-full" src={fotoSobre} alt="" />
               </div>
            </div>
         </Container>
      </div>
   );
}
