        package com.example.ConnecTi.Projeto.Model;


        import com.fasterxml.jackson.annotation.JsonBackReference;
        import com.fasterxml.jackson.annotation.JsonIdentityInfo;
        import com.fasterxml.jackson.annotation.ObjectIdGenerators;
        import jakarta.persistence.*;
        import lombok.AllArgsConstructor;
        import lombok.Getter;
        import lombok.NoArgsConstructor;
        import lombok.Setter;


        import java.util.Collection;

        @Getter
        @AllArgsConstructor
        @NoArgsConstructor
        @Setter
        @Entity
        @Table(name = "freelancer")
        @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idFreelancer")
        public class Freelancer {
            @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)

            private Long idFreelancer;
            private String nome;
            private String email;
            private String senha;
            private String cpf;
            private boolean ativo;
            @OneToOne(mappedBy = "freelancer")
            @JsonBackReference
            private Portifolio portifolio;

            @OneToOne
            private Usuario usuario;




            public Freelancer(String nome, String email, String senha, String cpf, String dominio, boolean b) {
            }
        }