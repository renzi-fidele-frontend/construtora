import { StaticImageData } from "next/image";

interface IEmpreendimento {
   titulo?: string;
   categoria?: string;
   descricao?: string;
   estado?: string;
   endereco_completo?: string;
   destaques?: string;
   data_entrega?: string;
   foto?: StaticImageData;
   thumbnail?: StaticImageData;
}
