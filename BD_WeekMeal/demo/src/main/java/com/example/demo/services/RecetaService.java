package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Receta;
import com.example.demo.repository.RecetaRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RecetaService {
    
    @Autowired
    private RecetaRepository recetaRepository;

    public List<Receta> getAllRecetas() {
        return recetaRepository.findAll();
    }

    public Optional<Receta> getRecetaById(long id) {
        return recetaRepository.findById(id);
    }

    public Receta saveReceta(Receta receta) {
        return recetaRepository.save(receta);
    }

    public void deleteReceta(long id) {
        recetaRepository.deleteById(id);
    }
}
