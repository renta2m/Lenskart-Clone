package com.project.lenskart.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.project.lenskart.dto.ReviewDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "Name")
    private String name;

    @Column(name = "Brand")
    private String brand;

    @Column(name = "Price")
    private Double price;

    @Column(name = "Category")
    private String category;

    @Column(name = "Details")
    private String details;

    @Column(name = "FrameColor")
    private String frameColor;

    @Column(name = "FrameShape")
    private String frameShape;

    @Column(name = "FrameSize")
    private String frameSize;

    @Column(name = "FrameType")
    private String frameType;

    @ManyToOne
    @JoinColumn(name = "WarehouseID")
    private Warehouse warehouse;

    @OneToMany(mappedBy = "product")
    private List<Review> reviews;

}
