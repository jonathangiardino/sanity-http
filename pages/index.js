import { useContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GlobalContext } from "../context";
import { EDIT_POST } from "../sanityFunctions";

export default function Home() {
  const { text, setText } = useContext(GlobalContext);

  const handleChange = (event) => {
    setText(() => event.target.value);
  };

  const handleSubmit = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await EDIT_POST(text);
      event.target.value = "";
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sanity Http</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>sanity http</h1>
        <form action="">
          <input
            className={styles.input}
            type="text"
            onChange={handleChange}
            onKeyPress={handleSubmit}
          />
        </form>
        <h3>{text}</h3>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
