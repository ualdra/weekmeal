package com.example.demo.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "tolerancia")
public class Tolerancia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idTolerancia;

    @Basic
    private boolean vegetarian;
    private boolean dairyFree;
    private boolean vegan;
    private boolean glutenFree;
    private boolean lowFodmap;
    private boolean ketogenic;
    private boolean cheap;

    public Tolerancia() {
    }

    public Tolerancia( boolean vegetarian, boolean dairyFree, boolean vegan, boolean glutenFree,
            boolean lowFodmap, boolean ketogenic, boolean cheap) {
        this.vegetarian = vegetarian;
        this.dairyFree = dairyFree;
        this.vegan = vegan;
        this.glutenFree = glutenFree;
        this.lowFodmap = lowFodmap;
        this.ketogenic = ketogenic;
        this.cheap = cheap;
    }

    public long getIdTolerancia() {
        return idTolerancia;
    }

    public void setIdTolerancia(int idTolerancia) {
        this.idTolerancia = idTolerancia;
    }

    public boolean isVegetarian() {
        return vegetarian;
    }

    public void setVegetarian(boolean vegetarian) {
        this.vegetarian = vegetarian;
    }

    public boolean isDairyFree() {
        return dairyFree;
    }

    public void setDairyFree(boolean dairyFree) {
        this.dairyFree = dairyFree;
    }

    public boolean isVegan() {
        return vegan;
    }

    public void setVegan(boolean vegan) {
        this.vegan = vegan;
    }

    public boolean isGlutenFree() {
        return glutenFree;
    }

    public void setGlutenFree(boolean glutenFree) {
        this.glutenFree = glutenFree;
    }

    public boolean isLowFodmap() {
        return lowFodmap;
    }

    public void setLowFodmap(boolean lowFodmap) {
        this.lowFodmap = lowFodmap;
    }

    public boolean isKetogenic() {
        return ketogenic;
    }

    public void setKetogenic(boolean ketogenic) {
        this.ketogenic = ketogenic;
    }

    public boolean isCheap() {
        return cheap;
    }

    public void setCheap(boolean cheap) {
        this.cheap = cheap;
    }
}
