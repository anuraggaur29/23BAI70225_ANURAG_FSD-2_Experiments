package com.example.experiment7.config;

import com.example.experiment7.entity.Role;
import com.example.experiment7.entity.User;
import com.example.experiment7.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (userRepository.count() > 0) {
            return;
        }

        userRepository.save(User.builder()
                .username("user1")
                .password(passwordEncoder.encode("user123"))
                .role(Role.ROLE_USER)
                .build());

        userRepository.save(User.builder()
                .username("admin1")
                .password(passwordEncoder.encode("admin123"))
                .role(Role.ROLE_ADMIN)
                .build());
    }
}
