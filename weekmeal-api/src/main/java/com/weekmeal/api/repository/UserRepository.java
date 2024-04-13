package com.weekmeal.api.repository;

import com.weekmeal.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Aquí puedes añadir métodos para buscar usuarios por username, email, etc., si es necesario.
}
