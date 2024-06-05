package com.example.weekmeal_sb.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "receta")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Receta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idReceta;

    @NotBlank
    @Column(length = 1024)
    private String nombre;
    @NotBlank
    @Column(length = 1024)
    private String imagen;
    @NotBlank
    @Column(length = 2048)
    private String descripcion;
    @NotBlank
    @Column(length = 2048)
    private String pasosReceta;

    @OneToMany(mappedBy = "receta")
    @JsonIgnore
    private List<MenuReceta> menus;

}