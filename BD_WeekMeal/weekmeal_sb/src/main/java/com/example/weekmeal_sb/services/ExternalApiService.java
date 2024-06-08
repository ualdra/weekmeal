package com.example.weekmeal_sb.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.net.URI;
import java.net.URISyntaxException;

@Service
public class ExternalApiService {

    @Value("${api.external.url}")
    private String apiBaseUrl;

    @Value("${api.key}")
    private String apiKey;

    private final RestTemplate restTemplate;

    public ExternalApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getWeeklyMenu() {
        try {
            String endpoint = "/mealplanner/generate";
            String queryParams = "?apiKey=" + apiKey;
            URI uri = new URI(apiBaseUrl + endpoint + queryParams);
            return restTemplate.getForObject(uri, String.class);
        } catch (URISyntaxException e) {
            throw new RuntimeException("Error constructing the URI", e);
        }
    }

    public String getRecipe(String query) { // Añade el parámetro de consulta necesario
        try {
            String endpoint = "/recipes/" + query;
            String queryParams = "/information?apiKey=" + apiKey + "&includeNutrition=true";
            URI uri = new URI(apiBaseUrl + endpoint + queryParams);
            return restTemplate.getForObject(uri, String.class);
        } catch (URISyntaxException e) {
            throw new RuntimeException("Error al construir la URI", e);
        }
    }
}