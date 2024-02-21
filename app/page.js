"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("es"); // 'es' es el valor predeterminado

  return (
    <>
      <div style={{ position: "relative", height: "100vh" }}>
        <video
          autoPlay
          playsInline
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: -1,
            overflow: "hidden",
          }}
        >
          <source
            src="/img/coverr-coding-sequences-9906-1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div className="w-11/12 pt-20 flex flex-col md:flex-row justify-center gap-10 items-center mx-auto h-screen max-h-screen overflow-hidden">
          <div className="z-10 w-full">
            <h1 className="text-6xl text-white">Sebastian Miranda Eade</h1>
            <h2 className="text-4xl mt-5 text-white">
              Web Developer{" "}
              <span className="text-pink-600">
                &gt;<span className="text-pink-600 blink">_</span>
              </span>
            </h2>
          </div>
          <div className="z-10 flex flex-col mt-10 md:mr-20">
            <a
              href={
                language === "es"
                  ? "https://drive.google.com/file/d/17RQPkvE75h_11jl2_Yyy8hSag-qlb2gz/view?usp=drive_link"
                  : "https://drive.google.com/file/d/1kf32oIE_3eaozLlJEdvIaGTr3wib2eAp/view?usp=drive_link"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="bg-pink-600 rounded-2xl p-2 w-48"
              >
                Descargar CV
              </button>
            </a>

            <div className="mt-2 flex gap-3 m-auto">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-4 w-4"
                  name="language"
                  value="es"
                  defaultChecked
                  onChange={() => setLanguage("es")}
                />
                <Image
                  src="/img/spain-svgrepo-com-17e10524.png"
                  alt="Bandera Español"
                  className="pl-1 h-4"
                  height={20}
                  width={20}
                />
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-4 w-4"
                  name="language"
                  value="en"
                  onChange={() => setLanguage("en")}
                />
                <Image
                  src="/img/united-kingdom-svgrepo-com-60c725f4.png"
                  alt="Bandera English"
                  className="pl-1 h-4"
                  height={20}
                  width={20}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
