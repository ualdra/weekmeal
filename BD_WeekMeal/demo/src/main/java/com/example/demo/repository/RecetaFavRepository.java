package com.example.demo.repository;

import com.example.demo.entity.RecetaFav;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecetaFavRepository extends JpaRepository<RecetaFav, Long> {

}