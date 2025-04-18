import Slide from "@/components/Slide";
import fundo from "../../public/img/Fundo.jpg";
import Container from "@/components/Container";
import Tabs from "@/components/Tabs";

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
               endereco: "Tijuca, Rio de Janeiro",
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
            </Container>
         </div>
      </div>
   );
}
