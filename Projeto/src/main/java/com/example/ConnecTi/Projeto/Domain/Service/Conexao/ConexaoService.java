package com.example.ConnecTi.Projeto.Domain.Service.Conexao;

import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.AceitarServicoDTO;
import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.CadastrarConexaoDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.ConexaoDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.ConexaoInfoDTO;
import com.example.ConnecTi.Projeto.Domain.Exception.ResourceNotFoundException;
import com.example.ConnecTi.Projeto.Domain.Repository.*;
import com.example.ConnecTi.Projeto.Domain.Security.Configuration.AutenticacaoService;
import com.example.ConnecTi.Projeto.Model.*;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ConexaoService {
        @Autowired
        private ConexaoRepository conexaoRepository;

        @Autowired
        private RepostioryEmpresa empresaRepository;

        @Autowired
        private AutenticacaoService autenticacaoService;
        @Autowired
        private RepositoryFreelancer freelancerRepository;
        @Autowired
        private RepositoryAvaliacao avaliacaoRepository;

        @Autowired
        private RepositoryServico servicoRepository;

    public Conexao criarConexao(CadastrarConexaoDto novaConexaoDto) {
        Freelancer freelancer = freelancerRepository.findById(novaConexaoDto.fkFreelancer())
                .orElseThrow(() -> new ResourceNotFoundException("Freelancer não encontrado"));

        Servico servico = servicoRepository.findById(novaConexaoDto.fkServico())
                .orElseThrow(() -> new ResourceNotFoundException("Serviço não encontrado"));

        Avaliacao avaliacao = avaliacaoRepository.findById(novaConexaoDto.fkAvaliacao())
                .orElseThrow(() -> new ResourceNotFoundException("Avaliação não encontrada"));

        Conexao conexao = new Conexao();
        conexao.setAceito(novaConexaoDto.aceito());
        conexao.setFreelancer(freelancer);
        conexao.setServico(servico);
        conexao.setAvaliacao(avaliacao);

        return conexaoRepository.save(conexao);
    }

    public List<Conexao> listarTodasConexoes() {
        return conexaoRepository.findAll();
    }
    public Conexao getConexaoPorId(Long id) {
        return conexaoRepository.findById(id).orElse(null);
    }

    public Conexao aceitarServicoECreateConexao(AceitarServicoDTO aceitarServicoDto) throws Exception {
        // Busca o freelancer e o serviço pelos IDs fornecidos
        int userLogado =2;
        System.out.println(autenticacaoService.getUsuarioFromUsuarioDetails());

        Freelancer freelancer = freelancerRepository.findById((long) userLogado)
                .orElseThrow(() -> new Exception("Freelancer não encontrado"));

        Servico servico = servicoRepository.findById(aceitarServicoDto.fkServico())
                .orElseThrow(() -> new Exception("Serviço não encontrado"));

        // Verifica se o serviço já não foi aceito por outro freelancer
        boolean servicoJaAceito = conexaoRepository.existsByServico(servico);
        if(servicoJaAceito){
            throw new Exception("Este serviço já foi aceito por outro freelancer");
        }

        // Cria uma nova conexão
        Conexao novaConexao = new Conexao();
        novaConexao.setFreelancer(freelancer);
        novaConexao.setServico(servico);
        novaConexao.setAceito(true);  // Como o freelancer está aceitando o serviço, definimos aceito como true

        // Salva a conexão no banco de dados
        return conexaoRepository.save(novaConexao);
    }
    public List<ConexaoInfoDTO> listarInfoConexoes() {
        return conexaoRepository.findAll().stream()
                .map(conexao -> {
                    ConexaoInfoDTO dto = new ConexaoInfoDTO();
                    dto.setStatusServico(conexao.isAceito() ? "Aceito" : "Pendente");
                    dto.setDataPostada(conexao.getServico().getDataInicio());
                    dto.setNomeServico(conexao.getServico().getNome());
                    dto.setTipoServico(conexao.getServico().getEspecialidade().getTipo());
                    dto.setNomeEmpresa(conexao.getServico().getEmpresa().getNome());
                    dto.setDescricao(conexao.getServico().getDescricao());
                    return dto;
                })
                .collect(Collectors.toList());
    }


}
