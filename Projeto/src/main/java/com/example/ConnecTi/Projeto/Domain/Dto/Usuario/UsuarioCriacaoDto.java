package com.example.ConnecTi.Projeto.Domain.Dto.Usuario;

import com.example.ConnecTi.Projeto.Enum.Papeis;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class    UsuarioCriacaoDto {

    private String email;
    private String papel;
    private String senha;

}
