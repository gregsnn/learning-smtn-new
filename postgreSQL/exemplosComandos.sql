-- CREATE
CREATE TABLE IF NOT EXISTS usuario (
	idUsuario INT NOT NULL PRIMARY KEY,
	cpf INT NOT NULL UNIQUE,
	nome VARCHAR(255) NULL,
	dataAniversario TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS conta (
	idConta INT NOT NULL GENERATED ALWAYS AS IDENTITY
	dataCriacao TIMESTAMP NOT NULL,
	valorLimite NUMERIC(5,2) NOT NULL CHECK(valorLimite > 0)
	idUsuario INT NOT NULL,
	PRIMARY KEY (idConta),
	FOREIGN KEY (idUsuario) REFERENCES usuario (idUsuario)
);


-- ADD USUARIO
INSERT INTO usuario VALUES (1, 12345679, 'Joao da Silva', '2020-12-12');

-- ADD CONTA
INSERT INTO conta(dataCriacao, valorLimite, idUsuario) VALUES ('2020-12-12', 520.43, 1);

-- ALTER
-- ADD
ALTER TABLE usuario ADD COLUMN telefone VARCHAR(10) NOT NULL DEFAULT '00-0000000';

-- DELETE
ALTER TABLE usuario DROP COLUMN dataAniversario;

-- RENAME
ALTER TABLE usuario RENAME COLUMN telefone to contato;

-- ALTER - DROP condicao
ALTER TABLE usuario ALTER COLUMN contato DROP NOT NULL;

-- ALTER - SET condicao
ALTER TABLE usuario ALTER COLUMN contato SET NOT NULL;

-- ALTER - SET DEFAULT
ALTER TABLE usuario ALTER COLUMN nome SET DEFAULT 'nao informado';

-- ADD CONSTRAINT
ALTER TABLE usuario ADD CONSTRAINT cpf_usuario_check CHECK(cpf > 0);


-- DROP
DROP TABLE usuario CASCADE

DROP TABLE IF EXISTS conta


-- COPIA DE UMA TABLE _ BACKUP
CREATE TABLE
	CopiaCidadeAula2
AS
	SELECT * FROM CidadeEx
WHERE
	UF = 'RS';
	

-- buscar fazer um SELECT antes de uma mudanca, para verificar os dados corretamente
SELECT * FROM cidadeaula
WHERE id_cidade = 1;

-- UPDATE
UPDATE cidadeaula
SET
	nome = 'Novo Hamburgo'
WHERE
	id_cidade = 4;
			
-- DELETE
DELETE FROM cidadeaula
WHERE id_cidade = 4;


SELECT * FROM cidadeaula;

-- SELECT
-- especificado (com filtro)
SELECT nome, uf
FROM cidadeaula
WHERE id_cidade = 2;

SELECT uf, nome
FROM cidadeaula
WHERE UF = 'RS';

-- alterando label [alias para colunas]
SELECT nome AS "Nome da Cidade", uf AS "Estado"
FROM cidadeaula;

-- aplicando apelido na tabela para especificar campos [alias para tabelas]
SELECT cid.nome AS "Nome da Cidade", cid.uf AS "Estado"
FROM cidadeaula cid;


-- OPERADORES ARITMETICOS
SELECT 
	nomeEmpregado AS nome,
	salario AS salario_mensal,
	(salario * 12) AS salario_anual,
	(comissao * 12) AS comissao_anual,
	((salario + COALESCE(comissao, 0)) * 12) AS salario_total -- COALESCE(comissao, 0) = retorna comissao se diferente de nulo, senao 0
FROM empregado;


-- ORDER BY
SELECT nomeEmpregado, cargo
FROM empregado
ORDER BY nomeEmpregado; -- ORDENA -> ASCENDENTE(ASC(DEFAULT)) & DESCRECENTE(DESC)
-- ORDER BY aceita duas colunas


-- WHERE
SELECT nome, uf
FROM cidade
WHERE uf = 'RS';


-- OPERADORES DE COMPARACAO (imagem no wpp) (aceitam negativo "not BETWEEN / IS not NULL")
SELECT * FROM empregado
WHERE comissao IS NULL;

SELECT nomeEmpregado
FROM empregado
WHERE salario >= 1500;


-- OPERADORES CORRESPONDENCIAS E EXPRESSOES DE CONSULTA (imagem no wpp) (aceitam negativo "not LIKE/IN/EXISTS")
SELECT * FROM empregado
WHERE nomeEmpregado LIKE '%a%'; -- %A finaliza com / A% inicia com / %A% contem a letra

SELECT nomeEmpregado, salario, cargo
FROM empregado
WHERE cargo IN ('Atendente', 'Gerente')
ORDER BY cargo;

SELECT * 
FROM empregado e
WHERE EXISTS (SELECT 1 FROM departamento d WHERE d.iddepartamento = e.iddepartamento); -- retorna todos os empregados que existem na coluna "departamento"



-- OPERADORES LOGICOS
SELECT nomeEmpregado, salario, comissao
FROM empregado
WHERE salario BETWEEN 1000 AND 1500
	AND comissao > 0;


SELECT nomeEmpregado
FROM empregado
WHERE cargo IN ('Atendente', 'Gerente', 'Presidente');

SELECT nomeEmpregado
FROM empregado
WHERE comissao IS NOT NULL
	AND SALARIO IS NOT NULL;

SELECT nomeEmpregado
FROM empregado
WHERE nomeEmpregado LIKE 'S%'
	and iddepartamento = 20;

-- APLICA PARENTESES EM CONDICOES PARA QUE NAO OCORRA MISUNDERSTANDING



-- FUNCOES SIMPLES DE LINHA (imagem no wpp)
-- FUNCOES DE CARACTERE
---- LOWER
---- UPPER
---- UNITCAP - CAPITALIZA A PRIMEIRA LETRA

-- FUNCOES DE MANIPULACAO
---- CONCAT (pode tb ser feito com "||")
---- SUBSTRING - SUBSTRING(string, inicio, tamanho)
---- LENGTH
---- POSITION - RETORNA A POSICAO DA PRIMEIRA OCORRENCIA
---- LDAP / RDAP
---- TRIM - RETORNA A STRING SEM ESPACOS
---- REPLACE - SUBSTITUI UMA STRING POR OUTRA

-- FUNCOES NUMERICAS (imagem no wpp)
---- ABS
---- CEIL - ARREDONDA PARA CIMA
---- FLOOR - ARREDONDA PARA BAIXO
---- ROUND - ARREDONDA PARA CIMA OU PARA BAIXO
---- POWER - ELEVACAO AO QUADRADO
---- MOD - RESTO DE UMA DIVISAO
---- TRUNC - ARREDONDA PARA CIMA OU PARA BAIXO

-- FUNCOES DE DATA (imagem no wpp)
---- CURRENT_DATE - RETORNA A DATA ATUAL
---- CURRENT_TIME - RETORNA A HORA ATUAL
---- CURRENT_TIMESTAMP - RETORNA A DATA E A HORA ATUAL
---- DATE_FORMAT - FORMATACAO DE DATA
---- age - CALCULA A IDADE
---- date_part - RETORNA A PARTE DE UMA DATA (ano, mes, dia, hora, minuto, segundo)
---- date_trunc - ARREDONDA A DATA-HORA
---- extract - RETORNA A PARTE DE UMA DATA (ano, mes, dia, hora, minuto, segundo)

-- CALCULO COM DATAS (imagem no wpp)
---- current_date + n = n dias apos a data atual
---- '2020-10-12'::date  '2020-10-12'::date = INT 2
---- timestamp '2020-10-12 13:00' + interval '2 hours' = add 2 hours

-- FUNCOES DE CONVERSAO
---- TO_CHAR - CONVERTE PARA STRING
---- = - CONVERTE PARA NUMERO
---- TO_TIMESTAMP - CONVERTE PARA TIMESTAMP
---- TO_DATE - CONVERTE PARA DATA

-- EXPRESSOES CONDICIONAIS
---- CASE
---- WHEN
---- ELSE
---- END

---- NULLIF - RETORNA NULL SE A CONDICAO FOR VERDADEIRA


-- USO DE FUNCOES
SELECT POSITION('gre' IN 'postgres');

SELECT SUBSTRING('postgres', 1, 4);

SELECT EXTRACT(YEAR FROM CURRENT_DATE);

SELECT CURRENT_TIMESTAMP + INTERVAL '2 hours';

SELECT TO_CHAR(CURRENT_TIMESTAMP, 'YYYY-MM-DD HH12:MI:SS');

SELECT TO_CHAR(1234, '0000D00');

SELECT TO_NUMBER('1234', '0000D00');

SELECT TO_DATE('2020-10-12', 'YYYY-MM-DD');

SELECT 
	IDassociado,
	nome,
	CASE 
		WHEN sexo = 'F' THEN 'Feminino'
		WHEN sexo = 'M' THEN 'Masculino'
		ELSE 'Nao Binario'
	END AS genero
FROM associadoex;

SELECT NULLIF(comissao, 0), comissao, nomeEmpregado
FROM empregado;

SELECT
	nomeEmpregado,
	(salario + comissao) AS salarioTotal,
	(salario + COALESCE(comissao, 0)) AS salarioTotal2,
	comissao
FROM empregado;

SELECT 
	nome,
	REPLACE(REPLACE(nome, 'Sao', 'Cion'), 'Cion', '000') AS nomeCidade,
	uf
FROM cidadeex;



-- FUNCOES DE AGRUPAMENTO (imagem no wpp)
---- COUNT - CONTABILIZA A QUANTIDADE DE OCORRENCIAS (nao considera valores nulos)
---- SUM - SOMA OS VALORES
---- AVG - CALCULA A MEDIA
---- MIN - RETORNA O VALOR MINIMO
---- MAX - RETORNA O VALOR MAXIMO

SELECT COUNT(idEmpregado) FROM empregado;

SELECT COUNT(1) FROM empregado; -- COUNT(1) = COUNT(*)

SELECT MIN(idEmpregado) FROM empregado;

SELECT MAX(idEmpregado) FROM empregado;

SELECT SUM(idEmpregado) FROM empregado;

SELECT ROUND(AVG(idEmpregado), 2) FROM empregado;

SELECT 
	MIN(salario) AS menor_salario,
	MAX(salario) AS maior_salario
FROM empregado;

SELECT 
	COUNT(1) AS total_empregados,
	COUNT(DISTINCT cargo) AS total_cargos
FROM empregado;


-- GROUP BY
SELECT 
	cargo,
	COUNT(1) AS total_empregados
FROM empregado
GROUP BY cargo;

SELECT
	cargo,
	idgerente,
	COUNT(1) AS total_empregados
FROM 
	empregado
GROUP BY 
	cargo,
	idgerente
ORDER BY
	cargo;



-- HAVING (imagem no wpp)
SELECT 
	cargo,
	COUNT(1) AS total_empregados
FROM empregado
GROUP BY cargo
HAVING COUNT(1) > 1;

-- exemplo de uso com WHERE
SELECT 
	cargo,
	COUNT(1) AS total_empregados
FROM empregado
WHERE cargo LIKE 'V%' -- filtro eh aplicado antes, em caso de um milhao de dados seria uma pesquisa mais rapida
GROUP BY cargo;
-- HAVING cargo LIKE 'V%' -- filtro eh aplicado depois, em caso de um milhao de dados seria uma pesquisa mais lenta



-- INNER JOIN
UPDATE cliente SET nome = 'nome_cliente' WHERE nome = 'teste';
SELECT 
	a.nome AS nome_associado,
	c.nome AS nome_cidade
FROM
	cliente a INNER JOIN cidade c ON a.idcidade = c.idcidade;


SELECT 
	cli.idCLiente,
	cli.nome AS nome_cliente,
	cli.idCidade,
	cid.idCidade,
	cid.nome AS nome_cidade,
	cid.uf
FROM
	cliente cli INNER JOIN cidade cid ON cli.idCidade = cid.idCidade;


-- LEFT JOIN
SELECT 
	a.nome AS nome_associado,
	c.nome AS nome_cidade
FROM
	cliente a LEFT JOIN cidade c ON a.idcidade = c.idcidade;


-- RIGHT JOIN
SELECT
	a.nome AS nome_associado,
	c.nome AS nome_cidade
FROM
	associadoex a RIGHT JOIN cidadeex c ON a.idcidade = c.idcidade;


-- SELF JOIN
SELECT
	e.nomeEmpregado AS nome_empregado,
	g.nomeEmpregado AS nome_gerente
FROM
	empregado e INNER JOIN empregado g ON e.idgerente = g.idEmpregado; -- usando LEFT JOIN aqui trariam todos os empregados, mesmo os que nao tem gerente (case PRESIDENTE)


-- CROSS JOIN -- ocorre quando nao ha relacionamento entre as tabelas
SELECT
	a.idAssociado,
	a.nome AS nome_associado,
	a.idCidade,
	c.idCidade,
	c.nome
FROM
	associadoex a CROSS JOIN cidadeex c;


-- SUBQUERY
SELECT idCidade, nome
FROM cidade cid
WHERE EXISTS (
	SELECT 1
	FROM cliente cli
	WHERE cli.idCidade = cid.idCidade
);

SELECT idCidade, nome
FROM cidade cid
WHERE idcidade IN (
	SELECT idCidade
	FROM cliente
);

SELECT idCidade, nome
FROM cidade
WHERE idCidade = (
	SELECT MIN(idCidade)
	FROM cidade
	WHERE UF = 'SP'
);

SELECT 
	nome,
	(SELECT nome FROM cidade c
	WHERE c.idCidade = cli.idCidade) AS nome_cidade
FROM cliente cli;

SELECT 
	a.nome,
	cid.nome AS nome_cidade
FROM 
	cliente a INNER JOIN (
		SELECT idCidade, (nome || ' - ' || uf) AS nome 
		FROM cidade
		WHERE uf IN ('SC', 'PR', 'RS')
		) cid 
		ON a.idCidade = cid.idCidade;