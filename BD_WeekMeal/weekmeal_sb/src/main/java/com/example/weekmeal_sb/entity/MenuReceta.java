package com.example.weekmeal_sb.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "menu_receta")
@Data
@NoArgsConstructor
@AllArgsConstructor
@IdClass(MenuRecetaId.class)
public class MenuReceta {
    @Id
    @ManyToOne
    @JoinColumn(name = "idMenu")
    private Menu menu;

    @Id
    @ManyToOne
    @JoinColumn(name = "idReceta")
    private Receta receta;
}
