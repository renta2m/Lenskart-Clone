package com.project.lenskart.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemDTO {
    private Integer orderId;
    private ProductDTO product;
    private Double unitPrice;
    private Integer quantity;
    private String status;
    private String shipper;
    private Date shippingDate;
    private String aptNo;
    private String streetName;
    private String city;
    private String state;
    private String zipCode;
}
