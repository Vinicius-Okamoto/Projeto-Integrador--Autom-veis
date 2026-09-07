import styles from "../pages/PainelAutomovel.module.css";

function AutomovelCard({ automovel }) {
    return (
        <div className={styles.card}>
            <p>Tipo: {automovel.tipoAutomovel}</p>
            <p>Nome: {automovel.nomeAutomovel}</p>
            <p>Marca: {automovel.marcaAutomovel}</p>
            <p>Ano: {automovel.anoAutomovel}</p>
            <p>Placa: {automovel.placaAutomovel}</p>
        </div>
    )
}

export default AutomovelCard;