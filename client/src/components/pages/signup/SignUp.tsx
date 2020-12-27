import React from "react";
import SignUpForm from "./SignUpForm";
import AcceptProfile from "./AcceptProfile";
import RegisterProvider, {
  registerContext,
} from "../../../providers/RegisterProvider";

interface Props {}

const SignUp = (props: Props) => {
  return (
    <div className="auth-page">
      <RegisterProvider>
        <Inner />
      </RegisterProvider>
    </div>
  );
};

const Inner = () => {
  const { person } = React.useContext(registerContext);
  return (
    <>
      {console.log(person)}
      {person === null ? <SignUpForm /> : <AcceptProfile />}
    </>
  );
};

export default SignUp;
