package com.example.experiment7.controller;

import com.example.experiment7.dto.MessageResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public")
public class PublicController {

    @GetMapping("/hello")
    public MessageResponse hello() {
        return new MessageResponse("This is a public endpoint");
    }
}
