package com.example.ConnecTi.Projeto.Domain.Service;

import com.example.ConnecTi.Projeto.Domain.Inovacao.EmailDto;
import com.example.ConnecTi.Projeto.Domain.Repository.EmailRepository;
import com.example.ConnecTi.Projeto.Model.EmailModel;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class EmailService {

    @Autowired
    EmailRepository emailRepository;

    @Autowired
    private JavaMailSender emailSender;

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(EmailDto emailDto) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

        helper.setText(emailDto.getText(), true); // 'true' para indicar que o conteúdo é HTML
        helper.setTo(emailDto.getEmailTo());
        helper.setSubject(emailDto.getSubject());
        helper.setFrom(emailDto.getEmailFrom());

        mailSender.send(mimeMessage);
    }

    public Page<EmailModel> findAll(Pageable pageable) {
        return  emailRepository.findAll(pageable);
    }

    public Optional<EmailModel> findById(UUID emailId) {
        return emailRepository.findById(emailId);
    }
}
