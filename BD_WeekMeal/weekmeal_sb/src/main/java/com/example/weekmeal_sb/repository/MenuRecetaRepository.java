package com.example.weekmeal_sb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.weekmeal_sb.entity.MenuReceta;
import com.example.weekmeal_sb.entity.MenuRecetaId;

@EnableJpaRepositories
@CrossOrigin(originPatterns = "", allowCredentials = "true", allowedHeaders = "")
public interface MenuRecetaRepository extends JpaRepository<MenuReceta, MenuRecetaId> {
}