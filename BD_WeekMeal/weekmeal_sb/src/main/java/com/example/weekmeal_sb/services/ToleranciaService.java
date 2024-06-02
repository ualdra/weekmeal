package com.example.weekmeal_sb.services;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.weekmeal_sb.entity.Tolerancia;
import com.example.weekmeal_sb.repository.ToleranciaRepository;

public class ToleranciaService {
    
    @Autowired
    private ToleranciaRepository toleranciaRepository;

    public ToleranciaService(ToleranciaRepository toleranciaRepository) {
        this.toleranciaRepository = toleranciaRepository;
    }

    public Tolerancia saveTolerancia(Tolerancia tolerancia) {
        return toleranciaRepository.save(tolerancia);
    }

    public Tolerancia getToleranciaById(long id) {
        return toleranciaRepository.findById(id).orElse(null);
    }

    public void updateTolerancia(long id, Tolerancia toleranciaDetails) {
        Tolerancia existingTolerancia = toleranciaRepository.findById(id).orElseThrow(() -> new RuntimeException("Tolerancia no encontrada"));
        existingTolerancia.setVegetarian(toleranciaDetails.isVegetarian());
        existingTolerancia.setVegan(toleranciaDetails.isVegan());
        existingTolerancia.setDairyFree(toleranciaDetails.isDairyFree());
        existingTolerancia.setGlutenFree(toleranciaDetails.isGlutenFree());
        existingTolerancia.setLowFodmap(toleranciaDetails.isLowFodmap());

        toleranciaRepository.save(existingTolerancia);
    }
}
