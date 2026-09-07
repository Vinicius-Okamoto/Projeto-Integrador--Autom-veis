-- CREATE TABLE IF NOT EXISTS usuario (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     senha VARCHAR(255) NOT NULL,
--     duracao INT NOT NULL
--     );

CREATE TABLE IF NOT EXISTS automovel (
    idAutomovel INT AUTO_INCREMENT PRIMARY KEY,
    nomeAutomovel VARCHAR(255) NOT NULL,
    marcaAutomovel VARCHAR(255) NOT NULL,
    anoAutomovel INT NOT NULL,
    placaAutomovel VARCHAR(255) NOT NULL UNIQUE,
    tipoAutomovel VARCHAR(255) NOT NULL
    );