import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Bem-vindo à CabrinhaTech</h1>
      <h2>Que aqui a gente <strong>Mééééééélhora</strong> o seu futuro!</h2>
      <p>A melhor loja de placas de vídeo NVIDIA e AMD para gamers, criadores e entusiastas.</p>
      <a href="/shop" className="btn">Ver Placas de Vídeo</a>
    </div>
  );
}

export default Home;