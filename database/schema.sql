CREATE DATABASE projectweb;
\c projectweb;

CREATE TABLE produtos(
    codigo UUID PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    marca VARCHAR(60) NOT NULL,
    preco DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    imagem TEXT
);
INSERT INTO produtos VALUES('', '', '', 0.00, '');
SELECT * FROM produtos;
DROP TABLE produtos;