package com.example.weekmeal_sb.services;

import java.util.List;

import com.example.weekmeal_sb.entity.Usuario;
import com.example.weekmeal_sb.repository.UsuarioRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UsuarioService {


    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> getAllUsers() {
        return usuarioRepository.findAll();
    }

    public Usuario getUserById(long id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    public Usuario saveUser(Usuario user) {
        return usuarioRepository.save(user);
    }

    public Usuario updateUser(long id, Usuario userDetails) {
        Usuario existingUser = usuarioRepository.findById(id).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        existingUser.setNombre(userDetails.getNombre());
        existingUser.setApellidos(userDetails.getApellidos());
        existingUser.setEmail(userDetails.getEmail());
        existingUser.setUsername(userDetails.getUsername());
        existingUser.setPassword(userDetails.getPassword());
        existingUser.setTelefono(userDetails.getTelefono());  

        return usuarioRepository.save(existingUser);
    }
    public void deleteUser(long id) {
        usuarioRepository.deleteById(id);
    }


}