package com.example.weekmeal_sb.repository;


import com.example.weekmeal_sb.entity.Receta;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
public interface RecetaRepository extends JpaRepository<Receta, Long> {
    
}
