package com.example.demo.entity;
import java.util.ArrayList;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;


@Entity
@Table(name = "recetas")


public class Receta {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idReceta;

    @OneToMany(mappedBy = "receta")
    private ArrayList<RecetaFav> usuariosFavoritos = new ArrayList<>();

    @NotBlank(message = "Name is mandatory") 
    private String nombre;

    @NotBlank(message = "Photo is mandatory") 
    private String imagen;
    public Receta() {
    }

    public Receta(int idReceta, String nombre, String imagen) {
        this.idReceta = idReceta;
        this.nombre = nombre;
        this.imagen = imagen;
    }
    
    public long getIdReceta() {
        return idReceta;
    }
    
    public void setIdReceta(int idReceta) {
        this.idReceta = idReceta;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public String getImagen() {
        return imagen;
    }
    
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
}
