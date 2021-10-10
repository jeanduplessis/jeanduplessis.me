import styles from "./content-section.module.css";

export default function ContentSection({ children }) {
  return (
    <>
      <div className={styles["content-section"]}>{children}</div>
    </>
  );
}
