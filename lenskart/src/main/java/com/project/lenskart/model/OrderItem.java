package com.project.lenskart.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "OrdersItem")
@IdClass(OrderItemPkId.class)
public class OrderItem {
    @Id
    @ManyToOne
    @JoinColumn(name = "OrdersID")
    @JsonIgnore
    private Order orders;

    @Id
    @ManyToOne
    @JoinColumn(name = "ProductID")
    private Product product;

    @Column(name = "UnitPrice")
    private Double unitPrice;

    @Column(name = "Quantity")
    private Integer quantity;

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
