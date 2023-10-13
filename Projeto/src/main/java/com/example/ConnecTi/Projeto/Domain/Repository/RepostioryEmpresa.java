package com.example.ConnecTi.Projeto.Domain.Repository;

import com.example.ConnecTi.Projeto.Model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepostioryEmpresa extends JpaRepository<Empresa, Long> {
    Empresa findByEmail(String email);
}
