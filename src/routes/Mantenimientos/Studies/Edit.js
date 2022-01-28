import useSWR from "swr";
import { useParams } from "react-router-dom";
import { fetcher } from "../../../libs/utils";
import FormStudies from "../../../components/Forms/FormStudies";

const EditDepartments = () => {
  const { id } = useParams();
  const { data, error } = useSWR(`/api/studies/${id}`, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <FormStudies
      formId={"form-edit-studie"}
      id={id}
      data={data}
      forNew={false}
    />
  );
};

export default EditDepartments;
