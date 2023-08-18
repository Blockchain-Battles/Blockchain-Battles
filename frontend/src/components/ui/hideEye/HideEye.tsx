import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";
type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};
const HideEye = (props: Props) => {
  return (
    <span
      onClick={() => {
        props.setShow((prev) => !prev);
      }}
    >
      {props.show && <AiFillEye />}
      {!props.show && <AiFillEyeInvisible />}
    </span>
  );
};
export default HideEye;
