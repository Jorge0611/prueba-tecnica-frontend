import FormStudies from "../../../components/Forms/FormStudies";

const data = {
  employeeid: "",
  studiename: "",
};

const NewDepartments = () => {
  return <FormStudies formId={"form-new-studie"} data={data} forNew={true} />;
};

export default NewDepartments;
