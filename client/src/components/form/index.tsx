import React from "react";
import { Form, Input, Button } from "antd";
import styles from "./index.module.css";

type FormProps = {
    children: React.ReactNode;
    onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
};
type InputProps = { label: string; value: string; onChange?: any };
type PasswordProps = { label: string; value: string; onChange?: any };
type ButtonProps = { children: React.ReactNode; type: string };

export const CustomForm: React.FC<FormProps> = ({ children, onSubmit }) => (
    <Form onFinish={onSubmit} layout="vertical" className={styles.formContainer}>
        {children}
    </Form>
);

export const CustomInput: React.FC<InputProps> = ({ label, value, onChange }) => (
    <Form.Item
        label={<span className={styles.label}>{label}</span>}
        rules={[{ required: true, message: `Пожалуйста введите ${label}` }]}
    >
        <Input
            placeholder={`Введите ${label}`}
            value={value}
            onChange={onChange}
            className={styles.inputField}
        />
    </Form.Item>
);

export const CustomPassword: React.FC<PasswordProps> = ({ label, value, onChange }) => (
    <Form.Item
        label={<span className={styles.label}>{label}</span>}
        rules={[{ required: true, message: `Пожалуйста введите пароль` }]}
    >
        <Input.Password
            value={value}
            onChange={onChange}
            placeholder={`Введите ${label}`}
            className={styles.passwordField}
        />
    </Form.Item>
);

export const CustomButton: React.FC<ButtonProps> = ({
    children,
    type = "primary",
}) => (
    <Form.Item>
        <Button
            type="primary"
            htmlType="submit"
            className={styles.primaryButton}
        >
            {children}
        </Button>
    </Form.Item>
);
