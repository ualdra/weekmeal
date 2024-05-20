package com.example.weekmeal_sb.entity;


import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecetaFavId implements Serializable {

    private Long usuario;
    private Long receta;

    // Getters y Setters

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RecetaFavId that = (RecetaFavId) o;
        return Objects.equals(usuario, that.usuario) &&
               Objects.equals(receta, that.receta);
    }

    @Override
    public int hashCode() {
        return Objects.hash(usuario, receta);
    }
}

