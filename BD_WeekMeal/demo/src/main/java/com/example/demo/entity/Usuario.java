package com.example.demo.entity;
import java.util.ArrayList;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;


@Entity
@Table(name = "users")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToMany(mappedBy = "usuario")
    private ArrayList<RecetaFav> recetasFavoritas = new ArrayList<>();

    @NotBlank(message = "Photo is mandatory") 
    private String foto;

    @NotBlank(message = "Name is mandatory") 
    private String nombreUsuario;

    @NotBlank(message = "Password is mandatory") 
    private String password;

    @Email
    private String email;

    private long telefono;

    @NotBlank(message = "Name is mandatory") 
    private String nombre;

    @NotBlank(message = "Name is mandatory") 
    private String apellidos;
    
    @OneToOne
    @JoinColumn(name = "idTolerancia")
    private Tolerancia tolerancia;

    public Usuario() {
    }   

    public Usuario(String foto, String nombreUsuario, String password, String email, long telefono, String nombre,
            String apellidos, Tolerancia tolerancia) {
        this.foto = foto;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.email = email;
        this.telefono = telefono;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.tolerancia = tolerancia;
    }
    
    public long getIdUsuario() {
        return id;
    }

    public void setIdUsuario(long idUsuario) {
        this.id = idUsuario;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getTelefono() {
        return telefono;
    }

    public void setTelefono(long telefono) {
        this.telefono = telefono;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public Tolerancia getIdTolerancia() {
        return tolerancia;
    }

    public void setIdTolerancia(Tolerancia tolerancia) {
        this.tolerancia = tolerancia;
    }

    @Override
    public String toString() {
        return "Usuario [idUsuario=" + id + ", foto=" + foto + ", user=" + nombreUsuario + ", password=" + password
                + ", email=" + email + ", telefono=" + telefono + ", nombre=" + nombre + ", apellidos=" + apellidos
                + "]";
    }
}