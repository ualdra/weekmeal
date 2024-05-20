package com.example.demo.repository;

import java.util.List;

import com.example.demo.entity.Usuario;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
    Usuario findByNombreUsuario(String nombreUsuario);
    Usuario findByEmail(String email);
    Usuario findByTelefono(long telefono);
    List<Usuario> findAllByNombreIgnoreCase(String nombre);
    List<Usuario> findAll();
}