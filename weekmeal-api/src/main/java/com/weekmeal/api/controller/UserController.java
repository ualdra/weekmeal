package com.weekmeal.api.controller;

import com.weekmeal.api.entity.User;
import com.weekmeal.api.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User savedUser = userService.registerUser(user);
        // No devolver la entidad User directamente para no exponer información sensible como la contraseña
        // Considera usar DTOs (Data Transfer Objects) para enviar y recibir datos de la API
        return ResponseEntity.ok().body(savedUser);
    }

    // Otros endpoints si es necesario
}
