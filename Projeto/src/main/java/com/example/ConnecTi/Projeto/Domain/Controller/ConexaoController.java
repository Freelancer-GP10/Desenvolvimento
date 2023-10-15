package com.example.ConnecTi.Projeto.Domain.Controller;

import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.AceitarServicoDTO;
import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.CadastrarConexaoDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.ConexaoInfoDTO;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryFreelancer;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryServico;
import com.example.ConnecTi.Projeto.Domain.Service.Conexao.ConexaoService;
import com.example.ConnecTi.Projeto.Model.Conexao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@RestController
@RequestMapping("/conexao")
public class ConexaoController {
    @Autowired
    private RepositoryServico servico;
    @Autowired
    private RepositoryFreelancer repositoryFreelancer;
    private final ConexaoService conexaoService;

    public ConexaoController(ConexaoService conexaoService) {
        this.conexaoService = conexaoService;
    }

    @PostMapping("/aceitar-servico")
    public ResponseEntity<Conexao> aceitarServico(@RequestBody AceitarServicoDTO aceitarServicoDto) throws Exception {
            // Lógica para aceitar o serviço e criar uma conexão
            Conexao novaConexao = conexaoService.aceitarServicoECreateConexao(aceitarServicoDto);
            return new ResponseEntity<>(novaConexao, HttpStatus.CREATED);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Conexao>> listarConexoes() {
        try {
            List<Conexao> conexoes = conexaoService.listarTodasConexoes();

            // Crie um comparador para ordenar as conexões pela data de inserção decrescente
            Comparator<Conexao> comparadorDataInsercao = (conexao1, conexao2) -> {
                // Compare as datas de inserção, considerando que conexoes mais recentes vêm primeiro
                return conexao2.getDataInsercao().compareTo(conexao1.getDataInsercao());
            };

            // Ordene a lista de conexões usando o comparador
            Collections.sort(conexoes, comparadorDataInsercao);

            return new ResponseEntity<>(conexoes, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/listar-info")
    public ResponseEntity<List<ConexaoInfoDTO>> listarInfoConexoes() {
        try {
            List<ConexaoInfoDTO> conexoesInfo = conexaoService.listarInfoConexoes();
            return new ResponseEntity<>(conexoesInfo, HttpStatus.OK);
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


