package com.example.experiment7.dto;

import java.util.List;

public record LoginResponse(
        String message,
        String username,
        List<String> roles
) {
}
