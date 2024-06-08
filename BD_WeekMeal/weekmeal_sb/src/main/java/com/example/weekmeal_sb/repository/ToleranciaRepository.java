package com.example.weekmeal_sb.repository;
import com.example.weekmeal_sb.entity.Tolerancia;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@EnableJpaRepositories
@CrossOrigin(originPatterns = "", allowCredentials = "true", allowedHeaders = "")
public interface ToleranciaRepository extends JpaRepository<Tolerancia, Long> {
    Optional<Tolerancia> findByIdUsuario(long idUsuario);
}
