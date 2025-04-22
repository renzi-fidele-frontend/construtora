import { TypeCategoria } from "@/app/types";

export default function verificarCorCategoria(categoria: TypeCategoria): color {
   switch (categoria) {
      case "Em Construção":
         return "#B37631";
      case "Lançamento":
         return "#5231B3";
      case "Pronto para morar":
         return "";
      default:
         return null;
   }
}
