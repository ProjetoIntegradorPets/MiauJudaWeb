-- Excluir as tabelas se existirem
DROP TABLE IF EXISTS Avistamento;
DROP TABLE IF EXISTS ANIMAL_ADOCAO;
DROP TABLE IF EXISTS ENDERECO;
DROP TABLE IF EXISTS TIPO;
DROP TABLE IF EXISTS ANIMAL;

-- Criar tabelas
CREATE TABLE ANIMAL (
    id INT PRIMARY KEY,
    nome VARCHAR(20),
    descricao VARCHAR(230),
    FK_TIPO_id INT
);

CREATE TABLE TIPO (
    id INT PRIMARY KEY,
    categoria VARCHAR(50)
);

CREATE TABLE ANIMAL_ADOCAO (
    tamanho INT,
    peso DECIMAL(5, 3),
    sexo CHAR,
    raca VARCHAR(25),
    FK_ANIMAL_id INT PRIMARY KEY
);

CREATE TABLE ENDERECO (
    id INT PRIMARY KEY,
    cep VARCHAR(10),
    estado VARCHAR(2),
    cidade VARCHAR(40),
    bairro VARCHAR(50),
    rua VARCHAR(40),
    numero INT,
    complemento VARCHAR(40)
);

CREATE TABLE Avistamento (
    fk_ANIMAL_id INT,
    fk_ENDERECO_id INT,
    data DATE
);

-- Adicionar as chaves estrangeiras (apenas se as tabelas foram criadas com sucesso)
ALTER TABLE ANIMAL ADD CONSTRAINT FK_ANIMAL_2
    FOREIGN KEY (FK_TIPO_id)
    REFERENCES TIPO (id)
    ON DELETE CASCADE;

ALTER TABLE ANIMAL_ADOCAO ADD CONSTRAINT FK_ANIMAL_ADOCAO_2
    FOREIGN KEY (FK_ANIMAL_id)
    REFERENCES ANIMAL (id)
    ON DELETE CASCADE;

ALTER TABLE Avistamento ADD CONSTRAINT FK_Avistamento_1
    FOREIGN KEY (fk_ANIMAL_id)
    REFERENCES ANIMAL (id)
    ON DELETE SET NULL;

ALTER TABLE Avistamento ADD CONSTRAINT FK_Avistamento_2
    FOREIGN KEY (fk_ENDERECO_id)
    REFERENCES ENDERECO (id)
    ON DELETE SET NULL;

 INSERT INTO TIPO (id, categoria) VALUES
    (1, 'Cachorro'),
    (2, 'Gato');

    INSERT INTO ANIMAL (id, nome, descricao, FK_TIPO_id) VALUES
    (1, 'Rex', 'Cachorro amigável', 1),
    (2, 'Luna', 'Gato brincalhão', 2),
    (3, 'Max', 'Cachorro enérgico', 1),
    (4, 'Mia', 'Gato tranquilo', 2),
    (5, 'Buddy', 'Cachorro fiel', 1),
    (6, 'Lola', 'Gato carinhoso', 2),
    (7, 'Rocky', 'Cachorro protetor', 1),
    (8, 'Nala', 'Gato curioso', 2),
    (9, 'Charlie', 'Cachorro brincalhão', 1),
    (10, 'Bucky', 'Cachorro esperto', 1),
    (11, 'Jonny', 'Gato esperto', 2),
    (12, 'Pumba', 'Cachorro foda', 1),
    (13, 'Timao', 'Gato medroso', 2),
    (14, 'Alvin', 'Cachorro bobo', 1),
    (15, 'Bella', 'Cachorro alegre', 1),
    (16, 'Simba', 'Gato brincalhão', 2),
    (17, 'Duke', 'Cachorro fiel', 1),
    (18, 'Zoe', 'Gato curioso', 2),
    (19, 'Bentley', 'Cachorro brincalhão', 1),
    (20, 'Shadow', 'Gato carinhoso', 2),
    (21, 'Ranger', 'Cachorro protetor', 1),
    (22, 'Chloe', 'Gato tranquilo', 2),
    (23, 'Diesel', 'Cachorro enérgico', 1),
    (24, 'Gracie', 'Gato esperto', 2),
    (25, 'Toby', 'Cachorro amigável', 1),
    (26, 'Tiger', 'Gato medroso', 2),
    (27, 'Copper', 'Cachorro brincalhão', 1),
    (28, 'Mittens', 'Gato curioso', 2),
    (29, 'Moose', 'Cachorro fiel', 1),
    (30, 'Peanut', 'Gato carinhoso', 2);

    INSERT INTO ANIMAL_ADOCAO (tamanho, peso, sexo, raca, FK_ANIMAL_id) VALUES
    (50, 20.5, 'M', 'Labrador', 1),
    (30, 4.5, 'F', 'Siamês', 2),
    (55, 22.0, 'M', 'Pastor Alemão', 3),
    (35, 5.0, 'F', 'Persa', 4),
    (60, 25.0, 'F', 'Golden Retriever', 5),
    (33, 4.8, 'F', 'Maine Coon', 6),
    (52, 23.0, 'M', 'Bulldog', 7),
    (32, 5.2, 'F', 'Bengal', 8),
    (48, 19.0, 'M', 'Beagle', 9),
    (34, 4.9, 'M', 'Ragdoll', 10),
    (61, 25.5, 'M', 'Golden Retriever', 15),
    (32, 4.6, 'F', 'Maine Coon', 16),
    (53, 23.5, 'M', 'Bulldog', 17),
    (31, 5.0, 'F', 'Bengal', 18),
    (47, 18.5, 'M', 'Beagle', 19),
    (35, 5.0, 'M', 'Ragdoll', 20),
    (49, 20.0, 'M', 'Labrador', 21),
    (31, 4.4, 'F', 'Siamês', 22),
    (57, 23.0, 'M', 'Pastor Alemão', 23),
    (34, 5.3, 'F', 'Persa', 24),
    (62, 26.0, 'M', 'Golden Retriever', 25),
    (30, 4.9, 'F', 'Maine Coon', 26);

    INSERT INTO ENDERECO (id, cep, estado, cidade, bairro, rua, numero, complemento) VALUES
    (1, '12345-678', 'SP', 'São Paulo', 'Centro', 'Rua A', 101, 'Apto 1'),
    (2, '23456-789', 'RJ', 'Rio de Janeiro', 'Copacabana', 'Avenida Atlântica', 1502, ''),
    (3, '34567-890', 'MG', 'Belo Horizonte', 'Savassi', 'Rua B', 202, 'Bloco B'),
    (4, '45678-901', 'RS', 'Porto Alegre', 'Moinhos de Vento', 'Rua C', 303, 'Casa 2');

    INSERT INTO Avistamento (fk_ANIMAL_id, fk_ENDERECO_id, data) VALUES
    (11, 1, '2023-06-01'),
    (12, 2, '2023-06-02'),
    (13, 3, '2023-06-03'),
    (14, 4, '2023-06-04');