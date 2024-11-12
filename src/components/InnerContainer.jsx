import styles from "./innercontainer.module.css";

export const InnerContainer = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};
export default InnerContainer;
