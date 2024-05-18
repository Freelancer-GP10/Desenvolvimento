package com.example.ConnecTi.Projeto.Domain.Repository;

import com.example.ConnecTi.Projeto.Model.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface RepostioryEmpresa extends JpaRepository<Empresa, Long> {
    Optional<Empresa> findByEmail(String email);
    @Query("SELECT s.empresa FROM Servico s WHERE s.empresa.idEmpresa = :idEmpresa")
    Empresa findEmpresaByEmpresaId(@Param("idEmpresa") Long idEmpresa);


}
