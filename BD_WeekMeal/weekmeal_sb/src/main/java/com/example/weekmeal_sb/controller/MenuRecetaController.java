package com.example.weekmeal_sb.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.weekmeal_sb.entity.MenuReceta;
import com.example.weekmeal_sb.entity.MenuRecetaId;
import com.example.weekmeal_sb.services.MenuRecetaService;

import java.util.List;

@RestController
@RequestMapping("/menu-recetas")
public class MenuRecetaController {
    
    @Autowired
    private final MenuRecetaService menuRecetaService;

    public MenuRecetaController(MenuRecetaService menuRecetaService) {
        this.menuRecetaService = menuRecetaService;
    }

    @GetMapping
    public List<MenuReceta> getAllMenuRecetas() {
        return menuRecetaService.getAllMenuRecetas();
    }

    @GetMapping("/{id}")
    public MenuReceta getMenuRecetaById(@PathVariable MenuRecetaId id) {
        return menuRecetaService.getMenuRecetaById(id);
    }

    @PostMapping
    public MenuReceta createMenuReceta(@RequestBody MenuReceta menuReceta) {
        return menuRecetaService.createMenuReceta(menuReceta);
    }

    @DeleteMapping("/{id}")
    public void deleteMenuReceta(@PathVariable MenuRecetaId id) {
        menuRecetaService.deleteMenuReceta(id);
    }
}