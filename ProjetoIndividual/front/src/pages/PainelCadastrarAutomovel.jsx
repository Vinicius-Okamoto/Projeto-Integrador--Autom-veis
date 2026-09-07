import { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

function PainelCadastrarAutomovel() {
    
    // const redirecionarPainelAutomovel = () => { Navigate('/PainelAutomovel')}
    const navigate = useNavigate();

    const [nomeAutomovel, setNomeAutomovel] = useState("");
    const [marcaAutomovel, setMarcaAutomovel] = useState("");
    const [anoAutomovel, setAnoAutomovel] = useState("");
    const [placaAutomovel, setPlacaAutomovel] = useState("");
    const [tipoAutomovel, setTipoAutomovel] = useState("");

    const cadastrarAutomovel = async () => {
        const automovel = {
            nomeAutomovel: nomeAutomovel,
            marcaAutomovel: marcaAutomovel,
            anoAutomovel: anoAutomovel,
            placaAutomovel: placaAutomovel,
            tipoAutomovel: tipoAutomovel
        };

        try {
            await api.post("/Automoveis", automovel);
            alert("Automóvel cadastrado com sucesso!");
            navigate("/");
        } catch (erro) {
            console.error(erro);
            alert("Erro ao cadastrar automóvel.");
        }
    };

    return (
        <div>
            <button onClick={() => navigate("/")}>Voltar página de Painel</button>
            <h2>Cadastro de Automóveis</h2>
            Tipo de Automóveis: <select
    name="tipoAutomovel"
    id="tipoAutomovel"
    value={tipoAutomovel}
    onChange={(e) => setTipoAutomovel(e.target.value)}
>
    <option value="">Selecione um tipo</option>
    <option value="Carro">Carro</option>
    <option value="Moto">Moto</option>
    <option value="Caminhão">Caminhão</option>
    <option value="Ônibus">Ônibus</option>
    <option value="Outro">Outro</option>
</select> <br />
            <label>Nome do Automóveis:</label> <input type="text" value={nomeAutomovel} onChange={(e) => setNomeAutomovel (e.target.value)} /><br />
            <label>Marca do Automóveis:</label> <input type="text" value={marcaAutomovel} onChange={(e) => setMarcaAutomovel (e.target.value)} /><br />
            <label>Ano do Automóveis:</label> <input type="number" value={anoAutomovel} onChange={(e) => setAnoAutomovel (e.target.value)} /><br />
            <label>Placa do Automóveis:</label> <input type="text" value={placaAutomovel} onChange={(e) => setPlacaAutomovel (e.target.value)} /><br />
            <button onClick={cadastrarAutomovel}>Cadastrar</button>
        </div>
    )
}

export default PainelCadastrarAutomovel;