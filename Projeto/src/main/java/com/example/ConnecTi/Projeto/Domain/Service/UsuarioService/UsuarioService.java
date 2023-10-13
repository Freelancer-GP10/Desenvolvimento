package com.example.ConnecTi.Projeto.Domain.Service.UsuarioService;

import com.example.ConnecTi.Projeto.Domain.Dto.Usuario.UsuarioCriacaoDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Usuario.UsuarioLoginDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Usuario.UsuarioMapper;
import com.example.ConnecTi.Projeto.Domain.Dto.Usuario.UsuarioTokenDto;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryUsuario;
import com.example.ConnecTi.Projeto.Domain.Security.Jwt.GerenciadorTokenJwt;
import com.example.ConnecTi.Projeto.Model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.endpoint.SecurityContext;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private GerenciadorTokenJwt gerenciadorTokenJwt;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private RepositoryUsuario repositoryUsuario;

    public void criarUsuario(UsuarioCriacaoDto usuarioCriacaoDto) {
        final Usuario novoUsuario = UsuarioMapper.of(usuarioCriacaoDto);
        String senhaCriptografada =
                passwordEncoder.encode(novoUsuario.getSenha());
                novoUsuario.setSenha(senhaCriptografada);
        repositoryUsuario.save(novoUsuario);
    }
    public UsuarioTokenDto autenticar(UsuarioLoginDto usuarioLoginDto){
        final UsernamePasswordAuthenticationToken credentials = new UsernamePasswordAuthenticationToken(
                usuarioLoginDto.getEmail(),
                usuarioLoginDto.getSenha()
        );
        final Authentication authentication = authenticationManager.authenticate(credentials);

        Usuario usuarioAutenticado= repositoryUsuario.findByEmail(usuarioLoginDto.getEmail()).orElseThrow(()-> new RuntimeException("Usuário não encontrado"));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final String token = gerenciadorTokenJwt.generateToken(authentication);
        return UsuarioMapper.of(usuarioAutenticado, token);
    }
}
