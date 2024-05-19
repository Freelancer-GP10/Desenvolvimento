-- Adicione estas linhas ao seu script SQL existente
CREATE TABLE IF NOT EXISTS `apipagamento` (
  `id_ApiPagamento` int NOT NULL AUTO_INCREMENT,
  `formaPagamento` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_ApiPagamento`),
  CONSTRAINT `check_pagamento` CHECK ((`formaPagamento` in ('Pix','Debito','Boleto')))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `api_endereco` (
  `id_endereco` bigint NOT NULL AUTO_INCREMENT,
  `logradouro` varchar(45) DEFAULT NULL,
  `numero` varchar(45) DEFAULT NULL,
  `CEP` varchar(45) DEFAULT NULL,
  `UF` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id_endereco`),
  CONSTRAINT `check_endereco` CHECK ((`UF` in ('SP','BA','RJ','RE')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `papel` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `empresa` (
  `id_Empresa` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(64) DEFAULT NULL,
  `ramo` varchar(45) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `fk_Endereco` int DEFAULT NULL,
  `fk_Usuario` int DEFAULT NULL,
  `cnpj` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`id_Empresa`),
  KEY `fkEndereco` (`fk_Endereco`),
  KEY `fk_Usuario` (`fk_Usuario`),
  CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`fk_Endereco`) REFERENCES `empresa` (`id_Empresa`),
  CONSTRAINT `empresa_ibfk_2` FOREIGN KEY (`fk_Usuario`) REFERENCES `usuario` (`id`),
  CONSTRAINT `check_email_empresa` CHECK ((locate('@',`email`) > 0))
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `freelancer` (
  `id_Freelancer` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(64) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `ativo` bit(1) NOT NULL,
  `telefone` char(11) DEFAULT NULL,
  `fk_Usuario` int DEFAULT NULL,
  `area_atuacao` varchar(45) DEFAULT NULL,
  `linguagem_dominio` varchar(45) DEFAULT NULL,
  `formacao` varchar(45) DEFAULT NULL,
  `sobrenome` varchar(45) DEFAULT NULL,
  `carteira` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_Freelancer`),
  KEY `fk_Usuario` (`fk_Usuario`),
  CONSTRAINT `freelancer_ibfk_1` FOREIGN KEY (`fk_Usuario`) REFERENCES `usuario` (`id`),
  CONSTRAINT `check_emailFreela` CHECK ((locate('@',`email`) > 0))
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `especialidade` (
  `id_Especialidade` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  `descricao` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_Especialidade`),
  CONSTRAINT `chk_tipo` CHECK ((`tipo` in ('Front-end','Back-end','Analytics')))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `portifolio` (
  `id_portifolio` bigint NOT NULL AUTO_INCREMENT,
  `fk_Freelancer` int DEFAULT NULL,
  `link_Repositorio` varchar(500) DEFAULT NULL,
  `arquivo` blob,
  PRIMARY KEY (`id_portifolio`),
  KEY `fk_Freelancer` (`fk_Freelancer`),
  CONSTRAINT `portifolio_ibfk_1` FOREIGN KEY (`fk_Freelancer`) REFERENCES `freelancer` (`id_Freelancer`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `avaliacao` (
  `id_Avaliacao` int NOT NULL AUTO_INCREMENT,
  `nivel` int DEFAULT NULL,
  PRIMARY KEY (`id_Avaliacao`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `servico` (
  `id_Servico` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `prazo` datetime DEFAULT NULL,
  `data_inicio` date DEFAULT NULL,
  `data_Finalizacao` date DEFAULT NULL,
  `valor` varchar(250) DEFAULT NULL,
  `descricao` varchar(250) DEFAULT NULL,
  `fk_Especialidade` int DEFAULT NULL,
  `fk_Empresa` int DEFAULT NULL,
  `fk_ApiPagamento` int DEFAULT NULL,
  `data_de_postagem` datetime DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `dtTransacao` date DEFAULT NULL,
  PRIMARY KEY (`id_Servico`),
  KEY `fk_Especialidade` (`fk_Especialidade`),
  KEY `fk_Empresa` (`fk_Empresa`),
  KEY `fk_ApiPagamento` (`fk_ApiPagamento`),
  CONSTRAINT `servico_ibfk_2` FOREIGN KEY (`fk_Especialidade`) REFERENCES `especialidade` (`id_Especialidade`),
  CONSTRAINT `servico_ibfk_3` FOREIGN KEY (`fk_Empresa`) REFERENCES `empresa` (`id_Empresa`),
  CONSTRAINT `servico_ibfk_4` FOREIGN KEY (`fk_ApiPagamento`) REFERENCES `apipagamento` (`id_ApiPagamento`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `conexao` (
  `id_conexao` bigint NOT NULL AUTO_INCREMENT,
  `aceito` bit(1) NOT NULL,
  `fk_Freelancer` int DEFAULT NULL,
  `fk_Servico` int DEFAULT NULL,
  `fk_Avaliacao` int DEFAULT NULL,
  `data_insercao` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id_conexao`),
  KEY `fk_Freelancer` (`fk_Freelancer`),
  KEY `fk_Servico` (`fk_Servico`),
  KEY `fk_Avaliacao` (`fk_Avaliacao`),
  CONSTRAINT `conexao_ibfk_1` FOREIGN KEY (`fk_Freelancer`) REFERENCES `freelancer` (`id_Freelancer`),
  CONSTRAINT `conexao_ibfk_2` FOREIGN KEY (`fk_Servico`) REFERENCES `servico` (`id_Servico`),
  CONSTRAINT `conexao_ibfk_3` FOREIGN KEY (`fk_Avaliacao`) REFERENCES `avaliacao` (`id_Avaliacao`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
