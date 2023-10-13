package com.example.ConnecTi.Projeto.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Servico {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long idServico;
    private String nome;
    private LocalDateTime prazo;
    private Date dataInicio;
    private LocalDateTime dataFinalizacao;
    private Double valor;
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "fkStatusServico", referencedColumnName = "idStatusServico")
    private StatusServico statusServico;

    @ManyToOne
    @JoinColumn(name = "fkEspecialidade", referencedColumnName = "idEspecialidade")
    private Especialidade especialidade;

    @ManyToOne
    @JoinColumn(name = "fkEmpresa", referencedColumnName = "idEmpresa")
    private Empresa empresa;

//    @ManyToOne
//    @JoinColumn(name = "fkApiPagamento", referencedColumnName = "idApiPagamento")
//    private ApiPagamento apiPagamento;


}
