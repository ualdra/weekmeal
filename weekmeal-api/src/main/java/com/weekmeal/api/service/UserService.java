package com.weekmeal.api.service;

import com.weekmeal.api.entity.User;
import com.weekmeal.api.repository.UserRepository;
// import org.springframework.security.crypto.password.PasswordEncoder; // Descomenta para seguridad
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;
    // private final PasswordEncoder passwordEncoder; // Descomenta para seguridad

    // Constructor simplificado, descomenta la parte de passwordEncoder para seguridad
    public UserService(UserRepository userRepository/*, PasswordEncoder passwordEncoder*/) {
        this.userRepository = userRepository;
        // this.passwordEncoder = passwordEncoder; // Descomenta para seguridad
    }

    @Transactional
    public User registerUser(User user) {
        // user.setPassword(passwordEncoder.encode(user.getPassword())); // Descomenta para codificar la contraseña
        return userRepository.save(user);
    }

    // Otros métodos de negocio si es necesario.
}
