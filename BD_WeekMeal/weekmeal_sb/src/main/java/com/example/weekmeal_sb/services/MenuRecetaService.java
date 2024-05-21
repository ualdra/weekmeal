package com.example.weekmeal_sb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.weekmeal_sb.entity.MenuReceta;
import com.example.weekmeal_sb.entity.MenuRecetaId;
import com.example.weekmeal_sb.repository.MenuRecetaRepository;

import java.util.List;





@Service
public class MenuRecetaService {
    
    @Autowired
    private final MenuRecetaRepository menuRecetaRepository;

 
    public MenuRecetaService(MenuRecetaRepository menuRecetaRepository) {
        this.menuRecetaRepository = menuRecetaRepository;
    }

    public List<MenuReceta> getAllMenuRecetas() {
        return menuRecetaRepository.findAll();
    }

    public MenuReceta getMenuRecetaById(MenuRecetaId id) {
        return menuRecetaRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("MenuReceta not found with id: " + id));
    }

    public MenuReceta createMenuReceta(MenuReceta menuReceta) {
        return menuRecetaRepository.save(menuReceta);
    }

    public void deleteMenuReceta(MenuRecetaId id) {
        menuRecetaRepository.deleteById(id);
    }
}
