package com.ms.email.services;

import com.ms.email.dtos.EmailDto;
import com.ms.email.enums.StatusEmail;
import com.ms.email.models.EmailModel;
import com.ms.email.repositories.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class EmailService {

    @Autowired
    EmailRepository emailRepository;

    @Autowired
    private JavaMailSender emailSender;

//    @Transactional
//    public EmailModel sendEmail(EmailModel emailModel) {
//        emailModel.setSendDateEmail(LocalDateTime.now());
//        try{
//            SimpleMailMessage message = new SimpleMailMessage();
//            message.setFrom(emailModel.getEmailFrom());
//            message.setTo(emailModel.getEmailTo());
//            message.setSubject(emailModel.getSubject());
//            message.setText(emailModel.getText());
//            emailSender.send(message);
//
//            emailModel.setStatusEmail(StatusEmail.SENT);
//        } catch (MailException e){
//            emailModel.setStatusEmail(StatusEmail.ERROR);
//        } finally {
//            return emailRepository.save(emailModel);
//        }
//    }
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
