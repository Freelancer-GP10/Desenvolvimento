package com.example.ConnecTi.Projeto.Domain.Dto.Servico;

import java.time.LocalDateTime;
import java.util.Date;

public record ListarServicoDto(
                                String nome,
                                LocalDateTime prazo,
                                Date dataInicio,
                                LocalDateTime dataFinalizacao,
                                Double valor,
                                String descricao
) {
}
