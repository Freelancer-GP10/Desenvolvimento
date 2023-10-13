package com.example.ConnecTi.Projeto.Domain.Repository;

import com.example.ConnecTi.Projeto.Model.Conexao;
import com.example.ConnecTi.Projeto.Model.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConexaoRepository extends JpaRepository<Conexao,Long> {
    boolean existsByServico(Servico servico);
}
