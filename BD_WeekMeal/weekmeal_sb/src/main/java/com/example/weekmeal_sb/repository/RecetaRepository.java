package com.example.weekmeal_sb.repository;


import com.example.weekmeal_sb.entity.Receta;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@EnableJpaRepositories
@CrossOrigin(originPatterns = "", allowCredentials = "true", allowedHeaders = "")
public interface RecetaRepository extends JpaRepository<Receta, Long> {
    Optional<Receta> findByNombre(String nombre);
}
