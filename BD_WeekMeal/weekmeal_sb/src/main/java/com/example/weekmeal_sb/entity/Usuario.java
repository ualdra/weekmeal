package com.example.weekmeal_sb.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long idUsuario;

    @NotBlank
    private String username;
    @NotBlank
    private String password;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String telefono;
    @NotBlank
    private String nombre;
    @NotBlank
    private String apellidos;

    @OneToOne
    @JoinColumn(name = "idTolerancia")
    private Tolerancia tolerancias;

    @OneToOne(mappedBy = "usuario")
    private Menu menu;

    // @OneToMany(mappedBy = "usuario")
    // @JsonManagedReference
    // private List<RecetaFav> recetasFavoritas;
}
