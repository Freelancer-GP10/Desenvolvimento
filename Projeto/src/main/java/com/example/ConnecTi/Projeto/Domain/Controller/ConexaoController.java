package com.example.ConnecTi.Projeto.Domain.Controller;

import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.CadastrarConexaoDto;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryFreelancer;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryServico;
import com.example.ConnecTi.Projeto.Domain.Service.Conexao.ConexaoService;
import com.example.ConnecTi.Projeto.Domain.Service.UsuarioService.UsuarioService;
import com.example.ConnecTi.Projeto.Model.Conexao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conexao")
public class ConexaoController {
    @Autowired
    private RepositoryServico servico;
    @Autowired
    private RepositoryFreelancer repositoryFreelancer;
    private final ConexaoService conexaoService;
    @Autowired
    UsuarioService usuarioService;
    public ConexaoController(ConexaoService conexaoService) {
        this.conexaoService = conexaoService;
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Conexao>> listarConexoes() {
        try {
            List<Conexao> conexoes = conexaoService.listarTodasConexoes();
            return new ResponseEntity<>(conexoes, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/cadastrar")
    public ResponseEntity<Conexao> criarConexao(@RequestBody CadastrarConexaoDto novaConexaoDto) {
        try {
            Conexao conexao = conexaoService.criarConexao(novaConexaoDto);
            return new ResponseEntity<>(conexao, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Conexao> getConexaoPorId(@PathVariable int id) {
        try {
            Conexao conexao = conexaoService.getConexaoPorId((long) id);
            if (conexao != null) {
                return new ResponseEntity<>(conexao, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




//    @PutMapping("/{id}")
//    public ResponseEntity<Conexao> atualizarPorId(@PathVariable int id, @RequestBody Conexao conexaoAtualizada){
//        if (id >= 0 && id < listaConexoes.size()){
//            listaConexoes.set(id, conexaoAtualizada);
//            return ResponseEntity.ok(conexaoAtualizada);
//        }
//        return ResponseEntity.noContent().build();
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Conexao> deletarPorId(@PathVariable int id){
//        if (id >= 0 && id < listaConexoes.size()){
//            listaConexoes.remove(id);
//            return ResponseEntity.status(204).build();
//        }
//        return ResponseEntity.noContent().build();
//    }
}


