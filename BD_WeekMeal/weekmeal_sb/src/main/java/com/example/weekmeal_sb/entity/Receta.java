package com.example.weekmeal_sb.entity;

import java.util.List;

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
    private String nombre;
    @NotBlank
    private String imagen;
    @NotBlank
    private String descripcion;
    @NotBlank
    private String pasosReceta;

    @OneToMany(mappedBy = "receta")
    private List<MenuReceta> menus;

}