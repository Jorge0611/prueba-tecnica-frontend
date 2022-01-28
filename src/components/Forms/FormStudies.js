import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postData, putData } from "../../libs/utils";

const FormStudies = ({ formId, id = "", data, forNew }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function onSubmit(data) {
    forNew
      ? postData("/api/studies", data).then(() =>
          navigate("../", { replace: true })
        )
      : putData(`/api/studies/${id}`, data).then(() =>
          navigate("../", { replace: true })
        );
  }

  return (
    <div>
      <div>
        <h2>Formulario Estudio</h2>
      </div>
      <div className="border rounded p-4">
        <form id={formId} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-3">
              <label htmlFor="employeeid" className="form-label">
                Empleado
              </label>
              <input
                type="text"
                className="form-control"
                id="employeeid"
                defaultValue={data.employeeid}
                {...register("employeeid")}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="studiename" className="form-label">
                Nombre Estudio
              </label>
              <input
                type="text"
                className="form-control"
                id="studiename"
                defaultValue={data.studiename}
                {...register("studiename")}
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

export default FormStudies;
