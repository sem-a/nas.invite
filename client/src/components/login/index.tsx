import React from "react";
import styles from "./index.module.css";
import { H2 } from "../title";
import { CustomButton, CustomForm, CustomInput, CustomPassword } from "../form";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

export const LoginComponent = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const { email, password } = values;

      await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
    },
  });

  return (
    <div className={styles.reg}>
      <div className={styles.container}>
        <div className={styles.title}>
          <H2>Войти</H2>
        </div>
        <CustomForm onSubmit={formik.handleSubmit}>
          <CustomInput
            label="Email"
            value={formik.values.email}
            onChange={(e: any) => formik.setFieldValue("email", e.target.value)}
          />
          <CustomPassword
            label="Пароль"
            value={formik.values.password}
            onChange={(e: any) =>
              formik.setFieldValue("password", e.target.value)
            }
          />
          <CustomButton type="primary">Войти</CustomButton>
          <p>Нет аккаунта? <Link to='/registration'>Зарегистрироваться</Link></p>
        </CustomForm>
      </div>
    </div>
  );
};
