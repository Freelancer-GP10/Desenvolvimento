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
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.SecurityMarker;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://26.118.2.221:5173", allowedHeaders = "*")
@RequiredArgsConstructor
public class UsuarioController {
    private final UsuarioService usuarioService;
    private final AutenticacaoService autenticacaoService;
    private final RepositoryUsuario usuarioRepository;
    @PostMapping
    @SecurityRequirement(name="Bearer")
    public ResponseEntity<Usuario> criarUsuario(@RequestBody @Valid UsuarioCriacaoDto usuarioCriacaoDto){
        Usuario usuarioCriado = usuarioService.criarUsuario(usuarioCriacaoDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioCriado);
    }
    @PostMapping("/login")
    public ResponseEntity<UsuarioTokenDto> login(@RequestBody @Valid UsuarioLoginDto usuarioLoginDto){
        UsuarioTokenDto usuarioTokenDto = usuarioService.autenticar(usuarioLoginDto);
        return ResponseEntity.ok(usuarioTokenDto);
    }

    @GetMapping("/dados")
    public ResponseEntity<List<Usuario>> suaRota() {
        return ResponseEntity.ok(usuarioRepository.findAll());
    }


}
