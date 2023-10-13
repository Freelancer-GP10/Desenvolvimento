package com.example.ConnecTi.Projeto.Domain.Service.Conexao;

import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.CadastrarConexaoDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.ConexaoDto;
import com.example.ConnecTi.Projeto.Domain.Exception.ResourceNotFoundException;
import com.example.ConnecTi.Projeto.Domain.Repository.*;
import com.example.ConnecTi.Projeto.Model.*;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConexaoService {
        @Autowired
        private ConexaoRepository conexaoRepository;

        @Autowired
        private RepostioryEmpresa empresaRepository;

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


}
