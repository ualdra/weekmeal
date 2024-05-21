package com.example.weekmeal_sb.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.weekmeal_sb.entity.Receta;
import com.example.weekmeal_sb.services.RecetaService;

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
