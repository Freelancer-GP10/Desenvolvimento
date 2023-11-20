package com.example.ConnecTi.Projeto.Domain.Controller;

import com.example.ConnecTi.Projeto.Domain.Dto.Servico.AtualizarServicoDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Servico.CadastrarServicoDto;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryFreelancer;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryServico;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryStatuServico;
import com.example.ConnecTi.Projeto.Domain.Repository.RepostioryEmpresa;
import com.example.ConnecTi.Projeto.Domain.Security.Configuration.AutenticacaoService;
import com.example.ConnecTi.Projeto.Model.Empresa;
import com.example.ConnecTi.Projeto.Model.Servico;
import com.example.ConnecTi.Projeto.Model.StatusServico;
import com.example.ConnecTi.Projeto.Model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

@RestController
@RequestMapping("/servico")
@CrossOrigin(origins = "http://26.118.2.221:5173", allowedHeaders = "*")
public class ServicoController {
    private Queue<Servico> filaDeServicos = new LinkedList<>();
    private Stack<Servico> pilhaServicosAceitos = new Stack<>();
    private Servico ultimoServicoPostado;

    public Queue<Servico> getFilaDeServicos() {
        return filaDeServicos;
    }

    public Stack<Servico> getPilhaServicosAceitos() {
        return pilhaServicosAceitos;
    }
    @Autowired
    private RepositoryServico servico;
    @Autowired
    private RepositoryStatuServico repositoryStatuServico;
    @Autowired
    private AutenticacaoService autenticacaoService;
    @Autowired
    private RepositoryFreelancer repositoryFreelancer;
    @Autowired
    private RepostioryEmpresa repositoryEmpresa;

    @PostMapping
    public ResponseEntity<CadastrarServicoDto> cadastrar(@RequestBody CadastrarServicoDto servico){
        Servico servicoSalvo =  new Servico();
        Usuario usuariologado = autenticacaoService.getUsuarioFromUsuarioDetails();

       Empresa empresa = repositoryEmpresa.findByEmail(usuariologado.getEmail()).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,("Não existe empresa com esse nome")));

        StatusServico status = repositoryStatuServico.findById((long)1).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Não existe Status com id 1 no banco"));

        servicoSalvo.setNome(servico.nome());
        servicoSalvo.setDescricao(servico.descricao());
        servicoSalvo.setValor(servico.valor());
        servicoSalvo.setEmpresa(empresa);
        servicoSalvo.setStatusServico(status);
        servicoSalvo.setPrazo(servico.prazo());
        servicoSalvo.setDataInicio(servico.dataInicio());
        servicoSalvo.setDataFinalizacao(servico.dataFinalizacao());

        filaDeServicos.offer(servicoSalvo);
        ultimoServicoPostado = servicoSalvo; // Armazena o último serviço postado para ser usado no método de aceitar serviço
        this.servico.save(servicoSalvo);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/desfazer-postagem")
    public ResponseEntity<String> desfazerPostagem() {
        if (ultimoServicoPostado != null) {
            // Lógica para remover o último serviço postado do banco de dados
            ultimoServicoPostado = null;
            return ResponseEntity.ok("Postagem de serviço desfeita com sucesso");
        }
        return ResponseEntity.badRequest().body("Nenhuma postagem recente para desfazer");
    }
    @GetMapping
    public ResponseEntity<List<Servico>> listar(){
      List<Servico> lista = servico.findAll();
      if(lista.isEmpty()){
          return ResponseEntity.noContent().build();
      }
        return ResponseEntity.ok().body(lista);
    }

    @GetMapping("/servicos-aceitos")
    public ResponseEntity<List<Servico>> listarServicosAceitos() {
        List<Servico> servicosAceitos = new ArrayList<>(pilhaServicosAceitos);
        if (servicosAceitos.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        Collections.reverse(servicosAceitos);

        return ResponseEntity.ok(servicosAceitos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Servico> listarPorId(@PathVariable Long id){
        Servico servico = this.servico.findById(id).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Serviço nao encontrado"));
        return ResponseEntity.ok().body(servico);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Servico> deletar(@PathVariable Long id){
        this.servico.deleteById(id);
        return ResponseEntity.ok().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Servico> atualizar(@PathVariable Long id,
                                             @RequestBody AtualizarServicoDto servico){
        Servico servicoAtualizado = this.servico.getReferenceById(id);
        servicoAtualizado.setNome(servico.nome());
        servicoAtualizado.setDescricao(servico.descricao());
        servicoAtualizado.setValor(servico.valor());
        servicoAtualizado.setPrazo(servico.prazo());
        servicoAtualizado.setDataFinalizacao(servico.dataFinalizacao());
        this.servico.save(servicoAtualizado);
        return ResponseEntity.ok().build();
    }


}
