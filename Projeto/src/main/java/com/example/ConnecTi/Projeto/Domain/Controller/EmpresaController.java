package com.example.ConnecTi.Projeto.Domain.Controller;

import com.example.ConnecTi.Projeto.Domain.Dto.Empresa.AtualizarEmpresaDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Empresa.CadastrarEmpresaDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Empresa.ListarEmpresaDto;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryFreelancer;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryServico;
import com.example.ConnecTi.Projeto.Domain.Repository.RepostioryEmpresa;
import com.example.ConnecTi.Projeto.Model.Empresa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/gestor")
public class EmpresaController {

    @Autowired
    private RepostioryEmpresa repositoryEmpresa;
    @Autowired
    private RepositoryServico servico;
    @Autowired
    private RepositoryFreelancer repositoryFreelancer;

    @PostMapping
    public ResponseEntity<Empresa> cadastrarEmpresa(@RequestBody CadastrarEmpresaDto dto){
        Empresa empresa = new Empresa();
        empresa.setNome(dto.nome());
        empresa.setEmail(dto.email());
        empresa.setSenha(dto.senha());

        empresa.setRamo(dto.ramo());
        empresa.setTelefone(dto.telefone());

        repositoryEmpresa.save(empresa);
        return ResponseEntity.ok(empresa);
    }
    @GetMapping
    public ResponseEntity<List<ListarEmpresaDto>> listarEmpresa(){
        List<Empresa> empresas = repositoryEmpresa.findAll();
        List<ListarEmpresaDto> listarEmpresaDtos = empresas.stream().map(empresa -> new ListarEmpresaDto(empresa.getIdEmpresa(),empresa.getNome(),empresa.getEmail())).collect(Collectors.toList());
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