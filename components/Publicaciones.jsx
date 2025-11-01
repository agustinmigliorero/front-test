import { getPublications } from "@/api/api";

async function Publicaciones() {
  let publications = [];
  let error = null;
  
  try {
    publications = await getPublications();
  } catch (err) {
    error = err.message || "Error al cargar las publicaciones";
    console.error("Error fetching publications:", err);
  }

  if (error) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md w-full text-black">
        <h1 className="text-2xl font-bold mb-4">Publicaciones</h1>
        <p className="text-red-500">Error: {error}</p>
        <p className="text-gray-500 text-sm mt-2">No se pudo conectar con el servidor de publicaciones.</p>
      </div>
    );
  }

  if (!publications || publications.length === 0) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md w-full text-black">
        <h1 className="text-2xl font-bold mb-4">Publicaciones</h1>
        <p className="text-gray-500">No hay publicaciones disponibles.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full text-black">
      <h1 className="text-2xl font-bold mb-4">Publicaciones</h1>
      <ul className="list-disc list-inside decoration-none">
        {publications.map((publication) => (
          <li key={publication._id} className="mb-2 text-black text-sm font-medium decoration-none">
            <h2 className="text-lg font-bold decoration-none">Titulo: <span className="font-normal">{publication.titulo}</span></h2>
            <p className="text-gray-600 decoration-none">Contenido: <span className="font-normal">{publication.contenido}</span></p>
            <p className="text-gray-600 decoration-none">Fecha: <span className="font-normal">{new Date(publication.fecha).toLocaleDateString("es-ES")}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Publicaciones;