import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const EmployeesByDate = () => {
  const { data, error } = useSWR("/api/employees", fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  function sortItems(arr) {
    return arr.sort((a, b) => {
      return a.created_at - b.created_at;
    });
  }

  return (
    <div>
      <div>
        <button
          className="btn btn-primary d-print-none"
          onClick={() => window.print()}
        >
          Imprimir
        </button>
      </div>
      <div className="p-2">
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
              <th scope="col">Descuento %</th>
              <th scope="col">Salario Neto</th>
              <th scope="col">Fecha Creacion</th>
            </tr>
          </thead>
          <tbody>
            {sortItems(data).map((value, key) => (
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
                <td>{value.descuento}</td>
                <td>{value.salarioneto}</td>
                <td>
                  {value.created_at ? value.created_at.slice(0, 10) : "No date"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesByDate;
