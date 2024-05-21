package com.example.weekmeal_sb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.weekmeal_sb.entity.Menu;

@EnableJpaRepositories
@CrossOrigin(originPatterns = "", allowCredentials = "true", allowedHeaders = "")
public interface MenuRepository extends JpaRepository<Menu, Long> {
}
