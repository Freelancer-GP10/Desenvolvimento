package com.example.ConnecTi.Projeto.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Conexao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idConexao;
    private boolean aceito;

    @ManyToOne
    @JoinColumn(name = "fkFreelancer", referencedColumnName = "idFreelancer")
    private Freelancer freelancer;

    @ManyToOne
    @JoinColumn(name = "fkServico", referencedColumnName = "idServico")
    private Servico servico;

    @ManyToOne
    @JoinColumn(name = "fkAvaliacao", referencedColumnName = "idAvaliacao")
    private Avaliacao avaliacao;
}
