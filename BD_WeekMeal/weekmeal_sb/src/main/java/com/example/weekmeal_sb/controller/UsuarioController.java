package com.example.weekmeal_sb.controller;

import java.util.List;
import com.example.weekmeal_sb.entity.Usuario;
import com.example.weekmeal_sb.services.UsuarioService;
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

    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario user) {
        return usuarioService.login(user);
    }

    @PutMapping("/{idUsuario}")
    public Usuario updateUser(@PathVariable long idUsuario, @RequestBody Usuario userDetails) {
        return usuarioService.updateUser(idUsuario, userDetails);
    }

    @DeleteMapping("/{idUsuario}")
    public void deleteUser(@PathVariable long idUsuario) {
        usuarioService.deleteUser(idUsuario);
    }
}
