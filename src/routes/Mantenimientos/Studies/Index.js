import { Link } from "react-router-dom";
import useSWR, { mutate } from "swr";
import { deleteData } from "../../../libs/utils";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Studies = () => {
  const { data, error } = useSWR("/api/studies", fetcher);

  function handleDelete(id) {
    if (window.confirm("Estas seguro que quieres eliminar?")) {
      deleteData(`/api/studies/${id}`).then(() => mutate("/api/studies"));
    }
  }

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <Link className="btn btn-primary" to="./new">
          <i className="bi bi-plus-lg me-2" />
          Nuevo estudio
        </Link>
      </div>
      <div className="mt-4 p-2 border">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Empleado</th>
              <th scope="col">Nombre Estudio</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, key) => (
              <tr key={`Depto-row-${key}`}>
                <th scope="row">{value.id}</th>
                <td>{value.employeeid}</td>
                <td>{value.studiename}</td>
                <td>
                  <Link
                    to={`./edit/${value.id}`}
                    className="btn btn-warning me-2"
                  >
                    <i className="bi bi-pencil-square" />
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(value.id)}
                  >
                    <i className="bi bi-trash" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Studies;
