package com.example.weekmeal_sb.repository;

import com.example.weekmeal_sb.entity.RecetaFav;
import com.example.weekmeal_sb.entity.RecetaFavId;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@EnableJpaRepositories
@CrossOrigin(originPatterns = "", allowCredentials = "true", allowedHeaders = "")
public interface RecetaFavRepository extends JpaRepository<RecetaFav, RecetaFavId> {
    boolean existsByUsuarioIdUsuarioAndRecetaIdReceta(Long idUsuario, Long idReceta);
    List<RecetaFav> findAllByUsuarioIdUsuario(Long idUsuario);
}