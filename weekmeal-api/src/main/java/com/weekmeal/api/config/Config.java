package com.weekmeal.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Bean
    public WebClient webClient() {
        return WebClient.create();
    }
}

