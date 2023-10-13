package com.example.ConnecTi.Projeto.Domain.Dto.Conexao;

public record CadastrarConexaoDto(boolean aceito, Long fkServico, Long fkFreelancer, Long fkEmpresa, Long fkAvaliacao) {
}
