"use client";

import { createPublication } from "@/api/api";
import { redirect } from "next/navigation";
import { useState } from "react";
function CrearPublicacion() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [fecha, setFecha] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const publication = { titulo, contenido, fecha };
    const response = await createPublication(publication);
    if (response.success) {
      redirect("/");
    } else {
      console.error(response.error);
    }
  };
  return (
    <>
      <h1>Crear Publicación</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Título</label>
        <input type="text" name="titulo" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <label htmlFor="contenido">Contenido</label>
        <input type="text" name="contenido" placeholder="Contenido" value={contenido} onChange={(e) => setContenido(e.target.value)} />
        <label htmlFor="fecha">Fecha</label>
        <input type="date" name="fecha" placeholder="Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <button type="submit">Crear</button>
      </form>
    </>
  );
}

export default CrearPublicacion;
