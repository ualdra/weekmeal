package com.example.weekmeal_sb.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.weekmeal_sb.services.ExternalApiService;

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