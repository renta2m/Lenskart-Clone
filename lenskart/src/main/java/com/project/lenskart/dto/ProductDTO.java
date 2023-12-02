package com.project.lenskart.dto;

import java.util.ArrayList;
import java.util.List;

import com.project.lenskart.model.Review;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDTO {
    private Integer id;
    private String name;
    private String brand;
    private Double price;
    private String category;
    private String details;
    private String frameColor;
    private String frameShape;
    private String frameSize;
    private String frameType;
    private String imagePath;
    private WarehouseDTO warehouse;
}
