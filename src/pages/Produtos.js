import styles from "./Produtos.module.css";

function ProdutoCard({ nome, preco }) {
  return (
    <div className={styles.card}>
      <h3>{nome}</h3>
      <p>R$ {preco}</p>
    </div>
  );
}

function Produtos() {
  return (
    <div className={styles.container}>
      <h1>Produtos</h1>

      <div className={styles.grid}>
        <ProdutoCard nome="Teclado Mecânico RGB" preco="299,90" />
        <ProdutoCard nome="Mouse Gamer 7200 DPI" preco="159,90" />
        <ProdutoCard nome="Headset Surround" preco="349,90" />
      </div>
    </div>
  );
}

export default Produtos;
