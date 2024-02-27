// pages/projects.js o el nombre que corresponda a tu ruta de página
"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

// Función para obtener datos de la API
async function getData() {
  const res = await fetch(
    "https://sm-development-db-production.up.railway.app/api/proyectos?populate=*"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// Componente Projects
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then((data) => {
        // Transforma y almacena los datos en el estado
        const transformedProjects = data.data.map((project) => ({
          id: project.id,
          title: project.attributes.projectitle,
          description: project.attributes.projectdescription,
          images: project.attributes.projectimages.data.map(
            (img) => img.attributes.formats.large.url
          ),
          link: project.attributes.url,
        }));
        setProjects(transformedProjects);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // JSX del componente
  return (
    <main className="pt-20 pb-20 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mt-20 w-full bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
          Proyectos
        </h2>
        <div className="flex flex-col justify-center gap-6 lg:flex-row">
          {loading ? (
            <div className="flex justify-center items-center">
              <Image src={"/img/spinner.svg"} height={50} width={100}></Image>
            </div>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-800 mb-4">{project.description}</p>
                <div className="flex justify-center">
                  <div className="w-full h-[300px] max-w-lg">
                    <Carousel>
                      {project.images.map((image, index) => (
                        <div key={index}>
                          <Image
                            src={image}
                            alt={`Imagen ${index + 1}`}
                            width={300}
                            height={200}
                            className="w-full h-[300px] object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Ver proyecto
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Projects;
