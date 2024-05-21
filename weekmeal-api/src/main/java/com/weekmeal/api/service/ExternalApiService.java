package com.weekmeal.api.service;

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

    public String getWeeklyMenu(String query) { // Añade el parámetro de consulta necesario
        try {
            String endpoint = "/recipes/complexSearch";
            // Añade el parámetro de búsqueda 'query' como en tu ejemplo de Postman
            String queryParams = "?apiKey=" + apiKey + "&query=" + query;

            URI uri = new URI(apiBaseUrl + endpoint + queryParams);
            return restTemplate.getForObject(uri, String.class);
        } catch (URISyntaxException e) {
            throw new RuntimeException("Error al construir la URI", e);
        }
    }

    public String getRecipe(String query) { // Añade el parámetro de consulta necesario
        try {
            String endpoint = "/recipes/" + query;
            String queryParams = "/information?apiKey=" + apiKey + "&includeNutrition=true" ;
            URI uri = new URI(apiBaseUrl + endpoint + queryParams);
            return restTemplate.getForObject(uri, String.class);
        } catch (URISyntaxException e) {
            throw new RuntimeException("Error al construir la URI", e);
        }
    }

}
