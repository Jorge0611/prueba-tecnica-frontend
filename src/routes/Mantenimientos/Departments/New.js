import FormDepartment from "../../../components/Forms/FormDepartments";

const data = {
  DeptoName: "",
};

const NewDepartments = () => {
  return (
    <FormDepartment formId={"form-new-department"} data={data} forNew={true} />
  );
};

export default NewDepartments;
