package com.example.weekmeal_sb.repository;

import com.example.weekmeal_sb.entity.Usuario;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@Transactional
@CrossOrigin(originPatterns = "", allowCredentials = "true", allowedHeaders = "")
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByUsername(String username);
}
