"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/api/proyectos?populate=*")
      .then((response) => response.json())
      .then((data) => {
        // Transforma y almacena los datos en el estado
        const transformedProjects = data.data.map((project) => ({
          id: project.id,
          title: project.attributes.projectitle,
          description: project.attributes.projectdescription,
          images: project.attributes.projectimages.data.map(
            (img) => img.attributes.formats.large.url
          ),
          link: `${project.attributes.url}`,
        }));
        setProjects(transformedProjects);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);

  return (
    <main className="pt-20 pb-20 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mt-20 max-w-4xl bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Proyectos</h2>
        {loading ? (
          <div className="flex justify-center items-center">
            <Image src={"/img/spinner.svg"} height={50} width={100}></Image>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-800 mb-4">{project.description}</p>
              <div className="flex justify-center mb-4">
                <div className="w-full max-w-lg">
                  <Carousel
                    showArrows={true}
                    showIndicators={false}
                    showStatus={false}
                    dynamicHeight={true}
                  >
                    {project.images.map((image, index) => (
                      <div key={index}>
                        <Image
                          src={image}
                          alt={`Imagen ${index + 1}`}
                          width={300}
                          height={200}
                          className="w-full h-auto rounded-lg mb-2"
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
    </main>
  );
};

export default Projects;
