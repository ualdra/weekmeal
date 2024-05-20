package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.example.demo.entity.RecetaFav;
import com.example.demo.services.RecetaFavService;

@RestController
@RequestMapping("/receta-fav")
public class RecetaFavController {
    
    @Autowired
    private RecetaFavService recetaFavService;

    public RecetaFavController(RecetaFavService recetaFavService) {
        this.recetaFavService = recetaFavService;
    }

    @PostMapping
    public RecetaFav createRecetaFav(@RequestBody RecetaFav recetaFav) {
        return recetaFavService.saveRecetaFav(recetaFav);
    }

    @GetMapping
    public List<RecetaFav> getAllRecetasFav() {
        return recetaFavService.getAllRecetasFav();
    }

    @GetMapping("/{id}")
    public RecetaFav getRecetaFavById(@PathVariable Long id) {
        return recetaFavService.getRecetaFavById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteRecetaFav(@PathVariable Long id) {
        recetaFavService.deleteRecetaFav(id);
    }
}
