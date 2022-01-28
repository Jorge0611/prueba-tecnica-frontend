import useSWR from "swr";
import { useParams } from "react-router-dom";
import FormDepartment from "../../../components/Forms/FormDepartments";
import { fetcher } from "../../../libs/utils";

const EditDepartments = () => {
  const { id } = useParams();
  const { data, error } = useSWR(`/api/departments/${id}`, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <FormDepartment
      formId={"form-edit-department"}
      id={id}
      data={data}
      forNew={false}
    />
  );
};

export default EditDepartments;
