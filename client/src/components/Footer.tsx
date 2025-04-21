import Image from "next/image";
import Container from "./Container";
import logo from "@/../public/img/logo.jpg";
import { ChevronsRight, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
   return (
      <div className="bg-foreground py-[75px] text-start">
         <Container>
            <div className="flex items-stretch justify-stretch gap-[40]">
               {/* Coluna 1 */}
               <div className="flex flex-col gap-[25] text-start **:text-gray-600 basis-[50%]">
                  <Image src={logo} alt="" />
                  <p className="">Há mais de 20 anos construindo sonhos e transformando vidas com empreendimentos de qualidade.</p>
                  <div className="flex items-center gap-[15]">
                     <Instagram size={26} color="#4a5565" />
                     <Facebook size={26} color="#4a5565" />
                     <Youtube size={35} color="#4a5565" />
                  </div>
               </div>
               {/* Coluna 2 */}
               <div className="flex flex-col gap-[20] text-start basis-[25%]">
                  <h6 className="font-bold text-[20px]">Institucional</h6>
                  <nav className="flex flex-col gap-[10] *:flex *:items-center *:gap-[10] *:text-gray-500 *:font-semibold">
                     <Link href="">
                        <ChevronsRight size={15} /> Quem somos
                     </Link>
                     <Link href="">
                        <ChevronsRight size={15} /> Empreendimentos
                     </Link>
                     <Link href="">
                        <ChevronsRight size={15} /> Blog
                     </Link>
                     <Link href="">
                        <ChevronsRight size={15} /> Contato
                     </Link>
                  </nav>
               </div>
               {/* Coluna 3 */}
               <div className="flex flex-col gap-[20] text-start basis-[25%]">
                  <h6 className="font-bold text-[20px]">Contato</h6>
                  <div className="flex flex-col gap-[15] *:flex *:items-center *:gap-[10] *:text-gray-500">
                     <div>
                        <MapPin size={40} className="text-primary me-[-2]" />
                        <p>Av. das Américas, 3500, Barra da Tijuca, Rio de Janeiro - RJ</p>
                     </div>
                     <div>
                        <Phone className="text-primary" />
                        <p>(21) 3030-5050</p>
                     </div>
                     <div>
                        <Mail className="text-primary" />
                        <p>contato@amcconstrutora.com.br</p>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};
export default Footer;
