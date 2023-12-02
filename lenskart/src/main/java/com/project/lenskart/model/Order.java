package com.project.lenskart.model;


import java.util.Date;
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
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.project.lenskart.constants.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "OrdersDate")
    private Date ordersDate;

    @ManyToOne
    @JoinColumn(name = "CustomerID")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "EmployeeID")
    private Employee employee;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "PrescriptionID")
    private Prescription prescription;

    @Column(name = "CardNumber")
    private String cardNumber;

    @Column(name = "CVV")
    private String cvv;

    @Column(name = "ExpiryDate")
    private Date expiryDate;

    @Column(name = "NameOnCard")
    private String nameOnCard;

    @Column(name = "ActiveYN")
    private Status activeYN;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "orders")
    private List<OrderItem> orderItems;
}
