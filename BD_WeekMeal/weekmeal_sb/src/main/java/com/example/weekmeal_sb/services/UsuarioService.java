package com.example.weekmeal_sb.services;

import java.util.List;
import com.example.weekmeal_sb.entity.Usuario;
import com.example.weekmeal_sb.repository.UsuarioRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    private static final Logger log = LoggerFactory.getLogger(UsuarioService.class);

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
        Usuario existingUser = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        existingUser.setNombre(userDetails.getNombre());
        existingUser.setApellidos(userDetails.getApellidos());
        existingUser.setEmail(userDetails.getEmail());
        existingUser.setUsername(userDetails.getUsername());
        existingUser.setPassword(userDetails.getPassword());
        existingUser.setTelefono(userDetails.getTelefono());  
        existingUser.setTolerancias(userDetails.getTolerancias());
        existingUser.setMenu(userDetails.getMenu());
        existingUser.setRecetasFavoritas(userDetails.getRecetasFavoritas());
        existingUser.setTelefono(userDetails.getTelefono());

        return usuarioRepository.save(existingUser);
    }

    public void deleteUser(long id) {
        usuarioRepository.deleteById(id);
    }

    @Transactional
    public Usuario login(Usuario user) {
        try {
            Usuario existingUser = usuarioRepository.findByUsername(user.getUsername());
            if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
                return existingUser;
            }
        } catch (Exception e) {
            // Log the exception
            log.error("Error during login", e);
        }
        return null;
    }
    
}
