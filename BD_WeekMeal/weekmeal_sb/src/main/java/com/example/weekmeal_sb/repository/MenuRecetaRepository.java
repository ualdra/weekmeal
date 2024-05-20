package com.example.weekmeal_sb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.weekmeal_sb.entity.MenuReceta;
import com.example.weekmeal_sb.entity.MenuRecetaId;

@EnableJpaRepositories
public interface MenuRecetaRepository extends JpaRepository<MenuReceta, MenuRecetaId> {
}