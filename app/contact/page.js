"use client";
import React from "react";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("default_service", "template_5vjeayl", e.target, "jZ-g2qOIFPr_8rkPg")
      .then(
        (result) => {
          Swal.fire({
            title: 'Enviado!',
            text: 'Tu mensaje ha sido enviado exitosamente.',
            icon: 'success',
            confirmButtonText: 'Cerrar'
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Hubo un problema al enviar tu mensaje.',
            icon: 'error',
            confirmButtonText: 'Cerrar'
          });
        }
      );
  };

  return (
    <main className="pt-20 pb-20 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mt-20 max-w-4xl bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contacto</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <label htmlFor="name" className="block text-gray-800">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="email" className="block text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-800">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
