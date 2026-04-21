package com.example.experiment7.controller;

import com.example.experiment7.dto.MessageResponse;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/profile")
    public MessageResponse profile(Authentication authentication) {
        return new MessageResponse("Welcome, authenticated user: " + authentication.getName());
    }
}
