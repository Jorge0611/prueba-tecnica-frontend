import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { postData, putData } from "../../libs/utils";

const FormEmployees = ({ formId, id = "", data, forNew }) => {
  const { register, handleSubmit, getValues } = useForm();
  const navigate = useNavigate();

  const [salarioNeto, setSalarioNeto] = useState(
    data.salarioneto ? data.salarioneto : 0
  );

  function onSubmit(data) {
    data.salarioneto = salarioNeto;
    forNew
      ? postData("/api/employees", data).then(() =>
          navigate("../", { replace: true })
        )
      : putData(`/api/employees/${id}`, data).then(() =>
          navigate("../", { replace: true })
        );
  }

  return (
    <div>
      <div>
        <h2>Formulario Empleado</h2>
      </div>
      <div className="border rounded p-4">
        <form id={formId} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-3">
              <label htmlFor="nombres" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombres"
                defaultValue={data.nombres}
                {...register("nombres")}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="apellidos"
                defaultValue={data.apellidos}
                {...register("apellidos")}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="deptoid" className="form-label">
                Departamento
              </label>
              <input
                type="text"
                className="form-control"
                id="deptoid"
                defaultValue={data.deptoid}
                {...register("deptoid")}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="sexo" className="form-label">
                Sexo
              </label>
              <input
                type="text"
                className="form-control"
                id="sexo"
                defaultValue={data.sexo}
                {...register("sexo")}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cedula" className="form-label">
                Cedula
              </label>
              <input
                type="text"
                className="form-control"
                id="cedula"
                defaultValue={data.cedula}
                {...register("cedula")}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telcasa" className="form-label">
                Telefono Casa
              </label>
              <input
                type="text"
                className="form-control"
                id="telcasa"
                defaultValue={data.telcasa}
                {...register("telcasa")}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telmobil" className="form-label">
                Telefono Mobil
              </label>
              <input
                type="text"
                className="form-control"
                id="telmobil"
                defaultValue={data.telmobil}
                {...register("telmobil")}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="salariobase" className="form-label">
                Salario Base
              </label>
              <input
                type="number"
                className="form-control"
                id="salariobase"
                defaultValue={data.salariobase}
                {...register("salariobase")}
                onBlur={() =>
                  setSalarioNeto(
                    getValues("salariobase") * (getValues("descuento") / 100)
                  )
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="descuento" className="form-label">
                Descuento %
              </label>
              <input
                type="number"
                className="form-control"
                id="descuento"
                defaultValue={data.descuento}
                {...register("descuento")}
                onBlur={() =>
                  setSalarioNeto(
                    getValues("salariobase") * (getValues("descuento") / 100)
                  )
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="salarioneto" className="form-label">
                Salario Neto
              </label>
              <input
                type="text"
                className="form-control"
                id="salarioneto"
                value={salarioNeto}
                readOnly
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Link to="../" className="btn btn-danger me-2">
              Cancel
            </Link>
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEmployees;
