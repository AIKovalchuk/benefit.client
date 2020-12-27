import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";

import "./sigupform.scss";
import { IUser, IUser2 } from "../../../interfaces";
import AuthService from "../../../service/Auth";
import { registerContext } from "../../../providers/RegisterProvider";

interface Props {}

const SignUpScheme = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Слишком короткий!")
    .max(30, "Слишком длинный!")
    .required("Обязательно заполните!"),
  lastName: Yup.string()
    .min(2, "Слишком короткий!")
    .max(30, "Слишком длинный!")
    .required("Обязательно заполните!"),
  middleName: Yup.string()
    .min(2, "Слишком короткий!")
    .max(30, "Слишком длинный!")
    .required("Обязательно заполните!"),
  mail: Yup.string()
    .email("Не верная почта")
    .required("Обязательно заполните!"),
  password: Yup.string()
    .min(2, "Слишком короткий!")
    .max(30, "Слишком длинный!")
    .required("Обязательно заполните!"),
  passport: Yup.string()
    .min(2, "Слишком короткий!")
    .max(30, "Слишком длинный!")
    .required("Обязательно заполните!"),
  legalAddres: Yup.string()
    .min(2, "Слишком короткий!")
    .max(30, "Слишком длинный!")
    .required("Обязательно заполните!"),
});

const SignUpForm = (props: Props) => {
  const { setPerson } = React.useContext(registerContext);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      categories: null,
      mail: "",
      password: "",
      passport: "",
      legalAddress: "",
    },
    onSubmit: (values: IUser) => {
      const ans: IUser2 = {
        ...values,
        categories: values.categories!.map((val) => val.value),
      };
      AuthService.signup(ans).then((res) => {
        console.log(res);
        setPerson(res);
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>

      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Last Name</label>

      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="middleName">middle Name</label>

      <input
        id="middleName"
        name="middleName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.middleName}
      />

      <label htmlFor="categories">categories</label>

      <Select
        id="categories"
        isMulti={true}
        onChange={(e) => formik.setFieldValue("categories", e)}
        value={formik.values.categories}
        options={[
          {
            value: "FIRST_DEGREE_DISABLED",
            label: "Первая категория инвалидности",
          },
          {
            value: "SECOND_DEGREE_DISABLED",
            label: "Вторая категория инвалидности",
          },
          {
            value: "THIRD_DEGREE_DISABLED",
            label: "Третья категория инвалидности",
          },
          { value: "WAR_VETERAN", label: "Ветеран войны" },
          { value: "STUDENT", label: "Студент" },
          { value: "EMERGENCY_LIQUIDATOR", label: "Хуила?" },
          { value: "RETIREE", label: "Педрила?" },
          { value: "ASSIGNED_TO_STATE_AWARD", label: "Хуила + Педрила?" },
        ]}
      />

      <label htmlFor="mail">Email Address</label>

      <input
        id="mail"
        name="mail"
        type="mail"
        onChange={formik.handleChange}
        value={formik.values.mail}
      />

      <label htmlFor="password">Пароль</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <label htmlFor="passport">Passport</label>
      <input
        id="passport"
        name="passport"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.passport}
      />

      <label htmlFor="legalAddres"> Address</label>
      <input
        id="legalAddress"
        name="legalAddress"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.legalAddress}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
