package com.example.keyboardofficialbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "brand")
    private String brand;

    @Column(name = "quantity")
    private String quantity;

    @Column(name = "price")
    private float price;

    @Column(name = "deadline")
    private String ddl;

    @Column(name = "progress")
    private float progress;

    public Product() {

    }

    public Product(String name, String brand, String quantity, float price, String ddl, float progress) {
        super();
        this.name = name;
        this.brand = brand;
        this.quantity = quantity;
        this.price = price;
        this.ddl = ddl;
        this.progress = progress;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDdl() {
        return ddl;
    }

    public void setDdl(String ddl) {
        this.ddl = ddl;
    }

    public float getProgress() {
        return progress;
    }

    public void setProgress(float progress) {
        this.progress = progress;
    }


}