import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/logo.jpg";
import Container from "./Container";

const Header = () => {
   return (
      <header className="py-[10px] bg-[#2E2D32] text-white">
         <Container>
            <div className="flex items-center justify-between">
               <Image src={logo} alt="Logo da construtora" />
               <nav className="d-flex gap-[35px] text-[19px] font-semibold flex items-center justify-between">
                  <Link href="/">Início</Link>
                  <Link href="/">Quem somos</Link>
                  <Link href="/">Empreendimentos</Link>
                  <Link href="/">Testemunhos</Link>
                  <Link href="/">Blog</Link>
                  <Link href="/">Contato</Link>
               </nav>
            </div>
         </Container>
      </header>
   );
};
export default Header;
