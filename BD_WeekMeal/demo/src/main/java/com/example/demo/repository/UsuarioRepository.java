package com.example.demo.repository;

import com.example.demo.entity.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.List;

@RepositoryRestResource
public interface UsuarioRepository extends JpaRepository<Usuario, Long> { 
    Usuario findByUser(String user);
    Usuario findByEmail(String email);
    Usuario findByTelefono(long telefono);
    List<Usuario> findAll();

}