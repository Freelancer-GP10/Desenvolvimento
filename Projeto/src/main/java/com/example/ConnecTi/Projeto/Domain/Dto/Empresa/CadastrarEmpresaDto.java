package com.example.ConnecTi.Projeto.Domain.Dto.Empresa;

public record CadastrarEmpresaDto(
        String nome,
        String email,
        String senha,
        String cnpj,
        String ramo,
        String telefone
        ) {
}
