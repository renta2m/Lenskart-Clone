package com.project.lenskart.model;


import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import com.project.lenskart.dto.OrderStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "ordersItem")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;

    @Column
    private Double unitPrice;
    @Column
    private Integer quantity;
    @Column
    private OrderStatus status;
    @Column
    private String shipper;
    @Column
    private Date shippingDate;
    @Column
    private String aptNo;
    @Column
    private String streetName;
    @Column
    private String city;
    @Column
    private String state;
    @Column
    private String zipCode;
}
