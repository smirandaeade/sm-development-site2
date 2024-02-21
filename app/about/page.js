import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Portafolio S.M.E - Sobre mi",
  description: "Breve presentación del desarrollador",
};
const About = () => {
  return (
    <main className="pt-20 pb-20 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mt-20 max-w-4xl bg-white p-6 rounded-lg shadow">
        <div className="flex flex-col gap-5 md:flex-row items-center mb-20">
          <p className="text-gray-800 text-lg text-center md:text-left">
            Me llamo Sebastián Miranda, soy un Ingeniero Informático y
            Desarrollador Web chileno, especialista en React JS. Mi enfoque
            profesional se halla en la sinergia del desarrollo frontend y
            backend, con la ambición de evolucionar como un desarrollador full
            stack destacado.{" "}
          </p>
          <Image
            src="/img/desktop.webp"
            height={200}
            width={300}
            alt="Imagen descriptiva"
          />
        </div>
        <div className="flex flex-col gap-5 items-center mb-20 md:flex-row-reverse">
          <p className="text-gray-800 text-lg text-center md:text-right">
            Mi entusiasmo por la tecnología se traduce en un continuo afán de
            aprendizaje y mejora en el terreno del desarrollo web. Cada nuevo
            proyecto es visto como un escenario para desplegar mis habilidades y
            al mismo tiempo, absorber y adaptarme a las novedades y desafíos que
            emergen en el sector.{" "}
          </p>
          <Image
            src="/img/roadtech.webp"
            height={200}
            width={300}
            alt="Imagen descriptiva"
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row  mb-20 items-center ">
          <p className="text-gray-800 text-lg text-center md:text-left">
            Con fluidez en inglés, estoy equipado para participar en proyectos
            diversos y de índole multicultural. Mi aspiración es impactar
            positivamente en un ambiente de trabajo colaborativo y vibrante,
            donde pueda continuar mi crecimiento profesional y generar
            soluciones vanguardistas.{" "}
          </p>
          <Image
            src="/img/eartchtech.webp"
            height={200}
            width={300}
            alt="Imagen descriptiva"
          />
        </div>
        <div className="flex flex-col gap-5 items-center mb-20 md:flex-row-reverse">
          <p className="text-gray-800 text-lg text-center md:text-right">
            Invito a quienes busquen un profesional dedicado, con robustas
            competencias en desarrollo web y una visión enfocada en el avance
            del full stack, a conectarse conmigo.{" "}
          </p>
          <Image
            src="/img/websale.webp"
            height={200}
            width={300}
            alt="Imagen descriptiva"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
