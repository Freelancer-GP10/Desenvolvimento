package com.example.ConnecTi.Projeto.Domain.Dto.Freelancer;

public record CadastrarFreelaDto(
        String nome
        ,String email,
        String senha,
        String cpf,
        String ramo,
        boolean isAtivo) {
}
