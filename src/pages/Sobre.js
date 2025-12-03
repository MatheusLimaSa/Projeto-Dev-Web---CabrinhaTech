import styles from "./Sobre.module.css";

function Sobre() {
  return (
    <div className={styles.container}>
      <h1>Sobre a CabrinhaTech</h1>
      <p>
        Nascemos com a missão de oferecer as melhores placas de vídeo NVIDIA e AMD para quem busca 
        desempenho extremo em jogos, criação de conteúdo e computação de alta performance.
      </p>
      <p>
        Nosso bordão é levado a sério: <strong>"Que aqui a gente Mééééééélhora o seu futuro!"</strong> — 
        porque acreditamos que uma placa de vídeo de qualidade pode transformar sua experiência digital.
      </p>
      <p>
        Trabalhamos apenas com produtos novos, garantia oficial e suporte especializado.
      </p>
    </div>
  );
}

export default Sobre;