import React from "react";
import { IUserExtend } from "../interfaces";

// export const registerContext = React.createContext({
//   person: {} as IUserExtend | null,
//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   setPerson: (person: IUserExtend | null) => {},
// });

type registerContextType = {
  person: IUserExtend | null;
  setPerson: (_person: IUserExtend | null) => void;
};

export const registerContext = React.createContext<registerContextType>({
  person: null,
  setPerson: (person) => {
    person;
  },
});

const RegisterProvider: React.FC = (props) => {
  const [person, setPerson] = React.useState<IUserExtend | null>(null);

  const changePerson = (_person: IUserExtend | null) => {
    console.log("asddweds", _person);
    setPerson(_person);
  };

  React.useEffect(() => {
    person;
  }, [person]);

  return (
    <registerContext.Provider
      value={{
        person: person,
        setPerson: changePerson,
      }}
    >
      {props.children}
    </registerContext.Provider>
  );
};

export default RegisterProvider;
