import React from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../../../service/Auth";
import { registerContext } from "../../../providers/RegisterProvider";
import { AuthContext } from "../../../providers/AuthProvide";

interface Props {}

const AcceptProfile = (props: Props) => {
  const [factor, setFactor] = React.useState<string>("");
  const history = useHistory();
  const { person } = React.useContext(registerContext);
  const AuthContet = React.useContext(AuthContext);

  const verify = () => {
    if (person !== null) {
      AuthService.active(person.id, factor).then((res) => {
        AuthContet.login(person.id, undefined);
        history.push("/");
      });
    }
  };

  return (
    <div>
      <label htmlFor="factor">Введите свой код</label>
      <input
        id="factor"
        placeholder="Enter your code"
        value={factor}
        onChange={(e) => setFactor(e.target.value)}
      />
      <button onClick={verify}>Отправить</button>
      <button onClick={verify}>Отправить</button>
    </div>
  );
};

export default AcceptProfile;
