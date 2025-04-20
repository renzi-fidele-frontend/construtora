import Slide from "@/components/Slide";
import fundo from "../../public/img/Fundo.jpg";
import Container from "@/components/Container";
import Tabs from "@/components/Tabs";
import { ICardArtigo, IDepoimento, IEmpreendimento } from "./global";
import CardEmpreendimento from "@/components/CardEmpreendimento";
import Image from "next/image";
import fotoSobre from "@/../public/img/home-sobre.jpg";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import { Heading, SubHeading } from "@/components/Typography";
import foto from "@/../public/img/home-sobre.jpg";
import fotoDepoimento from "@/../public/img/depoimento.jpg";
import CardArtigo from "@/components/CardArtigo";
import CardDepoimento from "@/components/CardDepoimento";

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
const artigos: ICardArtigo[] = [
   {
      data_de_publicacao: "13/Fex/2023",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      foto,
      titulo: "Crescimento exponencial: movimentação de carga aérea no Brasil",
   },
   {
      data_de_publicacao: "13/Fex/2023",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      foto,
      titulo: "Crescimento exponencial: movimentação de carga aérea no Brasil",
   },
   {
      data_de_publicacao: "13/Fex/2023",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      foto,
      titulo: "Crescimento exponencial: movimentação de carga aérea no Brasil",
   },
];
const depoimentos: IDepoimento[] = [
   {
      cliente: "Antonia e Maria",
      declaracao:
         "Tenho muita satisfação de ter adquirido este imóvel no Residencial Solar de Hamburgo. Me encantei com a geografia do local e o conceito da",
      empreendimento: "Ilha de Capri",
      foto: fotoDepoimento,
   },
   {
      cliente: "Antonia e Maria",
      declaracao:
         "Tenho muita satisfação de ter adquirido este imóvel no Residencial Solar de Hamburgo. Me encantei com a geografia do local e o conceito da",
      empreendimento: "Ilha de Capri",
      foto: fotoDepoimento,
   },
   {
      cliente: "Antonia e Maria",
      declaracao:
         "Tenho muita satisfação de ter adquirido este imóvel no Residencial Solar de Hamburgo. Me encantei com a geografia do local e o conceito da",
      empreendimento: "Ilha de Capri",
      foto: fotoDepoimento,
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
                     <Heading>Empreendimentos</Heading>
                     <SubHeading>Conheça os nossos imóveis e encontre seu novo lar</SubHeading>
                  </div>
                  <Tabs />
               </div>
               <div className="columns-3 gap-7 mt-6">
                  {empreendimentos.map((v, k) => (
                     <CardEmpreendimento empreendimento={v} key={k} />
                  ))}
               </div>
               <div className="flex justify-center mt-8">
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
                     <Heading>Imóveis com a qualidade Construtora</Heading>
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

         {/* Blog */}
         <div className="bg-foreground py-[75px] text-center">
            <Container>
               <Heading>Blog</Heading>
               <SubHeading customClass="mt-2 mb-10">Fique por dentro dos últimos artigos do blog da Construtora</SubHeading>
               <div className="columns-3 gap-[27px]">
                  {artigos.map((v, k) => (
                     <CardArtigo artigo={v} key={k} />
                  ))}
               </div>
               <div className="flex justify-center mt-12">
                  <Button>
                     Ver mais artigos <ArrowRight />
                  </Button>
               </div>
            </Container>
         </div>

         {/* Depoimentos */}
         <Container>
            <div className="py-[75px] text-center">
               <Heading>Depoimentos</Heading>
               <SubHeading customClass="mt-2 mb-5">Leia os depoimentos de quem realizou seus sonhos com a Construtora</SubHeading>
               <div className="mt-40">
                  {depoimentos.map((v, k) => (
                     <CardDepoimento depoimento={v} key={k} />
                  ))}
               </div>
            </div>
         </Container>
      </div>
   );
}
