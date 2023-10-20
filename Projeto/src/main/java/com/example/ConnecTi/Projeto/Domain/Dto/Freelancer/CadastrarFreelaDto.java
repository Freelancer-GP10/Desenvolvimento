package com.example.ConnecTi.Projeto.Domain.Dto.Freelancer;

public record CadastrarFreelaDto(
        String nome,
        String sobrenome,
        String areaAtuacao,
        String linguagemDominio,
        String formacao,
        String cpf,
        String telefone,
        boolean isAtivo) {
}
