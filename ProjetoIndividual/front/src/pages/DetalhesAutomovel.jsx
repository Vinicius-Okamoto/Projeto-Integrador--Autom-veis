import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";

function DetalhesAutomovel() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [automovel, setAutomovel] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {

        api.get(`/Automoveis/${id}`)
            .then((resposta) => {
                setAutomovel(resposta.data);
            })
            .catch((erro) => {

                if (erro.response?.status === 404) {
                    setErro("Automóvel não encontrado.");
                } else {
                    setErro("Erro ao buscar automóvel.");
                }

            })
            .finally(() => {
                setCarregando(false);
            });

    }, [id]);

    if (carregando) {
        return <p>Carregando...</p>;
    }

    if (erro) {
        return <p>{erro}</p>;
    }

    return (
        <main>

            <h1>Detalhes do Automóvel</h1>

            <p>ID: {automovel.idAutomovel}</p>
            <p>Nome: {automovel.nomeAutomovel}</p>
            <p>Marca: {automovel.marcaAutomovel}</p>
            <p>Ano: {automovel.anoAutomovel}</p>
            <p>Placa: {automovel.placaAutomovel}</p>
            <p>Tipo: {automovel.tipoAutomovel}</p>

            <button onClick={() => navigate("/")}>
                Voltar
            </button>

        </main>
    );
}

export default DetalhesAutomovel;