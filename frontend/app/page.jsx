import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header/Header";
import Card from "@/app/components/Card/Card";
import Button from "@/app/components/Button/Button";
import Menu from "@/app/components/Menu/Menu";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Menu  name1="Глеб" name2="реально" name3="Петушара" ki="https://www.youtube.com/watch?v=ptiom4YWqoE"  ki2="https://yandex.ru/search/?text=link+react+js&clid=2411726&lr=38" ki3="https://auth.codium.ai/?extensionId=Codium.codium&extensionQuery=windowId=1&uriScheme=vscode" />
      

      <Card name="мой первый постик" text="это самое крутое описание постика" />
      <Card name="мой первый постик" text="это самое крутое описание постика" />
    </main>
  );
}
