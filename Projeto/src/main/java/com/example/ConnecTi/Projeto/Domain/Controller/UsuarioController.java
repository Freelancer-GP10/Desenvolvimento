package com.example.ConnecTi.Projeto.Domain.Controller;

import com.example.ConnecTi.Projeto.Domain.Dto.Usuario.UsuarioCriacaoDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Usuario.UsuarioDetalhesDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Usuario.UsuarioLoginDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Usuario.UsuarioTokenDto;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryUsuario;
import com.example.ConnecTi.Projeto.Domain.Security.Configuration.AutenticacaoService;
import com.example.ConnecTi.Projeto.Domain.Service.UsuarioService.UsuarioService;
import com.example.ConnecTi.Projeto.Model.Usuario;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.SecurityMarker;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private AutenticacaoService autenticacaoService;
    @Autowired
    private RepositoryUsuario usuarioRepository;
//    @PostMapping
//    @SecurityRequirement(name="Bearer")
//    public ResponseEntity<Void> criarUsuario(@RequestBody UsuarioCriacaoDto usuarioCriacaoDto) {
//        usuarioService.criarUsuario(usuarioCriacaoDto);
//        return ResponseEntity.ok().build();
//    }
    @PostMapping
    @SecurityRequirement(name="Bearer")
    public ResponseEntity<Usuario> criarUsuario(@RequestBody UsuarioCriacaoDto usuarioCriacaoDto) throws Exception {
        Usuario usuarioCriado = usuarioService.criarUsuario(usuarioCriacaoDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioCriado);
    }
    @PostMapping("/login")
    public ResponseEntity<UsuarioTokenDto> login(@RequestBody UsuarioLoginDto usuarioLoginDto){
        UsuarioTokenDto usuarioTokenDto = usuarioService.autenticar(usuarioLoginDto);
        return ResponseEntity.ok(usuarioTokenDto);
    }
    @GetMapping("/dados")
    public ResponseEntity<Usuario> suaRota() {
        return ResponseEntity.ok(autenticacaoService.getUsuarioFromUsuarioDetails());
    }
    



}
