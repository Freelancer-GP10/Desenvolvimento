package com.example.ConnecTi.Projeto.Domain.Controller;

import com.example.ConnecTi.Projeto.Domain.Dto.Servico.CadastrarServicoDto;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryFreelancer;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryServico;
import com.example.ConnecTi.Projeto.Domain.Repository.RepostioryEmpresa;
import com.example.ConnecTi.Projeto.Model.Servico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/servico")
public class ServicoController {
    @Autowired
    private RepositoryServico servico;
    @Autowired
    private RepositoryFreelancer repositoryFreelancer;
    @Autowired
    private RepostioryEmpresa repositoryEmpresa;

    @PostMapping
    public ResponseEntity<CadastrarServicoDto> cadastrar(@RequestBody CadastrarServicoDto servico){
        Servico servicoSalvo =  new Servico();
        servicoSalvo.setNome(servico.nome());
        servicoSalvo.setDescricao(servico.descricao());
        servicoSalvo.setValor(servico.valor());
        servicoSalvo.setEmpresa(servico.empresa());
        servicoSalvo.setStatusServico(servico.statusServico());
        servicoSalvo.setEspecialidade(servico.especialidade());
        servicoSalvo.setPrazo(servico.prazo());
        servicoSalvo.setDataInicio(servico.dataInicio());
        servicoSalvo.setDataFinalizacao(servico.dataFinalizacao());

        this.servico.save(servicoSalvo);
        return ResponseEntity.ok().build();
    }
    @GetMapping
    public ResponseEntity<List<Servico>> listar(){
      List<Servico> lista = servico.findAll();
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Servico> listarPorId(@PathVariable Long id){
        Servico servico = this.servico.getReferenceById(id);
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Servico> deletar(@PathVariable Long id){
        this.servico.deleteById(id);
        return ResponseEntity.ok().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Servico> atualizar(@PathVariable Long id,
                                             @RequestBody Servico servico){
        Servico servicoAtualizado = this.servico.getReferenceById(id);
        if (servicoAtualizado != null){
            servicoAtualizado.setNome(servico.getNome());
            servicoAtualizado.setDescricao(servico.getDescricao());
            servicoAtualizado.setValor(servico.getValor());
            servicoAtualizado.setEmpresa(servico.getEmpresa());
            servicoAtualizado.setStatusServico(servico.getStatusServico());
            servicoAtualizado.setEspecialidade(servico.getEspecialidade());
            servicoAtualizado.setPrazo(servico.getPrazo());
            servicoAtualizado.setDataInicio(servico.getDataInicio());
            servicoAtualizado.setDataFinalizacao(servico.getDataFinalizacao());
            this.servico.save(servicoAtualizado);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.noContent().build();
    }


}
