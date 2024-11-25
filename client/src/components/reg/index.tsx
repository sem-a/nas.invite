import React from "react";
import styles from "./index.module.css";
import { H2 } from "../title";
import { CustomButton, CustomForm, CustomInput, CustomPassword } from "../form";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

export const RegComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPass: "",
    },
    onSubmit: async (values) => {
      const { name, email, password } = values;

      console.log(name, email, password);

      await fetch("http://localhost:8000/api/user/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Указываем тип содержимого
        },
        body: JSON.stringify({
          // Преобразуем объект в строку JSON
          name,
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
          <H2>Регистрация</H2>
        </div>
        <CustomForm onSubmit={formik.handleSubmit}>
          <CustomInput
            label="Имя"
            value={formik.values.name}
            onChange={(e: any) => formik.setFieldValue("name", e.target.value)}
          />
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
          <CustomPassword
            label="Повторите пароль"
            value={formik.values.repeatPass}
            onChange={(e: any) =>
              formik.setFieldValue("repeatPass", e.target.value)
            }
          />
          <CustomButton type="primary">Зарегистрироваться</CustomButton>
          <p>Есть аккаунт? <Link to='/login'>Войти</Link></p>
        </CustomForm>
      </div>
    </div>
  );
};
