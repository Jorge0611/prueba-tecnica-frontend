import useSWR from "swr";
import { useParams } from "react-router-dom";
import { fetcher } from "../../../libs/utils";
import FormEmployees from "../../../components/Forms/FormEmployees";

const EditEmployees = () => {
  const { id } = useParams();
  const { data, error } = useSWR(`/api/employees/${id}`, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <FormEmployees
      formId={"form-edit-employee"}
      id={id}
      data={data}
      forNew={false}
    />
  );
};

export default EditEmployees;
