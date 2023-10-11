package com.example.ConnecTi.Projeto.Domain.Controller;

import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryFreelancer;
import com.example.ConnecTi.Projeto.Domain.Dto.Freelancer.AtualizarFreelancerDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Freelancer.CadastrarFreelaDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Freelancer.ListarFreelaDto;

import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryServico;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryStatuServico;
import com.example.ConnecTi.Projeto.Model.Freelancer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/freelancer")
public class FreelancerController {
    @Autowired
    private RepositoryFreelancer repository;
    @Autowired
    private RepositoryServico servico;
    @Autowired
    private RepositoryStatuServico statusServico;

    @PostMapping
    public ResponseEntity<Freelancer> cadastrarFreelancer(@RequestBody CadastrarFreelaDto dto){
        Freelancer freelancer = new Freelancer();
        freelancer.setNome(dto.nome());
        freelancer.setEmail(dto.email());
        freelancer.setSenha(dto.senha());
        freelancer.setCpf(dto.cpf());
        freelancer.setAtivo(true);
        repository.save(freelancer);
        return ResponseEntity.ok(freelancer);
    }
    @GetMapping
    public ResponseEntity<List<ListarFreelaDto>> listarFreelancer(){
        List<Freelancer> freelancers = repository.findAll();
        List<ListarFreelaDto> listarFreelaDtos = freelancers.stream().map(freelancer -> new ListarFreelaDto(freelancer.getIdFreelancer(),freelancer.getNome(),freelancer.getEmail(),freelancer.getCpf())).collect(Collectors.toList());

        return ResponseEntity.ok(listarFreelaDtos);
    }
    @GetMapping("/{id}")
    public ResponseEntity<ListarFreelaDto> buscarFreelancer(@PathVariable int id){
        Freelancer freelancer = repository.findById((long) id).orElse(null);
        if(freelancer == null){
            return ResponseEntity.notFound().build();
        }
        var retornar =new ListarFreelaDto(freelancer.getIdFreelancer(),freelancer.getNome(),freelancer.getEmail(),freelancer.getCpf());
        return ResponseEntity.ok(retornar);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Freelancer> atualizarFreelancer(@PathVariable int id, @RequestBody AtualizarFreelancerDto dto){
        Freelancer freelancer = repository.findById((long) id).orElse(null);
        if(freelancer == null){
            return ResponseEntity.notFound().build();
        }
        freelancer.setNome(dto.nome());
        freelancer.setEmail(dto.email());
        freelancer.setSenha(dto.senha());

        repository.save(freelancer);
      return  ResponseEntity.ok(freelancer);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Freelancer> deletarFreelancer(@PathVariable int id){
        Freelancer freelancer = repository.findById((long) id).orElse(null);
        if(freelancer == null){
            return ResponseEntity.notFound().build();
        }
        freelancer.setAtivo(false);
        repository.save(freelancer);
        return ResponseEntity.ok(freelancer);
    }


}
