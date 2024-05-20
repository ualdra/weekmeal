package com.example.weekmeal_sb.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "recetas_favoritas")
@Data
@NoArgsConstructor
@AllArgsConstructor
@IdClass(RecetaFavId.class)
public class RecetaFav {

    @Id
    @ManyToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;

    @Id
    @ManyToOne
    @JoinColumn(name = "idReceta")
    private Receta receta;
}
