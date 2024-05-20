package com.example.weekmeal_sb.entity;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuRecetaId implements Serializable {
    private Long menu;
    private Long receta;

    // Sobrescribir equals y hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MenuRecetaId that = (MenuRecetaId) o;
        return Objects.equals(menu, that.menu) && Objects.equals(receta, that.receta);
    }

    @Override
    public int hashCode() {
        return Objects.hash(menu, receta);
    }
}
