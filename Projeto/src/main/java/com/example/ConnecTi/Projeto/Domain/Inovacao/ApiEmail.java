package com.example.ConnecTi.Projeto.Domain.Inovacao;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(name = "email", url = "http://localhost:8081/envio-email")
public interface ApiEmail {

//    @PostMapping("/sending-email")
//    ResponseEntity<EmailModel> sendEmail(@RequestBody EmailDto emailDto);
//
}
