package com.project.lenskart.dto;

import java.util.Date;

import com.project.lenskart.model.Order;
import com.project.lenskart.model.Product;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemDTO {
    private OrderDTO orders;
    private ProductDTO product;
    private Double unitPrice;
    private int quantity;
    private String status;
    private String shipper;
    private Date shippingDate;
    private String aptNo;
    private String streetName;
    private String city;
    private String state;
    private String zipCode;
}
