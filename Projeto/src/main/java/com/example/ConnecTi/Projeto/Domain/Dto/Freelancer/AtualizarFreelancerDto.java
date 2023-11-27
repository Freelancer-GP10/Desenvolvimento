package com.example.ConnecTi.Projeto.Domain.Dto.Freelancer;

public record AtualizarFreelancerDto(
        String senha,
        String dominio,
        String ramo,
        String telefone,
        String areaAtuacao,
        String sobrenome,
        String email,
        String nome)  {
}
