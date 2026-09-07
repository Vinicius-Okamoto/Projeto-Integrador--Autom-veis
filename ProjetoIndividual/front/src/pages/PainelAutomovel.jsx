import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
// import styles from "../PainelAutomovel.module.css";
import styles from "./PainelAutomovel.module.css";

function PainelAutomovel() {

    const navigate = useNavigate();

    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");
    const [automoveis, setAutomoveis] = useState([]);

    useEffect(() => {
        api.get("/Automoveis")
            .then((resposta) => { setAutomoveis(resposta.data); })
            .catch((erro) => { console.error(erro); setErro("Não foi possível carregar os automóvies."); })
            .finally(() => { setCarregando(false); });
    }, []);

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.titulo}>Painel Automóveis</h1>
                <p className={styles.subtitulo}> Gerencie os veículos cadastrados no sistema</p>
                <button className={styles.botaoCadastrar} onClick={() => navigate("/cadastrar-automovel")}>+ Cadastrar Automóvel</button>
            </header>

            {/* <h2 className={styles.tituloLista}>Automóveis Cadastrados</h2> */}

            {carregando && (
                <p className={styles.carregando}>Carregando automóveis...</p>
            )}

            {erro && (
                <p className={styles.erro}>{erro}</p>
            )}

            {!carregando && !erro && automoveis.length === 0 && (
                <div className={styles.vazio}>Nenhum automóvel cadastrado.</div>
            )}

            <h3>Automóveis Cadastrados</h3>

            <div className={styles.autoCadastrado}>
            {automoveis.map((automovel) => (
                // <div className={styles.card} key={automovel.idAutomovel}>
                //     <div className={styles.Cadastrado}>
                //     <p>Tipo: {automovel.tipoAutomovel}</p>
                //     <p>Nome: {automovel.nomeAutomovel}</p>
                //     <p>Marca: {automovel.marcaAutomovel}</p>
                //     <p>Ano: {automovel.anoAutomovel}</p>
                //     <p>Placa: {automovel.placaAutomovel}</p>
                //     </div>
                //     <hr />
                // </div>
                <AutomovelCard
                    key={automovel.idAutomovel}
                    automovel={automovel}
                />
            ))}
            </div>
        </main>
    )
}

export default PainelAutomovel;