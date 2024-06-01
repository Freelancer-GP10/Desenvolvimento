package com.example.ConnecTi.Projeto.Domain.Controller;


import com.example.ConnecTi.Projeto.Domain.Inovacao.EmailDto;
import com.example.ConnecTi.Projeto.Domain.Service.EmailService;
import com.example.ConnecTi.Projeto.Model.EmailModel;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/envio-email")
public class EmailController {

    private final EmailService emailService;
    public ResponseEntity<Void> sendEmail(@RequestBody EmailDto emailDto) {
        try {
            emailService.sendEmail(emailDto);
            System.out.println("Email Status: Email enviado com sucesso!");
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/emails")
    public ResponseEntity<Page<EmailModel>> getAllEmails(@PageableDefault(page = 0, size = 5, sort = "emailId", direction = Sort.Direction.DESC) Pageable pageable){
        return new ResponseEntity<>(emailService.findAll(pageable), HttpStatus.OK);
    }

    @GetMapping("/emails/{emailId}")
    public ResponseEntity<Object> getOneEmail(@PathVariable(value="emailId") UUID emailId){
        Optional<EmailModel> emailModelOptional = emailService.findById(emailId);
        if(!emailModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not found.");
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(emailModelOptional.get());
        }
    }
    @GetMapping("/whatsapp/{number}")
    public RedirectView redirectToWhatsApp(@PathVariable String number) {
        // Substitua 'NUMBER' pelo número de telefone com código do país
        String whatsappUrl = "https://api.whatsapp.com/send?phone="+number;
        return new RedirectView(whatsappUrl);
    }
}

