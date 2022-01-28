import { Link } from "react-router-dom";
import useSWR, { mutate } from "swr";
import { deleteData } from "../../../libs/utils";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Employees = () => {
  const { data, error } = useSWR("/api/employees", fetcher);

  function handleDelete(id) {
    if (window.confirm("Estas seguro que quieres eliminar?")) {
      deleteData(`/api/employees/${id}`).then(() => mutate("/api/employees"));
    }
  }

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <Link className="btn btn-primary" to="./new">
          <i class="bi bi-plus-lg me-2" />
          Nuevo empleado
        </Link>
      </div>
      <div className="mt-4 p-2 border">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Departamento</th>
              <th scope="col">Sexo</th>
              <th scope="col">Cedula</th>
              <th scope="col">Direccion</th>
              <th scope="col">Tel. Casa</th>
              <th scope="col">Tel. Mobil</th>
              <th scope="col">Salario base</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, key) => (
              <tr key={`Depto-row-${key}`}>
                <th scope="row">{value.id}</th>
                <td>{value.nombres}</td>
                <td>{value.apellidos}</td>
                <td>{value.deptoid}</td>
                <td>{value.sexo}</td>
                <td>{value.cedula}</td>
                <td>{value.direccion}</td>
                <td>{value.telcasa}</td>
                <td>{value.telmobil}</td>
                <td>{value.salariobase}</td>
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

export default Employees;
