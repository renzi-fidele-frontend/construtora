import { TypeCategoria } from "@/app/types";

export default function verificarCorCategoria(categoria?: TypeCategoria) {
   switch (categoria) {
      case "Em Construção":
         return "bg-[#317C08]";
      case "Lançamento":
         return "bg-[#5231B3]";
      case "Pronto para morar":
         return "bg-[#B37631]";
      default:
         return null;
   }
}
