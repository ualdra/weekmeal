package com.example.weekmeal_sb.repository;

import java.util.List;

import com.example.weekmeal_sb.entity.Usuario;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
    List<Usuario> findAll();
}