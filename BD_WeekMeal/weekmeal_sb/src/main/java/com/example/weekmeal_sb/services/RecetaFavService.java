package com.example.weekmeal_sb.services;

import java.util.List;
import com.example.weekmeal_sb.entity.RecetaFav;
import com.example.weekmeal_sb.entity.RecetaFavId;
import com.example.weekmeal_sb.repository.RecetaFavRepository;

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

    public RecetaFav getRecetaFavById(RecetaFavId id) {
        return recetaFavRepository.findById(id).orElse(null);
    }

    public void deleteRecetaFav(RecetaFavId id) {
        recetaFavRepository.deleteById(id);
    }
}
