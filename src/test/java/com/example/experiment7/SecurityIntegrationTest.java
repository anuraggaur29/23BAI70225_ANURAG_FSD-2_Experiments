package com.example.experiment7;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class SecurityIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void publicEndpointShouldBeAccessibleWithoutAuth() throws Exception {
        mockMvc.perform(get("/api/public/hello"))
                .andExpect(status().isOk());
    }

    @Test
    void userEndpointShouldReturn401WithoutAuth() throws Exception {
        mockMvc.perform(get("/api/user/profile"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void userShouldAccessUserEndpoint() throws Exception {
        mockMvc.perform(get("/api/user/profile").with(httpBasic("user1", "user123")))
                .andExpect(status().isOk());
    }

    @Test
    void userShouldBeDeniedFromAdminEndpoint() throws Exception {
        mockMvc.perform(get("/api/admin/dashboard").with(httpBasic("user1", "user123")))
                .andExpect(status().isForbidden());
    }

    @Test
    void adminShouldAccessAdminEndpoint() throws Exception {
        mockMvc.perform(get("/api/admin/dashboard").with(httpBasic("admin1", "admin123")))
                .andExpect(status().isOk());
    }
}
