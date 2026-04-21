package com.example.experiment7.controller;

import com.example.experiment7.dto.MessageResponse;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping("/dashboard")
    public MessageResponse dashboard(Authentication authentication) {
        return new MessageResponse("Welcome, admin: " + authentication.getName());
    }
}
