package com.example.ConnecTi.Projeto.Domain.Controller;

import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryFreelancer;
import com.example.ConnecTi.Projeto.Domain.Repository.RepositoryPortifolio;
import com.example.ConnecTi.Projeto.Model.Freelancer;
import com.example.ConnecTi.Projeto.Model.Portifolio;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.core.io.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;



import static java.util.UUID.*;

@RestController
@RequestMapping("/portifolio")
public class PortifolioController {

    @Autowired
    private RepositoryPortifolio repository;
    @Autowired
    private RepositoryFreelancer repositoryFreelancer;

    // Define o caminho base para onde os arquivos serão salvos
    private static final String BASE_PATH = "C:\\Users\\thiag\\Desktop\\Teste";

    @PostMapping("/upload")
    public ResponseEntity uploadFile(@RequestParam("file") MultipartFile multipartFile,
                                     @RequestParam String git) {
        if (multipartFile.isEmpty()) {
            return ResponseEntity.badRequest().body("Nenhum arquivo enviado");
        }

        // Gerar nome único para o arquivo
        String uniqueFilename = UUID.randomUUID() + "_" + multipartFile.getOriginalFilename();

        try {
            // Salvar o arquivo no caminho especificado
            Path path = Paths.get(BASE_PATH, uniqueFilename);
            Files.createDirectories(path.getParent()); // Garante que os diretórios existam
            Files.copy(multipartFile.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
            // COLOCAR AQUI O ID DO JWT DO FREELANCER OU SEJA LOGADO DA VEZ
            Freelancer freelancer = repositoryFreelancer.findById(1L)
                    .orElseThrow(() -> new EntityNotFoundException("Freelancer não encontrado com o ID: " + 1));

            Portifolio portifolio = new Portifolio();
            portifolio.setArquivo(new File(path.toString()));
            portifolio.setLinkRepositorio(git);
            portifolio.setFreelancer(freelancer); // Associe o Portifolio ao Freelancer

            repository.save(portifolio);

            return ResponseEntity.ok("Arquivo recebido com sucesso");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar o arquivo.");
        }
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<Resource> downloadFile(@PathVariable Long id) {
        // Busque o objeto Portifolio no banco de dados pelo ID
        Portifolio portifolio = repository.findById(id).orElseThrow(() -> new RuntimeException("Portifolio não encontrado com o ID: " + id));

        // Pegue o caminho do arquivo
        Path path = Paths.get(portifolio.getArquivo().toURI());
        Resource resource;
        try {
            resource = (Resource) new UrlResource(path.toUri());

            if (!resource.exists()) {
                throw new RuntimeException("Arquivo não encontrado");
            }

            // Determine o tipo de conteúdo pelo nome do arquivo
            String contentType = Files.probeContentType(path);

            // Se o tipo não puder ser determinado, defina como "application/octet-stream"
            if(contentType == null) {
                contentType = "application/octet-stream";
            }

            // Retorne o arquivo para download
            String filename = path.getFileName().toString();

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                    .body(resource);
        } catch (MalformedURLException e) {
            throw new RuntimeException("Erro ao formar a URI do arquivo", e);
        } catch (IOException e) {
            throw new RuntimeException("Erro ao determinar o tipo de arquivo", e);
        }
    }




}
