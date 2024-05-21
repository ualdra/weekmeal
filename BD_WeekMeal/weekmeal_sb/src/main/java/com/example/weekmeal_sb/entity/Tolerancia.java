package com.example.weekmeal_sb.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tolerancia")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tolerancia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTolerancia;

    @NotNull
    private boolean vegetarian;
    @NotNull
    private boolean dairyFree;
    @NotNull
    private boolean vegan;
    @NotNull
    private boolean glutenFree;
    @NotNull
    private boolean lowFodmap;
    @NotNull
    private boolean ketogenic;
    @NotNull
    private boolean cheap;

    @OneToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;
}
