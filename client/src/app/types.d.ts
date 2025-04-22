import { StaticImageData } from "next/image";

interface IEmpreendimento {
   titulo?: string;
   categoria?: TypeCategoria;
   descricao?: string;
   estado?: string;
   endereco_completo?: string;
   destaques?: string;
   data_entrega?: string;
   foto?: StaticImageData;
   thumbnail?: StaticImageData;
}

interface ICardArtigo {
   foto: StaticImageData;
   data_de_publicacao: string;
   titulo: string;
   descricao: string;
}

interface IArtigo extends ICardArtigo {
   sabao: number;
}

interface IDepoimento {
   declaracao: string;
   cliente: string;
   empreendimento: string;
   foto: StaticImageData;
}

type TypeCategoria = "Em Construção" | "Lançamento" | "Pronto para morar";
