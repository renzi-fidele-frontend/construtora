import Slide from "@/components/Slide";
import fundo from "../../public/img/Fundo.jpg";
import Container from "@/components/Container";
import Tabs from "@/components/Tabs";
import { IEmpreendimento } from "./global";
import CardEmpreendimento from "@/components/CardEmpreendimento";

const empreendimentos: IEmpreendimento[] = [
   {
      foto: fundo,
      categoria: "Pronto para morar",
      data_entrega: "Novembro de 2022",
      descricao: "Seu novo lar com conforto e elegância no melhor bairro da cidade",
      destaques: "2 e 3 quartos",
      endereco_completo: "Bairro Areias, Tijucas",
      titulo: "Villa di Napoli",
      estado: "Santa Catarina"
   },
   {
      foto: fundo,
      categoria: "Pronto para morar",
      data_entrega: "Novembro de 2022",
      descricao: "Seu novo lar com conforto e elegância no melhor bairro da cidade",
      destaques: "2 e 3 quartos",
      endereco_completo: "Bairro Areias, Tijucas",
      titulo: "Villa di Napoli",
      estado: "Santa Catarina"
   },
   {
      foto: fundo,
      categoria: "Pronto para morar",
      data_entrega: "Novembro de 2022",
      descricao: "Seu novo lar com conforto e elegância no melhor bairro da cidade",
      destaques: "2 e 3 quartos",
      endereco_completo: "Bairro Areias, Tijucas",
      titulo: "Villa di Napoli",
      estado: "Santa Catarina"
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
            </Container>
         </div>
      </div>
   );
}
