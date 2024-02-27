import { Inter } from "next/font/google";
import "./globals.css"
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio S.M.E",
  description:
    "Bienvenido a mi portafolio personal: una vitrina digital donde exploro y exhibo mi pasión por el desarrollo web y la tecnología. Aquí encontrarás una cuidadosa selección de mis proyectos más significativos, cada uno reflejando mi habilidad para crear soluciones innovadoras y efectivas. Mi portafolio es un testimonio de mi compromiso con la excelencia en el desarrollo y diseño de software. Sumérgete y descubre cómo combino creatividad, técnica y funcionalidad para transformar ideas en experiencias digitales memorables.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  h-screen flex flex-col min-[100vh]`}
      >
        <Header></Header>
        <main className="content">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}