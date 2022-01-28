import FormEmployees from "../../../components/Forms/FormEmployees";

const data = {
  nombres: "",
  apellidos: "",
  deptoid: 1,
  sexo: "",
  cedula: "",
  direccion: "",
  telcasa: "",
  telmobil: "",
  salariobase: 0,
  descuento: 0,
};

const NewEmployees = () => {
  return (
    <FormEmployees formId={"form-new-employee"} data={data} forNew={true} />
  );
};

export default NewEmployees;
