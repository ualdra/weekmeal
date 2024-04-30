package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entity.Tolerancia;
import com.example.demo.services.ToleranciaService;

public class ToleranciaController {
    
    @Autowired 
    private final ToleranciaService toleranciaService;

    public ToleranciaController(ToleranciaService toleranciaService) {
        this.toleranciaService = toleranciaService;
    }

    @PostMapping
    public Tolerancia createTolerancia(@RequestBody Tolerancia tolerancia) {
        return toleranciaService.saveTolerancia(tolerancia);
    }

    @GetMapping("/{idTolerancia}")
    public Tolerancia getToleranciaById(@PathVariable("idTolerancia") long idTolerancia) {
        return toleranciaService.getToleranciaById(idTolerancia);
    }
}
