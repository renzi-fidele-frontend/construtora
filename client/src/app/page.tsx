"use client";
import Slide from "@/components/Slide";
import fundo from "../../public/img/Fundo.jpg";
import Container from "@/components/Container";
import Tabs from "@/components/Tabs";
import { ICardArtigo, IDepoimento, IEmpreendimento } from "./global";
import CardEmpreendimento from "@/components/CardEmpreendimento";
import Image from "next/image";
import fotoSobre from "@/../public/img/construtora-home.webp";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import { Heading, SubHeading } from "@/components/Typography";
import foto from "@/../public/img/home-sobre.jpg";
import fotoDepoimento from "@/../public/img/depoimento.jpg";
import CardArtigo from "@/components/CardArtigo";
import CardDepoimento from "@/components/CardDepoimento";
// SwiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

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
      categoria: "Lançamento",
      data_entrega: "Março de 2024",
      descricao: "Um empreendimento moderno e sustentável para sua família",
      destaques: "1, 2 e 3 quartos",
      endereco_completo: "Centro, Florianópolis",
      titulo: "Residencial Bella Vista",
      estado: "Santa Catarina",
   },
   {
      foto: fundo,
      categoria: "Em construção",
      data_entrega: "Agosto de 2023",
      descricao: "Conforto e sofisticação em um dos bairros mais nobres da cidade",
      destaques: "Apartamentos de alto padrão",
      endereco_completo: "Jurerê Internacional, Florianópolis",
      titulo: "Jurerê Exclusive",
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
      <div className="Home">
         {/* Banner Topo */}
         <Swiper modules={[Navigation, Pagination, Autoplay, EffectFade]} effect="fade" autoplay={{delay: 5000}} navigation={true} pagination={true}>
            {empreendimentos.map((v, k) => (
               <SwiperSlide key={k}>
                  <Slide empreendimento={v} />
               </SwiperSlide>
            ))}
         </Swiper>

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
               <div className="basis-[45%]">
                  <div id="prettyBox" className="flex flex-col gap-[26px] px-[50px] py-[70px] rounded-lg shadow-2xl">
                     <Heading>Imóveis com a qualidade Construtora</Heading>
                     <p className="text-[19px] font-medium">
                        Somos uma empresa de construção civil pesada. Especializados em saneamento, pavimentação, redes enterradas, obras de arte
                        especial, estruturas de concreto armado, urbanização, estruturas metálicas e tubulações.
                     </p>
                     <Button>Conheça a construtora</Button>
                  </div>
               </div>
               <div className="basis-[58%] pt-[56px]">
                  <Image className="start-[-20px]  w-full rounded-lg" src={fotoSobre} alt="" />
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
            <div className="pt-[75px] pb-[100px] text-center">
               <Heading>Depoimentos</Heading>
               <SubHeading customClass="mt-2 mb-5">Leia os depoimentos de quem realizou seus sonhos com a Construtora</SubHeading>
               <div className="mt-10">
                  <Swiper navigation={true} modules={[Navigation]} spaceBetween={30} slidesPerView={3}>
                     {depoimentos.map((v, k) => (
                        <SwiperSlide key={k}>
                           <CardDepoimento depoimento={v} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </Container>
      </div>
   );
}
