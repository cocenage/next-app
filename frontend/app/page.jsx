import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header/Header";
import Button from "@/app/components/Button/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Button  ><h1>хач 2, </h1></Button>
    </main>
  );
}
