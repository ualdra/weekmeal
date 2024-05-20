package com.example.demo.services;

import java.util.List;

import com.example.demo.entity.RecetaFav;
import com.example.demo.entity.Usuario;
import com.example.demo.repository.RecetaFavRepository;
import com.example.demo.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RecetaFavService {
    @Autowired
    private RecetaFavRepository recetaFavRepository;

    public RecetaFavService(RecetaFavRepository recetaFavRepository) {
        this.recetaFavRepository = recetaFavRepository;
    }

    public RecetaFav saveRecetaFav(RecetaFav recetaFav) {
        return recetaFavRepository.save(recetaFav);
    }

    public List<RecetaFav> getAllRecetasFav() {
        return recetaFavRepository.findAll();
    }

    public RecetaFav getRecetaFavById(Long id) {
        return recetaFavRepository.findById(id).orElse(null);
    }

    public void deleteRecetaFav(Long id) {
        recetaFavRepository.deleteById(id);
    }
}
