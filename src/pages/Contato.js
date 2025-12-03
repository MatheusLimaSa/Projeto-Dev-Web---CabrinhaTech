import styles from "./Contato.module.css";

function Contato() {
  return (
    <div className={styles.container}>
      <h1>Contato CabrinhaTech</h1>
      <p>Email: contato@cabrinhatech.com</p>
      <p>WhatsApp: (91) 99999-0000</p>
      <p>Atendimento: Segunda a Sexta, 9h às 18h</p>
    </div>
  );
}

export default Contato;