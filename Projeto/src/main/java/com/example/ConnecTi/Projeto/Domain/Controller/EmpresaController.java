package com.example.ConnecTi.Projeto.Domain.Controller;

import com.example.ConnecTi.Projeto.Domain.Dto.Empresa.AtualizarEmpresaDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Empresa.CadastrarEmpresaDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Empresa.ListarEmpresaDto;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryFreelancer;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryServico;
import com.example.ConnecTi.Projeto.Domain.Repository.RepostioryEmpresa;
import com.example.ConnecTi.Projeto.Domain.Security.Configuration.AutenticacaoService;
import com.example.ConnecTi.Projeto.Model.Empresa;
import com.example.ConnecTi.Projeto.Model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {

    @Autowired
    private RepostioryEmpresa repositoryEmpresa;
    @Autowired
    private AutenticacaoService autenticacaoService;
    @Autowired
    private RepositoryServico servico;
    @Autowired
    private RepositoryFreelancer repositoryFreelancer;

    @PostMapping
    public ResponseEntity<Empresa> cadastrarEmpresa(@RequestBody CadastrarEmpresaDto dto) {
        Usuario usuarioLogado = autenticacaoService.getUsuarioFromUsuarioDetails();
        // Verifica se o papel do usuário é "Empresa"
      //  autenticacaoService.verificarPapelEmpresa(usuarioLogado);
        Empresa empresa = repositoryEmpresa.findByEmail(usuarioLogado.getEmail());
        empresa.setNome(dto.nome());
        empresa.setEmail(usuarioLogado.getEmail());
        empresa.setSenha(usuarioLogado.getSenha());
        empresa.setRamo(dto.ramo());
        empresa.setTelefone(dto.telefone());
        System.out.println(empresa);
        repositoryEmpresa.save(empresa);

        return ResponseEntity.ok(empresa);
    }
    @GetMapping
    public ResponseEntity<List<ListarEmpresaDto>> listarEmpresa(){
        Usuario usuarioLogado = autenticacaoService.getUsuarioFromUsuarioDetails();
        autenticacaoService.verificarPapelEmpresa(usuarioLogado);
        List<Empresa> empresas = repositoryEmpresa.findAll();
        List<ListarEmpresaDto> listarEmpresaDtos = empresas.stream().map(empresa -> new ListarEmpresaDto(empresa.getIdEmpresa(),empresa.getNome(),empresa.getEmail())).collect(Collectors.toList());
        System.out.println(listarEmpresaDtos);
        return ResponseEntity.ok(listarEmpresaDtos);

    }
    @GetMapping("/{id}")
    public ResponseEntity<ListarEmpresaDto> listarPorId(@PathVariable int id){
        Empresa empresa = repositoryEmpresa.findById((long) id).orElse(null);
        if(empresa == null){
            return ResponseEntity.notFound().build();
        }
        var retornar = new ListarEmpresaDto(empresa.getIdEmpresa(),empresa.getNome(),empresa.getEmail());
        return ResponseEntity.ok(retornar);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Empresa> atualizar(@PathVariable int id, @RequestBody AtualizarEmpresaDto dto){
        Empresa empresa= repositoryEmpresa.findById((long) id).orElse(null);
        if(empresa == null){
            return ResponseEntity.notFound().build();
        }

        empresa.setEmail(dto.email());
        empresa.setSenha(dto.senha());
        empresa.setRamo(dto.ramo());
        empresa.setTelefone(dto.telefone());

        repositoryEmpresa.save(empresa);
        return ResponseEntity.ok(empresa);
    }
    @DeleteMapping("/{id}")

    public ResponseEntity<Empresa> desativar(@PathVariable int id){
        Empresa empresa =repositoryEmpresa.findById((long) id).orElse(null);
        if(empresa == null){
            return ResponseEntity.notFound().build();
        }
        //DELETAR DO BANCO
        repositoryEmpresa.delete(empresa);



        return ResponseEntity.noContent().build();
    }



}
