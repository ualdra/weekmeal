package com.example.weekmeal_sb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.example.weekmeal_sb.entity.RecetaFav;
import com.example.weekmeal_sb.entity.RecetaFavId;
import com.example.weekmeal_sb.services.RecetaFavService;

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
    public RecetaFav getRecetaFavById(@PathVariable RecetaFavId id) {
        return recetaFavService.getRecetaFavById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteRecetaFav(@PathVariable RecetaFavId id) {
        recetaFavService.deleteRecetaFav(id);
    }
}