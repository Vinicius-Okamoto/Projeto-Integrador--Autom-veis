import { useNavigate } from "react-router-dom";
import styles from "../pages/PainelAutomovel.module.css";


function AutomovelCard({ automovel }) {
    const navigate = useNavigate();
    return (
        <div className={styles.card}>
            <p>Tipo: {automovel.tipoAutomovel}</p>
            <p>Nome: {automovel.nomeAutomovel}</p>
            <p>Marca: {automovel.marcaAutomovel}</p>
            <p>Ano: {automovel.anoAutomovel}</p>
            <p>Placa: {automovel.placaAutomovel}</p>

            <button onClick={() => navigate(`/automovel/${automovel.idAutomovel}`)}>Ver detalhes</button>

        </div>
    )
}

export default AutomovelCard;