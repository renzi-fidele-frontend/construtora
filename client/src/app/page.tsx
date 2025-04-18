import Slide from "@/components/Slide";
import fundo from "../../public/img/Fundo.jpg";

export default function Home() {
   return (
      <div className="">
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
      </div>
   );
}
