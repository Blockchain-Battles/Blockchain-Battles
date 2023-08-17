import { useFormik } from "formik";
import * as yup from "yup";

interface Props {
  onSubmit?: (value: any) => void;
  initialValues?: object;
}
const useLoginFormik = ({ onSubmit = () => {}, initialValues = {} }: Props) => {
  const validationSchema = yup.object().shape({
    username: yup.string().required("username is required!"),
    password: yup.string().required("password is required!"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return { formik };
};
export default useLoginFormik