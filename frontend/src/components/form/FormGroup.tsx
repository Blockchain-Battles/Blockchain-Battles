type Props = {
  formik?: any;
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
};
const FormGroup = (props: Props) => {
  return (
    <div className="my-4">
      {props.label && <label className="px-2 pb-1 text-md inline-block" htmlFor={props.name}>{props.label}</label>}
      <input
        name={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
        onChange={props.formik?.handleChange}
        className="w-full rounded-[7px] p-2 focus-visible:outline-none"
      />
      {props.formik?.errors[props.name] && (
        <p className=" text-deep-orange-500">
          {props.formik?.errors[props.name]}
        </p>
      )}
    </div>
  );
};
export default FormGroup;
