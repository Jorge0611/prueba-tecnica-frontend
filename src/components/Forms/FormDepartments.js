import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postData, putData } from "../../libs/utils";

const FormDepartment = ({ formId, id = "", data, forNew }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function onSubmit(data) {
    forNew
      ? postData("/api/departments", data).then(() =>
          navigate("../", { replace: true })
        )
      : putData(`/api/departments/${id}`, data).then(() =>
          navigate("../", { replace: true })
        );
  }

  return (
    <div>
      <div>
        <h2>Formulario Departamento</h2>
      </div>
      <div className="border rounded p-4">
        <form id={formId} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-3">
              <label htmlFor="deptoName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="deptoName"
                defaultValue={data.DeptoName}
                {...register("DeptoName")}
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

export default FormDepartment;
