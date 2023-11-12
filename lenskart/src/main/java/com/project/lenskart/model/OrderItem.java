package com.project.lenskart.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "OrdersItem")
public class OrderItem {
    @Id
    @ManyToOne
    @JoinColumn(name = "OrdersID")
    private Order order;

    @Id
    @ManyToOne
    @JoinColumn(name = "ProductID")
    private Product product;

    @Column(name = "UnitPrice")
    private Double unitPrice;

    @Column(name = "Quantity")
    private int quantity;

    @Column(name = "Status")
    private String status;

    @Column(name = "Shipper")
    private String shipper;

    @Column(name = "ShippingDate")
    private Date shippingDate;

    @Column(name = "AptNo")
    private String aptNo;

    @Column(name = "StreetName")
    private String streetName;

    @Column(name = "City")
    private String city;

    @Column(name = "State")
    private String state;

    @Column(name = "ZipCode")
    private String zipCode;
}
