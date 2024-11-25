import React from "react";
import styles from "./index.module.css";

type Props = {
    children: React.ReactNode;
};

export const H2: React.FC<Props> = ({ children }) => {
    return <h2 className={styles.title}>{children}</h2>
};
