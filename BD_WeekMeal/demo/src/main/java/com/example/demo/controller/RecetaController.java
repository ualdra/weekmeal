package com.example.demo.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Receta;
import com.example.demo.services.RecetaService;

@RestController
@RequestMapping("/receta")
public class RecetaController {
    
    @Autowired
    private RecetaService recetaService;

    @GetMapping
    public List<Receta> getAllRecetas() {
        return recetaService.getAllRecetas();
    }

    @GetMapping("/{id}")
    public Optional<Receta> getRecetaById(@PathVariable long id) {
        return recetaService.getRecetaById(id);
    }

    @PostMapping
    public Receta createReceta(@RequestBody Receta receta) {
        return recetaService.saveReceta(receta);
    }

    @DeleteMapping("/{id}")
    public void deleteReceta(@PathVariable long id) {
        recetaService.deleteReceta(id);
    }
}
