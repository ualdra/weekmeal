package com.example.demo.controller;

import java.util.List;

import com.example.demo.entity.Usuario;
import com.example.demo.services.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> getAllUsers() {
        return usuarioService.getAllUsers();
    }

    @GetMapping("/{idUsuario}")
    public Usuario getUserById(@PathVariable long idUsuario) {
        return usuarioService.getUserById(idUsuario);
    }

    @PostMapping
    public Usuario createUser(@RequestBody Usuario user) {
        return usuarioService.saveUser(user);
    }

    @DeleteMapping("/{idUsuario}")
    public void deleteUser(@PathVariable long idUsuario) {
        usuarioService.deleteUser(idUsuario);
    }

    @GetMapping("/nombre/{nombre}")
    public List<Usuario> getByNombre(@PathVariable("nombre") String nombre) {
        List<Usuario> usuarios = usuarioService.findAllByNombre(nombre);
        if (!usuarios.isEmpty()) {
            return usuarios;
        } else {
            return null; 
        }
    }

}