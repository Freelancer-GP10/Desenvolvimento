package com.example.ConnecTi.Projeto.Domain.Service.Conexao;

import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.AceitarServicoDTO;
import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.CadastrarConexaoDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.ConexaoDto;
import com.example.ConnecTi.Projeto.Domain.Dto.Conexao.ConexaoInfoDTO;
import com.example.ConnecTi.Projeto.Domain.Exception.ResourceNotFoundException;
import com.example.ConnecTi.Projeto.Domain.Repository.*;
import com.example.ConnecTi.Projeto.Domain.Security.Configuration.AutenticacaoService;
import com.example.ConnecTi.Projeto.Domain.Service.UsuarioService.UsuarioService;
import com.example.ConnecTi.Projeto.Model.*;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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


    public List<Conexao> listarTodasConexoesOrdenadasPorIdDesc() {
        return conexaoRepository.listarTodasConexoesOrdenadasPorIdDesc();
    }
    public Conexao getConexaoPorId(Long id) {
        return conexaoRepository.findById(id).orElse(null);
    }

    public Conexao aceitarServicoECreateConexao(AceitarServicoDTO aceitarServicoDto) throws Exception {
        // Busca o freelancer e o serviço pelos IDs fornecidos

        Long userLogado = autenticacaoService.getUsuarioFromUsuarioDetails().getId();
        System.out.println(autenticacaoService.getUsuarioFromUsuarioDetails());

        Freelancer freelancer = freelancerRepository.findByFkUsuarioId(userLogado);
        if(freelancer == null){
            throw new Exception("Freelancer não encontrado");
        }


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
        novaConexao.setDataInsercao(LocalDateTime.now());
        novaConexao.setAceito(true);  // Como o freelancer está aceitando o serviço, definimos aceito como true


        String currentDateTime = getFormattedCurrentDateTime();
        String filename = "conexao_" + currentDateTime + ".csv";
        exportConexaoespecifica(novaConexao, "C:\\Users\\thiag\\Downloads\\" + filename);
        exportConexaoespecifica(novaConexao, "C:\\Users\\thiag\\Desktop\\Desenvolvimento\\Projeto\\" + filename);



        // Salva a conexão no banco de dados

        return conexaoRepository.save(novaConexao);
    }
    private String getFormattedCurrentDateTime() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss");
        LocalDateTime now = LocalDateTime.now();
        return now.format(formatter);
    }
    public List<ConexaoInfoDTO> listarInfoConexoes() {
        return conexaoRepository.findAll().stream()
                .map(conexao -> {
                    ConexaoInfoDTO dto = new ConexaoInfoDTO();
                    dto.setId(conexao.getIdConexao());
                    dto.setStatusServico(conexao.isAceito() ? "Aceito" : "Pendente");
                    dto.setDataPostada(conexao.getServico().getDataInicio());
                    dto.setNomeServico(conexao.getServico().getNome());
                    dto.setNomeEmpresa(conexao.getServico().getEmpresa().getNome());
                    dto.setDescricao(conexao.getServico().getDescricao());
                    return dto;
                })
                .collect(Collectors.toList());
    }



    public void exportConexaoespecifica(Conexao conexao, String path) {
        try (FileWriter writer = new FileWriter(path, StandardCharsets.UTF_8, true)) {
            // Escrever cabeçalho apenas se o arquivo estiver vazio
            File file = new File(path);
            if (!file.exists() || file.length() == 0) {
                writer.append("\"ID_Freelancer\",\"Nome_Freelancer\",\"Sobrenome_Freelancer\",\"Email_Freelancer\",\"ID_Servico\",\"Nome_Servico\",\"Descricao_Servico\",\"Valor_Servico\",\"ID_Empresa\",\"Nome_Empresa\"\n");
            }

            Freelancer freelancer = conexao.getFreelancer();
            Servico servico = conexao.getServico();
            Empresa empresa = servico.getEmpresa();

            writer.append(quote(freelancer.getIdFreelancer().toString()));
            writer.append(",");
            writer.append(quote(freelancer.getNome()));
            writer.append(",");
            writer.append(quote(freelancer.getSobrenome()));
            writer.append(",");
            writer.append(quote(freelancer.getEmail()));
            writer.append(",");
            writer.append(quote(servico.getIdServico().toString()));
            writer.append(",");
            writer.append(quote(servico.getNome()));
            writer.append(",");
            writer.append(quote(cleanString(servico.getDescricao())));
            writer.append(",");
            writer.append(quote(servico.getValor().toString()));
            writer.append(",");
            writer.append(quote(empresa.getIdEmpresa().toString()));
            writer.append(",");
            writer.append(quote(empresa.getNome()));
            writer.append("\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private String quote(String value) {
        if (value == null) {
            return "\"\"";
        }
        return "\"" + value.replace("\"", "\"\"") + "\"";  // Escapa aspas duplas e envolve em aspas duplas
    }

    private String cleanString(String value) {
        if (value == null) {
            return "";
        }
        return value.replace("\n", " ").replace("\r", " ");  // Remove quebras de linha
    }





}
