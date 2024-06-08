package com.example.weekmeal_sb.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.weekmeal_sb.entity.Tolerancia;
import com.example.weekmeal_sb.repository.ToleranciaRepository;

@Service
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
        existingTolerancia.setKetogenic(toleranciaDetails.isKetogenic());
        existingTolerancia.setCheap(toleranciaDetails.isCheap());
        existingTolerancia.setIdUsuario(toleranciaDetails.getIdUsuario());
        
        toleranciaRepository.save(existingTolerancia);
    }

    public Tolerancia getToleranciaByUserId(long idUsuario) {
        Optional<Tolerancia> tolerancia = toleranciaRepository.findByIdUsuario(idUsuario);
        return tolerancia.orElse(null);
    }
}
