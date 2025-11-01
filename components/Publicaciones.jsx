import { getPublications } from "@/api/api";

async function Publicaciones() {
  const publications = await getPublications();
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