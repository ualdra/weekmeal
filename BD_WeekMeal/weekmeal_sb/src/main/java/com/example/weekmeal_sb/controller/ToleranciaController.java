package com.example.weekmeal_sb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.weekmeal_sb.entity.Tolerancia;
import com.example.weekmeal_sb.services.ToleranciaService;

@RestController
@RequestMapping("/tolerancia")
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

    @PostMapping("/{idTolerancia}")
    public void updateTolerancia(@PathVariable("idTolerancia") long idTolerancia, @RequestBody Tolerancia toleranciaDetails) {
        toleranciaService.updateTolerancia(idTolerancia, toleranciaDetails);
    }

    @GetMapping("/usuario/{idUsuario}")
    public Tolerancia getToleranciaByUserId(@PathVariable("idUsuario") long idUsuario) {
        return toleranciaService.getToleranciaByUserId(idUsuario);
    }

}
