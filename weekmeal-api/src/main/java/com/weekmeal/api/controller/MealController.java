package com.weekmeal.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.weekmeal.api.service.ExternalApiService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
//@RequestMapping("/api")
public class MealController {

    private final ExternalApiService externalApiService;

    public MealController(ExternalApiService externalApiService) {
        this.externalApiService = externalApiService;
    }

    @GetMapping("/meals")
    public ResponseEntity<String> getMeals(@RequestParam String query) { // Obtener la 'query' como parámetro
        String weeklyMenu = externalApiService.getWeeklyMenu(query);
        return ResponseEntity.ok(weeklyMenu);
    }
}

